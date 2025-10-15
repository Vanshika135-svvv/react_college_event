import { useState } from "react";
import { toast } from "sonner";
import { Calendar, MapPin, FileText, Tag, Send, Sparkles } from "lucide-react";
import BackgroundAnimation from "./BackgroundAnimation";

const EventForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    setShowSuccess(true);
    toast.success("🎉 Event submitted successfully!", {
      description: "Your event will be reviewed by our team shortly.",
    });
    form.reset();

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section className="py-16 relative">
      <BackgroundAnimation variant="form" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full mb-4 animate-stagger-item">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Create Your Event</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 animate-stagger-item animation-delay-100">
            Bring Your Event to Life
          </h2>
          <p className="text-xl text-gray-600 animate-stagger-item animateStaggerItemWithDelay">
            Share your event with the campus community in just a few clicks
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-violet-100 form-card-hover animate-stagger-item" style={{ animationDelay: '0.3s' }}>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Event Name */}
            <div className="relative">
              <label 
                htmlFor="event-name" 
                className={`flex items-center gap-2 text-sm font-semibold mb-2 transition-colors ${
                  focusedField === 'event-name' ? 'text-violet-700' : 'text-gray-700'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                Event Name
              </label>
              <input
                type="text"
                id="event-name"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-0 focus:border-violet-500 transition-all duration-300 text-gray-900 font-medium input-focus-glow"
                placeholder="e.g., Annual Tech Fest 2026"
                required
                onFocus={() => setFocusedField('event-name')}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            {/* Date and Location Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label 
                  htmlFor="event-date" 
                  className={`flex items-center gap-2 text-sm font-semibold mb-2 transition-colors ${
                    focusedField === 'event-date' ? 'text-violet-700' : 'text-gray-700'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  Event Date
                </label>
                <input
                  type="date"
                  id="event-date"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-0 focus:border-violet-500 transition-all duration-300 text-gray-900 font-medium input-focus-glow"
                  required
                  onFocus={() => setFocusedField('event-date')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              
              <div className="relative">
                <label 
                  htmlFor="event-location" 
                  className={`flex items-center gap-2 text-sm font-semibold mb-2 transition-colors ${
                    focusedField === 'event-location' ? 'text-violet-700' : 'text-gray-700'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  Location
                </label>
                <input
                  type="text"
                  id="event-location"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-0 focus:border-violet-500 transition-all duration-300 text-gray-900 font-medium input-focus-glow"
                  placeholder="e.g., Auditorium Hall B"
                  required
                  onFocus={() => setFocusedField('event-location')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>

            {/* Description */}
            <div className="relative">
              <label 
                htmlFor="event-description" 
                className={`flex items-center gap-2 text-sm font-semibold mb-2 transition-colors ${
                  focusedField === 'event-description' ? 'text-violet-700' : 'text-gray-700'
                }`}
              >
                <FileText className="w-4 h-4" />
                Event Description
              </label>
              <textarea
                id="event-description"
                rows={5}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-0 focus:border-violet-500 transition-all duration-300 text-gray-900 resize-none input-focus-glow"
                placeholder="Tell us about your event... What makes it special?"
                onFocus={() => setFocusedField('event-description')}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            {/* Category */}
            <div className="relative">
              <label 
                htmlFor="event-category" 
                className={`flex items-center gap-2 text-sm font-semibold mb-2 transition-colors ${
                  focusedField === 'event-category' ? 'text-violet-700' : 'text-gray-700'
                }`}
              >
                <Tag className="w-4 h-4" />
                Event Category
              </label>
              <select
                id="event-category"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-0 focus:border-violet-500 transition-all duration-300 text-gray-900 font-medium appearance-none bg-white cursor-pointer input-focus-glow"
                required
                onFocus={() => setFocusedField('event-category')}
                onBlur={() => setFocusedField(null)}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236d28d9'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.5em 1.5em',
                  paddingRight: '3rem'
                }}
              >
                <option value="">Select a category...</option>
                <option value="academic">📚 Academic</option>
                <option value="sport">⚽ Sports</option>
                <option value="cultural">🎭 Cultural</option>
                <option value="other">✨ Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 via-violet-700 to-purple-700 text-white font-bold py-5 rounded-xl transition-all duration-300 shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 relative overflow-hidden group gradient-animated"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Send className="w-5 h-5" />
                  Submit Event for Approval
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </div>

            {showSuccess && (
              <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl animate-stagger-item">
                <p className="text-center text-sm font-semibold text-green-700 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Thank you! Your event has been submitted for review.
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-violet-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-violet-700" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Quick Review</h3>
            <p className="text-sm text-gray-600">Events are reviewed within 24 hours</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-violet-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-violet-700" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Free Promotion</h3>
            <p className="text-sm text-gray-600">Your event promoted across campus</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-violet-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
              <Send className="w-6 h-6 text-violet-700" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Easy Management</h3>
            <p className="text-sm text-gray-600">Track registrations and updates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventForm;
