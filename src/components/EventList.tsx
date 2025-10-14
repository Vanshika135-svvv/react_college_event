import { useState, useEffect } from "react"; // 👈 1. Import useEffect
import { Event } from "@/types/event";
import EventCard from "./EventCard";
import EventModal from "./EventModal";
import BackgroundAnimation from "./BackgroundAnimation";

// Note: MOCK_EVENTS is removed since we're fetching live data. 
// If you want to keep MOCK_EVENTS as a fallback, define that logic here.

type Category = 'all' | 'academic' | 'sport' | 'cultural' | 'other';

interface EventListProps {
  onRegisterClick: () => void;
}

const EventList = ({ onRegisterClick }: EventListProps) => {
  // 2. Add state for the actual events data
  const [events, setEvents] = useState<Event[]>([]);
  // 3. Add state for loading and error handling (good practice)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentFilter, setCurrentFilter] = useState<Category>('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // 4. Add the useEffect hook for data fetching
  useEffect(() => {
    // Define the async function inside useEffect
    const fetchEvents = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/events');
        
        // Handle non-OK responses (e.g., 404, 500)
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data: Event[] = await res.json();
        setEvents(data);
        setError(null); // Clear any previous error
      } catch (err: any) {
        console.error("Could not fetch events:", err);
        setError("Failed to load events. Please check the backend server.");
        setEvents([]); // Set events to empty array on failure
      } finally {
        setLoading(false); // Done loading whether successful or not
      }
    };

    fetchEvents();
  }, []); // Empty dependency array means this runs only ONCE on mount

  // 5. Use the actual 'events' state instead of MOCK_EVENTS
  const filteredEvents = events.filter(event =>
    currentFilter === 'all' || event.category === currentFilter
  );

  const filterButtons: { category: Category; label: string }[] = [
    { category: 'all', label: 'All Events' },
    { category: 'academic', label: 'Academic' },
    { category: 'sport', label: 'Sports' },
    { category: 'cultural', label: 'Cultural' },
    { category: 'other', label: 'Other' }
  ];

  return (
    <section className="py-16 relative">
      <BackgroundAnimation variant="events" />

      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 relative z-10">
        Upcoming Campus Highlights
      </h2>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {/* Filter Buttons remain the same */}
          {filterButtons.map(({ category, label }) => (
            <button
              key={category}
              onClick={() => setCurrentFilter(category)}
              className={`py-2 px-6 rounded-full shadow-md transition active:scale-[0.98] ${
                currentFilter === category
                  ? 'bg-violet-700 text-white hover:bg-violet-800'
                  : 'bg-white text-violet-700 border border-violet-300 hover:bg-violet-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* 6. Display Loading/Error States */}
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

        {/* 7. Display Event Cards only when not loading AND no error */}
        {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                  <EventCard
                    key={event.id || index} // Use 'id' from backend if available
                    event={event}
                    index={index}
                    onClick={() => setSelectedEvent(event)}
                  />
                ))
              ) : (
                <p className="col-span-full text-center text-gray-600 text-lg py-8">
                  No events found in this category.
                </p>
              )}
            </div>
        )}
      </div>

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onRegister={() => {
            setSelectedEvent(null);
            onRegisterClick();
          }}
        />
      )}
    </section>
  );
};

export default EventList;