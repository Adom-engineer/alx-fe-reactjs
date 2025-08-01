import { useState } from "react";
import { advancedSearchUsers } from "../services/githubService";

function Search() {
  const [formData, setFormData] = useState({
    username: "",
    location: "",
    minRepos: "",
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);
    setCurrentPage(1);

    try {
      const data = await advancedSearchUsers({ ...formData, page: 1 });
      setResults(data.items || []);
      setTotalPages(Math.ceil(data.total_count / 30));
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = async (page) => {
    setCurrentPage(page);
    setLoading(true);
    setError(false);

    try {
      const data = await advancedSearchUsers({ ...formData, page });
      setResults(data.items || []);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="GitHub Username"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location (optional)"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="minRepos"
          value={formData.minRepos}
          onChange={handleChange}
          placeholder="Minimum Public Repos (optional)"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && (
        <p className="text-center mt-4 text-red-500">
          Looks like we can't find the user
        </p>
      )}

      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center space-x-4 border p-3 rounded"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded ${
                page === currentPage
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;