import { useState, useEffect } from 'react';
import AuthContext from './authContext';
import authService from './authService';

// Authentication Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  // Initialize auth state from local storage
  useEffect(() => {
    const initAuth = () => {
      const currentUser = authService.getCurrentUser();
      const isUserAuthenticated = authService.isAuthenticated();
      
      setUser(currentUser);
      setIsAuthenticated(isUserAuthenticated);
      setLoading(false);
    };
    
    initAuth();
  }, []);

  // Login function
  const login = async (email, password) => {
    setLoading(true);
    setAuthError(null);
    
    try {
      const { user } = await authService.login(email, password);
      setUser(user);
      setIsAuthenticated(true);
      return user;
    } catch (error) {
      setAuthError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (userData) => {
    setLoading(true);
    setAuthError(null);
    
    try {
      const { user } = await authService.register(userData);
      setUser(user);
      setIsAuthenticated(true);
      return user;
    } catch (error) {
      setAuthError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  // Reset password function
  const resetPassword = async (email) => {
    setLoading(true);
    setAuthError(null);
    
    try {
      return await authService.resetPassword(email);
    } catch (error) {
      setAuthError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Clear any auth errors
  const clearError = () => {
    setAuthError(null);
  };

  // Context value
  const contextValue = {
    user,
    isAuthenticated,
    loading,
    authError,
    login,
    register,
    logout,
    resetPassword,
    clearError
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};