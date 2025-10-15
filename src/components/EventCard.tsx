import { Calendar, MapPin } from "lucide-react";
import { Event } from "@/types/event";

interface EventCardProps {
  event: Event;
  index: number;
  onClick: () => void;
}

const EventCard = ({ event, index, onClick }: EventCardProps) => {
  const colorMap = {
    academic: 'bg-blue-600',
    sport: 'bg-red-600',
    cultural: 'bg-yellow-600',
    other: 'bg-gray-600'
  };

  const bgColor = colorMap[event.category];

  return (
    <div
      className={`animated-card bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-[1.02] overflow-hidden cursor-pointer delay-${index}`}
      onClick={onClick}
    >
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.currentTarget.src = 'https://placehold.co/600x400/e0e7ff/6d28d9?text=Event+Image+Placeholder';
        }}
      />

      <div className="p-6">
        <span className={`inline-block ${bgColor} text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider`}>
          {event.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>

        <div className="space-y-2 text-sm text-gray-600">
          <p className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-violet-700" />
            {event.date}
          </p>
          <p className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-violet-700" />
            {event.location}
          </p>
        </div>

        <button className="mt-4 w-full text-violet-700 font-semibold py-2 border border-violet-200 rounded-lg hover:bg-violet-50 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
