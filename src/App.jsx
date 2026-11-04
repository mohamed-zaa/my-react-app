
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agree: false,
    country: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-5 text-center">
          Registration Form
        </h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-3"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-3"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-3"
          required
        />

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-3"
          required
        >
          <option value="">Select Country</option>
          <option value="Somalia">Somalia</option>
          <option value="Kenya">Kenya</option>
          <option value="Ethiopia">Ethiopia</option>
        </select>

        <label className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          I agree to the terms
        </label>

        <button
          type="submit"
          className="bg-rose-600 text-white p-2 rounded w-full hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="bg-white p-5 rounded-xl shadow-md w-full max-w-md mt-5">
          <h2 className="text-xl font-bold mb-3">Submitted Data</h2>
          <p>Username: {submittedData.username}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
          <p>Country: {submittedData.country}</p>
          <p>Agreed: {submittedData.agree ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}

export default App;
