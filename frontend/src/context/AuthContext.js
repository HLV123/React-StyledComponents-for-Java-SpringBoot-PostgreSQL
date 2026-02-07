import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setUser({
        id: 1,
        name: 'Bons',
        email: 'bons@example.com',
        avatar: '🧑‍💻',
        plan: 'pro',
        role: 'ROLE_USER',
      });
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (email, password) => {
    const mockUser = {
      id: 1, name: 'Bons', email, avatar: '🧑‍💻', plan: 'pro', role: 'ROLE_USER',
    };
    localStorage.setItem('accessToken', 'mock-jwt-token');
    localStorage.setItem('refreshToken', 'mock-refresh-token');
    setUser(mockUser);
    return mockUser;
  }, []);

  const register = useCallback(async (name, email, password) => {
    const mockUser = {
      id: 1, name, email, avatar: '🧑‍💻', plan: 'starter', role: 'ROLE_USER',
    };
    localStorage.setItem('accessToken', 'mock-jwt-token');
    setUser(mockUser);
    return mockUser;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
  }, []);

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    isPro: user?.plan === 'pro' || user?.plan === 'master',
    isMaster: user?.plan === 'master',
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
