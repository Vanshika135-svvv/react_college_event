import { useState } from "react";
import { Event, MOCK_EVENTS } from "@/types/event";
import EventCard from "./EventCard";
import EventModal from "./EventModal";
import BackgroundAnimation from "./BackgroundAnimation";

type Category = 'all' | 'academic' | 'sport' | 'cultural' | 'other';

interface EventListProps {
  onRegisterClick: () => void;
}

const EventList = ({ onRegisterClick }: EventListProps) => {
  const [currentFilter, setCurrentFilter] = useState<Category>('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = MOCK_EVENTS.filter(event =>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <EventCard
                key={event.id}
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
