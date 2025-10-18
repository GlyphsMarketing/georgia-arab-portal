// Simple auth service with localStorage for demo purposes
// In a real project, this would connect to an actual API

// Mock user database
const MOCK_USERS = [
  {
    id: 1,
    email: 'demo@example.com',
    password: 'password123', // In a real app, this would be hashed
    firstName: 'Ahmed',
    lastName: 'Mohammed',
    phone: '+1 (404) 555-1234',
    accountType: 'individual',
    profileImage: '/api/placeholder/50/50',
    createdAt: '2023-05-15'
  }
];

// Local storage keys
const AUTH_TOKEN_KEY = 'auth_token';
const CURRENT_USER_KEY = 'current_user';
const IS_AUTHENTICATED_KEY = 'isAuthenticated';

export const authService = {
  // Login function
  login: async (email, password) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Find user in mock database
    const user = MOCK_USERS.find(u => 
      u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    
    if (!user) {
      throw new Error('Invalid email or password');
    }
    
    // Create a user object without the password
    const { password: _, ...userWithoutPassword } = user;
    
    // Generate a fake token
    const token = `mock-token-${Math.random().toString(36).substring(2)}`;
    
    // Store in localStorage
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
    localStorage.setItem(IS_AUTHENTICATED_KEY, 'true');
    
    return { user: userWithoutPassword, token };
  },
  
  // Register function
  register: async (userData) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    const existingUser = MOCK_USERS.find(u => 
      u.email.toLowerCase() === userData.email.toLowerCase()
    );
    
    if (existingUser) {
      throw new Error('Email already in use');
    }
    
    // Create new user
    const newUser = {
      id: MOCK_USERS.length + 1,
      ...userData,
      profileImage: '/api/placeholder/50/50',
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    // Add to mock database (in a real app, this would be an API call)
    MOCK_USERS.push(newUser);
    
    // Create a user object without the password
    const { password: _, ...userWithoutPassword } = newUser;
    
    // Generate a fake token
    const token = `mock-token-${Math.random().toString(36).substring(2)}`;
    
    // Store in localStorage
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
    localStorage.setItem(IS_AUTHENTICATED_KEY, 'true');
    
    return { user: userWithoutPassword, token };
  },
  
  // Logout function
  logout: () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(CURRENT_USER_KEY);
    localStorage.removeItem(IS_AUTHENTICATED_KEY);
  },
  
  // Get current user
  getCurrentUser: () => {
    const userJson = localStorage.getItem(CURRENT_USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  },
  
  // Check if user is authenticated
  isAuthenticated: () => {
    return localStorage.getItem(IS_AUTHENTICATED_KEY) === 'true';
  },
  
  // Reset password (mock function)
  resetPassword: async (email) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user exists
    const existingUser = MOCK_USERS.find(u => 
      u.email.toLowerCase() === email.toLowerCase()
    );
    
    if (!existingUser) {
      throw new Error('Email not found');
    }
    
    // In a real app, this would send an email with a reset link
    return { success: true, message: 'Password reset link sent to your email' };
  }
};

export default authService;