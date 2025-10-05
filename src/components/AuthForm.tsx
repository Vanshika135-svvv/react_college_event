import { useState } from "react";
import { toast } from "sonner";
import { Mail, Lock, LogIn, UserPlus, Sparkles } from "lucide-react";
import BackgroundAnimation from "./BackgroundAnimation";

interface AuthFormProps {
  onSuccess: (email: string) => void;
}

const AuthForm = ({ onSuccess }: AuthFormProps) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('auth-email') as HTMLInputElement).value;
    const action = isLoginMode ? 'Login' : 'Sign Up';

    setIsLoading(true);
    toast.info(`Processing ${action} for ${email}...`);

    setTimeout(() => {
      if (isLoginMode) {
        onSuccess(email);
        toast.success(`🎉 Login successful for ${email.substring(0, email.indexOf('@')) || 'User'}.`);
      } else {
        setIsLoginMode(true);
        toast.success('✨ Registration successful! Please sign in.');
      }
      form.reset();
      setIsLoading(false);
    }, 1500);
  };

  const toggleAuthMode = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLoginMode(!isLoginMode);
  };

  return (
    <section className="py-16 relative">
      <BackgroundAnimation variant="auth" />
      
      <div className="max-w-md mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full mb-4 animate-stagger-item">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Secure Access</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2 animate-stagger-item" style={{ animationDelay: '0.1s' }}>
            {isLoginMode ? 'Welcome Back!' : 'Join Us Today'}
          </h2>
          <p className="text-gray-600 animate-stagger-item" style={{ animationDelay: '0.2s' }}>
            {isLoginMode 
              ? 'Sign in to manage your events and registrations'
              : 'Create an account to start organizing events'}
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-violet-100 form-card-hover animate-stagger-item" style={{ animationDelay: '0.3s' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label 
                htmlFor="auth-email" 
                className={`flex items-center gap-2 text-sm font-semibold mb-2 transition-colors ${
                  focusedField === 'auth-email' ? 'text-violet-700' : 'text-gray-700'
                }`}
              >
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                type="email"
                id="auth-email"
                name="auth-email"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-0 focus:border-violet-500 transition-all duration-300 text-gray-900 font-medium input-focus-glow"
                placeholder="your.email@university.edu"
                required
                disabled={isLoading}
                onFocus={() => setFocusedField('auth-email')}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            <div className="relative">
              <label 
                htmlFor="auth-password" 
                className={`flex items-center gap-2 text-sm font-semibold mb-2 transition-colors ${
                  focusedField === 'auth-password' ? 'text-violet-700' : 'text-gray-700'
                }`}
              >
                <Lock className="w-4 h-4" />
                Password
              </label>
              <input
                type="password"
                id="auth-password"
                name="auth-password"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-0 focus:border-violet-500 transition-all duration-300 text-gray-900 font-medium input-focus-glow"
                placeholder="Enter your password"
                required
                disabled={isLoading}
                onFocus={() => setFocusedField('auth-password')}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-violet-600 via-violet-700 to-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 relative overflow-hidden group gradient-animated disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center gap-3">
                {isLoginMode ? <LogIn className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
                {isLoading ? 'Processing...' : (isLoginMode ? 'Sign In' : 'Sign Up')}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>

            <p className="text-center text-sm text-gray-600 pt-4 border-t border-gray-100">
              <span>
                {isLoginMode ? "Don't have an account?" : "Already have an account?"}
              </span>{' '}
              <a
                href="#"
                onClick={toggleAuthMode}
                className="text-violet-700 font-semibold hover:text-violet-800 hover:underline transition-colors"
              >
                {isLoginMode ? 'Sign Up' : 'Sign In'}
              </a>
            </p>
          </form>
        </div>

        {/* Security Badge */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Secure & Encrypted</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
