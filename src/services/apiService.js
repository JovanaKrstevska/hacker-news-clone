import axios from 'axios';

const API_URL = 'https://hn.algolia.com/api/v1';

// Fetch top stories
export const fetchTopStories = async () => {
  try {
    const response = await axios.get(`${API_URL}/search_by_date?tags=front_page`);
    return response.data.hits; // Return the list of stories
  } catch (error) {
    console.error('Error fetching top stories:', error);
    throw error;
  }
};

// Fetch a specific story by ID
export const fetchStoryById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/items/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching story with ID ${id}:`, error);
    throw error;
  }
};

// Search stories by query
export const searchStories = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search?query=${query}`);
    return response.data.hits; // Return the search results
  } catch (error) {
    console.error(`Error searching stories for "${query}":`, error);
    throw error;
  }
};