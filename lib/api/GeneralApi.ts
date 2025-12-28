import React from "react";

// lib/services/api.ts
export interface HeaderData {
  logo: string;
  email: string;
  phone: string;
  headerCategories: Array<{
    id: string;
    name: {
      en: string;
    };
    slug: string;
    children: Array<{
      id: string;
      name: {
        en: string;
      };
      slug: string;
    }>;
  }>;
}

export interface ApiResponse {
  data: {
    header: HeaderData;
  };
}

// Base API configuration
const API_BASE_URL = 'https://www.wondertravelegypt.com/api';

// Generic fetch function with error handling
async function fetchApi<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} - ${response.statusText}`);
  }
  
  return response.json();
}

// Specific API functions
export const apiService = {
  // Fetch general data
  async getGeneralData(): Promise<ApiResponse> {
    return fetchApi<ApiResponse>('/general');
  },
  
  // You can add more API methods here
  async getTours(): Promise<any> {
    return fetchApi('/tours');
  },
  
  async getCategories(): Promise<any> {
    return fetchApi('/categories');
  },
  
  // Add more methods as needed
};

// Custom hook for general data
export const useGeneralData = () => {
  const [data, setData] = React.useState<HeaderData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);
        const result = await apiService.getGeneralData();
        setData(result.data.header);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return { data, loading, error };
};