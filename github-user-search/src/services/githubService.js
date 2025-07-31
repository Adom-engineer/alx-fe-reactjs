import axios from "axios";

// Advanced search using GitHub Search API
export async function advancedSearchUsers({ username, location, repos }) {
  let query = username;

  if (location) query += `+location:${location}`;
  if (repos) query += `+repos:>=${repos}`;

  const url = `https://api.github.com/search/users?q=${query}`;

  const response = await axios.get(url);
  return response.data;
}
export async function fetchUserData(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}

