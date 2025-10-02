import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
export default function LandingPage() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    category: "All",
    location: "All",
    date: "All",
  });

  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
  });

  // Fetch events
  const fetchEvents = async (page = 1) => {
    try {
      const res = await fetch(`http://localhost:8080/api/user/events?page=${page}`);
      const data = await res.json();
      setEvents(data.data);

      // Collect unique categories for filter
      const uniqueCats = [...new Set(data.data.map((e) => e.eventCategory))];
      setCategories(uniqueCats);

      setPagination(data.pagination);
    } catch (err) {
      console.error("Error fetching events", err);
    }
  };

  useEffect(() => {
    fetchEvents(1);
  }, []);

  // Apply filters whenever events or filters change
  useEffect(() => {
    let filtered = [...events];

    // Category filter
    if (filters.category !== "All") {
      filtered = filtered.filter((e) => e.eventCategory === filters.category);
    }

    // Location filter
    if (filters.location !== "All") {
      filtered = filtered.filter((e) => e.eventLocation === filters.location);
    }

    // Date filter (example: assume eventDate is "2025-10-15")
    if (filters.date !== "All") {
      const now = new Date();
      filtered = filtered.filter((e) => {
        const eventDate = new Date(e.eventDate);
        if (filters.date === "Upcoming") return eventDate >= now;
        if (filters.date === "Past") return eventDate < now;
        return true;
      });
    }

    setFilteredEvents(filtered);
  }, [events, filters]);

  return (
    <>
    <div>
      {/* Navbar with filters */}
      <Navbar categories={categories} filters={filters} setFilters={setFilters} />

      {/* Event Cards */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event._id} className="border p-4 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold">{event.eventName}</h2>
            <p className="text-gray-600">Category: {event.eventCategory}</p>
            <p className="text-gray-600">Location: {event.eventLocation}</p>
            <p className="text-gray-600">Seats: {event.eventSeats}</p>
            <p className="text-gray-600">Date: {event.eventDate}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={() => fetchEvents(pagination.currentPage - 1)}
          disabled={!pagination.hasPrevPage}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-4 py-2">
          Page {pagination.currentPage} of {pagination.totalPages}
        </span>

        <button
          onClick={() => fetchEvents(pagination.currentPage + 1)}
          disabled={!pagination.hasNextPage}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      
    </div>
    <Footer></Footer>
    </>
  );
}
