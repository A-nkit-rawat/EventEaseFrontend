import React, { useEffect, useState } from "react"; // your existing navbar
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SeeAllEvents() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:8080/api/admin/events", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents(res.data.data || []);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this event?");
    if (!confirm) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:8080/api/admin/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Event deleted ✅");
      fetchEvents(); // refresh the list
    } catch (err) {
      console.error("Error deleting event:", err);
      alert("Failed to delete event");
    }
  };

  return (
    <div>
      

      {/* Event Cards */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event._id}
            className="border p-4 rounded-2xl shadow-md flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold">{event.eventName}</h2>
              <p className="text-gray-600">Category: {event.eventCategory}</p>
              <p className="text-gray-600">Location: {event.eventLocation}</p>
              <p className="text-gray-600">Seats: {event.eventSeats}</p>
              <p className="text-gray-600">
                Date: {new Date(event.eventDate).toLocaleString()}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => navigate(`/update-event/${event._id}`)}
                className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
              >
                Update Event
              </button>
              <button
                onClick={() => navigate(`/see-event/${event._id}`)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
              >
                See Event
              </button>
              <button
                onClick={() => handleDelete(event._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Delete Event
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
