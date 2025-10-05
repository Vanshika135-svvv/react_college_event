import { X, Calendar, Clock, MapPin, User } from "lucide-react";
import { Event } from "@/types/event";

interface EventModalProps {
  event: Event;
  onClose: () => void;
  onRegister: () => void;
}

const EventModal = ({ event, onClose, onRegister }: EventModalProps) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10 max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto transform scale-95 transition-all duration-300">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-3xl font-bold text-violet-700">{event.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              {event.description}
            </p>

            <div className="space-y-4 border-t border-gray-200 pt-4">
              <div className="flex items-center text-gray-700">
                <Calendar className="w-5 h-5 mr-3 text-violet-700" />
                <span className="font-semibold">Date: {event.date}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 mr-3 text-violet-700" />
                <span>Time: {event.time}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-3 text-violet-700" />
                <span>Location: {event.location}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <User className="w-5 h-5 mr-3 text-violet-700" />
                <span>Organizer: {event.organizer}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="rounded-lg w-full mb-4 shadow-lg"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/400x300/e0e7ff/6d28d9?text=Event+Image';
              }}
            />
            <button
              onClick={onRegister}
              className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition duration-300 shadow-md active:scale-[0.98]"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
