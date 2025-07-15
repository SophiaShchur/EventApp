import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EventDetailsPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const found = events.find(ev => ev.id === id);
    setEvent(found);
  }, [id]);

  if (!event) return <p className="text-gray-500">Event not found.</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-10">
      <Link
        to="/"
        className="inline-block mb-6 text-purple-600 hover:underline font-semibold"
      >
        ← Back to Events
      </Link>
      <h1 className="text-4xl font-bold mb-4 text-purple-800">{event.title}</h1>
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
      )}
      <p className="text-lg mb-2">
        <strong>Date & Time:</strong> {event.date} at {event.time}
      </p>
      <p className="text-lg mb-2">
        <strong>Location:</strong> {event.location}
      </p>
      <p className="text-lg mb-2">
        <strong>Address:</strong> {event.address}
      </p>
      <p className="text-lg mb-2">
        <strong>Guests:</strong> {event.guests}
      </p>
      <p className="text-lg mt-4 whitespace-pre-line">{event.description}</p>
    </div>
  );
}
