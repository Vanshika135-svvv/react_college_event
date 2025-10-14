import { useState, useEffect } from "react";
import { Event } from "@/types/event";
import EventCard from "./EventCard";
import EventModal from "./EventModal";
import BackgroundAnimation from "./BackgroundAnimation";

// Type for event categories
type Category = 'all' | 'academic' | 'sport' | 'cultural' | 'other';

interface EventListProps {
  onRegisterClick: () => void;
}

const EventList = ({ onRegisterClick }: EventListProps) => {
  // State for fetched events
  const [events, setEvents] = useState<Event[]>([]);
  // State for loading and error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State for filtering and selection
  const [currentFilter, setCurrentFilter] = useState<Category>('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Fetch events on mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Vite uses import.meta.env for env vars (prefix VITE_), not process.env
        const apiUrl = (import.meta.env.VITE_EVENTS_API as string) || 'http://localhost:5000/api/events';
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: Event[] = await res.json();
        setEvents(data);
        setError(null);
      } catch (err: any) {
        console.error("Could not fetch events:", err);
        setError("Failed to load events. Please check the backend server.");
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Filter buttons
  const filterButtons: { category: Category; label: string }[] = [
    { category: 'all', label: 'All Events' },
    { category: 'academic', label: 'Academic' },
    { category: 'sport', label: 'Sport' },
    { category: 'cultural', label: 'Cultural' },
    { category: 'other', label: 'Other' },
  ];

  // Filtering logic
  const filteredEvents = events.filter((event) => {
    if (currentFilter === 'all') return true;
    const cat = (event.category || '').toString().toLowerCase();
    return cat === currentFilter;
  });

  return (
    <div className="relative">
      <BackgroundAnimation />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filterButtons.map(({ category, label }) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium 
                ${currentFilter === category ? 'bg-violet-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-violet-100'}`}
              onClick={() => setCurrentFilter(category as Category)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Loading/Error States */}
        {loading && (
          <p className="col-span-full text-center text-xl text-violet-500 py-12">
            Loading events...
          </p>
        )}

        {error && (
          <p className="col-span-full text-center text-xl text-red-500 py-12">
            {error}
          </p>
        )}

        {/* Event Cards */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <EventCard
                  key={event.id || index}
                  event={event}
                  index={index}
                  onClick={() => setSelectedEvent(event)}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-lg text-gray-600 py-8">
                No events found for the selected category.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Modal for event details */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onRegister={onRegisterClick}
        />
      )}
    </div>
  );
};

export default EventList;
