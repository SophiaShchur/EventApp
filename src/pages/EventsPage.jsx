import { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
const defaultEvents = [
  {
    id: "1",
    title: "Summer Festival",
    date: "2025-08-10",
    time: "18:00",
    location: "Odesa, Ukraine",
    guests: 150,
    image: "https://34travel.me/media/upload/images/2017/november/butik/2.jpg",
    address: "Freedom Avenue, 45, Odesa",
    description: "A vibrant summer festival with music, food, and fun activities for all ages."
  },
  {
    id: "2",
    title: "Tech Meetup",
    date: "2025-09-02",
    time: "10:30",
    location: "Lviv IT Cluster",
    guests: 60,
    image: "https://pasv.us/sites/default/files/2023-01/36950887_2076211942706237_4834234937190121472_n.jpg",
    address: "Sakadachnogo St, 12, Lviv",
    description: "A meetup for developers and product people to share insights and innovations in modern tech."
  },
  {
    id: "3",
    title: "St. Valentines Party",
    date: "2026-02-14",
    time: "19:30",
    location: "Odesa, Ukraine",
    guests: 50,
    image: "https://www.thoughtco.com/thmb/rThkshlkjXDUN432pEzEbgJ9sNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-548761389-56b289c45f9b58def9c8bc4c.jpg",
    address: "Deribasivska St, 15, Odesa",
    description: "Celebrate love and friendship with music, dance, and romantic surprises."
  }
];

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("events");
    if (stored) {
      setEvents(JSON.parse(stored));
    } else {
      localStorage.setItem("events", JSON.stringify(defaultEvents));
      setEvents(defaultEvents);
    }
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-800 drop-shadow-sm">
  Upcoming Events
</h1>
      {events.length === 0 ? (
        <p>No events yet.</p>
      ) : (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
  {events.map((event) => (
    <EventCard key={event.id} event={event} />
  ))}
</div>
      )}
    </div>
  );
}
