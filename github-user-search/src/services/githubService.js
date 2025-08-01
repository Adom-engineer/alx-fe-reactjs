import axios from "axios";

// Advanced search using GitHub Search API with pagination
export async function advancedSearchUsers({ username, location, minRepos, page = 1 }) {
  let query = username;

  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${query}&page=${page}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchUserData(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}