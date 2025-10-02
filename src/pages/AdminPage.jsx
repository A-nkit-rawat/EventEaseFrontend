import { useNavigate } from "react-router-dom";
import AdminBar from "../components/AdminBar";
import Footer from "../components/Footer";

export default function AdminPage() {
  const navigate = useNavigate();

  return (
    <>
    <AdminBar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        
        {/* Create Event Card */}
        <div
          onClick={() => navigate("/create-event")}
          className="cursor-pointer bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold mb-4">Create Event</h2>
          <p className="text-gray-600 text-center">
            Click here to add a new event to the system.
          </p>
        </div>

        {/* See All Events Card */}
        <div
          onClick={() => navigate("/all-events")}
          className="cursor-pointer bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold mb-4">See All Events</h2>
          <p className="text-gray-600 text-center">
            View and manage all events.
          </p>
        </div>

      </div>
    </div>
    <Footer>  </Footer>
    </>
  );
}
