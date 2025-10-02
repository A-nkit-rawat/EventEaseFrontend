import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterFrom from './pages/Registration';
import AdminPage from './pages/AdminPage';
import CreateEvent from './pages/CreateEvent';
import AdminEvents from './pages/AdminEvents';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/events/:id" element={<EventDetailsPage />} /> */}
             {/* <Route path="/create-event" element={<CreateEventPage />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterFrom />} />
            <Route path="/adminPanel" element={<AdminPage></AdminPage>} />
            <Route path="/create-event" element={<CreateEvent></CreateEvent>} />
            <Route path="/all-events" element={<AdminEvents></AdminEvents>} />
            {/* <Route path="/profile" element={<ProfilePage />} /> */ }
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
