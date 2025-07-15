import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <Link
      to={`/events/${event.id}`}
      className="block rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
    >
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-purple-900 mb-2">{event.title}</h2>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Date:</span> {event.date} at {event.time}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Location:</span> {event.location}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Guests:</span> {event.guests}
        </p>
      </div>
    </Link>
  );
}
