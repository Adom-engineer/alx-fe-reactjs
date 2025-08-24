import { useState } from 'react';

// Simulated auth hook — replace with real logic later
export default function useAuth() {
  const [isAuthenticated] = useState(true); // Change to false to test redirect
  return { isAuthenticated };
}