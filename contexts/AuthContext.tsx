'use client';

import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in (e.g., from localStorage or session)
    const checkAuth = () => {
      const loggedIn = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(loggedIn);
      setIsLoading(false);
      
      // If not logged in and not on login page, redirect to login
      if (!loggedIn && !window.location.pathname.includes('login')) {
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  const login = async (username: string, password: string): Promise<boolean> => {
    // For demo purposes - replace with actual authentication logic
    if (username === 'admin' && password === 'Aa1234567$$$') {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    router.push('/login');
  };

  if (isLoading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
