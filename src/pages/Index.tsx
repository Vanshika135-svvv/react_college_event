import { useState, useEffect } from "react";
import VideoBackground from "@/components/VideoBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventList from "@/components/EventList";
import EventForm from "@/components/EventForm";
import AuthForm from "@/components/AuthForm";
import Footer from "@/components/Footer";

type Section = 'home' | 'events' | 'register-form' | 'auth-section';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  const handleNavigate = (section: Section) => {
    setCurrentSection(section);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAuthClick = () => {
    if (isAuthenticated) {
      // Log out
      setIsAuthenticated(false);
      setCurrentUserId(null);
      handleNavigate('home');
    } else {
      handleNavigate('auth-section');
    }
  };

  const handleAuthSuccess = (email: string) => {
    setIsAuthenticated(true);
    setCurrentUserId(email.substring(0, email.indexOf('@')) || 'User');
    handleNavigate('home');
  };

  // Add section transition animation
  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.classList.add('section-transition');
    }
  }, [currentSection]);

  return (
    <div className="min-h-screen flex flex-col">
      <VideoBackground />
      
      <Header
        isAuthenticated={isAuthenticated}
        currentUserId={currentUserId}
        onAuthClick={handleAuthClick}
        onNavigate={handleNavigate}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentSection === 'home' && (
          <Hero
            onExploreEvents={() => handleNavigate('events')}
            onSubmitEvent={() => handleNavigate('register-form')}
          />
        )}

        {currentSection === 'events' && (
          <EventList onRegisterClick={() => handleNavigate('register-form')} />
        )}

        {currentSection === 'register-form' && <EventForm />}

        {currentSection === 'auth-section' && (
          <AuthForm onSuccess={handleAuthSuccess} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default Index;
