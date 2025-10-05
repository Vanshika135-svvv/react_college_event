import BackgroundAnimation from "./BackgroundAnimation";

interface HeroProps {
  onExploreEvents: () => void;
  onSubmitEvent: () => void;
}

const Hero = ({ onExploreEvents, onSubmitEvent }: HeroProps) => {
  return (
    <section className="pt-16 pb-24 text-center relative overflow-hidden">
      <BackgroundAnimation variant="hero" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h1
          className="text-6xl md:text-7xl tracking-tight leading-tight hero-headline animate-stagger-item"
          style={{ animationDelay: '0s' }}
        >
          Manage, Promote, and Attend{' '}
          <span className="hero-highlight">Campus Events</span>
        </h1>
        <p
          className="mt-4 text-xl text-white md:text-gray-200 animate-stagger-item"
          style={{ animationDelay: '0.1s', textShadow: '0 0 5px rgba(0,0,0,0.5)' }}
        >
          Your central hub for everything happening at the university. Discover,
          register, and never miss an opportunity.
        </p>
        <div
          className="mt-10 flex justify-center space-x-4 animate-stagger-item"
          style={{ animationDelay: '0.2s' }}
        >
          <button
            onClick={onExploreEvents}
            className="hero-btn bg-violet-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 active:scale-[0.98]"
          >
            Explore Events
          </button>
          <button
            onClick={onSubmitEvent}
            className="hero-btn bg-white text-violet-700 border border-violet-700 font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-violet-50 transition duration-300 transform hover:scale-105 active:scale-[0.98]"
          >
            Submit an Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
