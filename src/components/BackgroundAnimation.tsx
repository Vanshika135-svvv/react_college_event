interface BackgroundAnimationProps {
  variant?: 'hero' | 'events' | 'form' | 'auth';
}

const BackgroundAnimation = ({ variant = 'hero' }: BackgroundAnimationProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return (
          <>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px] floating-element" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] floating-element" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500/15 rounded-full blur-[90px] floating-element" style={{ animationDelay: '4s' }} />
          </>
        );
      case 'events':
        return (
          <>
            <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/15 rounded-full blur-[80px] pulse-glow" />
            <div className="absolute bottom-20 left-20 w-56 h-56 bg-violet-500/15 rounded-full blur-[70px] pulse-glow" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px] pulse-glow" style={{ animationDelay: '3s' }} />
          </>
        );
      case 'form':
        return (
          <>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-full blur-[120px] floating-element" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-500/20 to-violet-600/20 rounded-full blur-[120px] floating-element" style={{ animationDelay: '3s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] pulse-glow" />
          </>
        );
      case 'auth':
        return (
          <>
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/20 rounded-full blur-[100px] floating-element" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[90px] floating-element" style={{ animationDelay: '2s' }} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {getVariantStyles()}
    </div>
  );
};

export default BackgroundAnimation;
