import { Routes, Route, Link } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import AddEventPage from './pages/AddEventPage';
import EventDetailsPage from './pages/EventDetailsPage';
export default function App() {
  return (
   <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 p-6">
  <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8">
     <nav className="flex justify-between items-center mb-8">
  <Link
    to="/"
    className="text-3xl font-extrabold text-purple-700 hover:text-purple-900 transition"
  >
    Events
  </Link>
  <Link
    to="/add"
    className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition"
  >
    Add Event
  </Link>
</nav>

      <Routes>
        
        <Route index element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
        <Route path="/add" element={<AddEventPage />} />
      </Routes>
   </div>
</div>)
}
