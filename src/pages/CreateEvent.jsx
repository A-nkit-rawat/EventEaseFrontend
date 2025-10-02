import { useState } from "react";
import axios from "axios";
import AdminBar from "../components/AdminBar";

export default function CreateEvent() {
  const [formData, setFormData] = useState({
    eventName: "",
    eventSeats: "",
    eventCategory: "",
    eventLocation: "Online",
    eventDescription: "",
    eventDate: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Post request (adjust API URL as needed)
      const res = await axios.post("https://eventease-v8y4.onrender.com/api/admin/events", formData);

      setMessage("✅ Event created successfully!");
      setFormData({
        eventName: "",
        eventSeats: "",
        eventCategory: "",
        eventLocation: "Online",
        eventDescription: "",
        eventDate: "",
      });
    } catch (error) {
      setMessage("❌ Failed to create event. Try again.");
    }
  };

  return (
    <>
    <AdminBar></AdminBar>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Event</h2>
        
        {message && (
          <p className="mb-4 text-center text-sm font-semibold text-green-600">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Event Name */}
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            placeholder="Event Name"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />
        {/* Event Description */}
           <input
            type="text"
            name="eventDescription"
            value={formData.eventDescription}
            onChange={handleChange}
            placeholder="Event Description"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          /> 

          {/* Event Seats */}
          <input
            type="number"
            name="eventSeats"
            value={formData.eventSeats}
            onChange={handleChange}
            placeholder="Number of Seats"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />

          {/* Event Category */}
          <input
            type="text"
            name="eventCategory"
            value={formData.eventCategory}
            onChange={handleChange}
            placeholder="Category (e.g. Finance, Tech)"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />

          {/* Event Location */}
          <select
            name="eventLocation"
            value={formData.eventLocation}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="Online">Online</option>
            <option value="In-Person">In-Person</option>
          </select>

          {/* Event Date */}
          <input
            type="datetime-local"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
