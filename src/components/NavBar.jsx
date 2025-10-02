import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Navbar with filters
export default ({ categories, filters, setFilters }) => {
  const navigate=useNavigate();
  return (
    <div className="grid grid-cols-3 shadow-md p-3">
      <div className="px-2 justify-self-start font-bold text-2xl">
        <p>Event Ease</p>
      </div>

      {/* Filters */}
      <div className="flex justify-center space-x-4">
        {/* Category */}
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="border px-2 py-1 rounded"
        >
          <option value="All">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Location */}
        <select
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="border px-2 py-1 rounded"
        >
          <option value="All">All Locations</option>
          <option value="Online">Online</option>
          <option value="In-Person">In-Person</option>
        </select>

        {/* Date */}
        <select
          value={filters.date}
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
          className="border px-2 py-1 rounded"
        >
          <option value="All">All Dates</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Past">Past</option>
        </select>
      </div>

      {/* Right side (login/signup) */}
      <div className="justify-self-end">
        <div className="flex">
          <div className="py-2">
            <button onClick={()=>{navigate("/login")}}>Login</button>
            <button className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-md"
              onClick={()=>{navigate("/register")}} 
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
