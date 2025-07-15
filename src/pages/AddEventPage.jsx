import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  title: z.string().min(3),
  date: z.string().refine((val) => !isNaN(Date.parse(val))),
  time: z.string().min(1),
  location: z.string().min(2),
  guests: z.number({ invalid_type_error: "Guests must be a number" }).min(1),
  image: z.string().url(),
  address: z.string().min(5, "Address required"),
  description: z.string().min(10, "Description too short"),
});

export default function AddEventPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

const onSubmit = (data) => {
  const prev = JSON.parse(localStorage.getItem("events")) || [];
  const newEvent = { ...data,  id: Date.now().toString() + Math.floor(Math.random() * 1000) };
  const updated = [...prev, newEvent];
  localStorage.setItem("events", JSON.stringify(updated));
  navigate('/');
};

  return (
    <div>
    
     <form
  onSubmit={handleSubmit(onSubmit)}
  className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6"
>
  <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">
    Add New Event
  </h1>


  <div>
    <label className="block mb-1 font-semibold text-gray-700">Title</label>
    <input
      {...register("title")}
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
    />
    {errors.title && (
      <p className="text-red-500 mt-1 text-sm">{errors.title.message}</p>
    )}
  </div>


  <div>
    <label className="block mb-1 font-semibold text-gray-700">Date</label>
    <input
      type="date"
      {...register("date")}
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
    />
    {errors.date && (
      <p className="text-red-500 mt-1 text-sm">{errors.date.message}</p>
    )}
  </div>

  <div>
    <label className="block mb-1 font-semibold text-gray-700">Time</label>
    <input
      type="time"
      {...register("time")}
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
    />
    {errors.time && (
      <p className="text-red-500 mt-1 text-sm">{errors.time.message}</p>
    )}
  </div>

  <div>
    <label className="block mb-1 font-semibold text-gray-700">Location</label>
    <input
      {...register("location")}
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
    />
    {errors.location && (
      <p className="text-red-500 mt-1 text-sm">{errors.location.message}</p>
    )}
  </div>

  <div>
    <label className="block mb-1 font-semibold text-gray-700">
      Number of Guests
    </label>
    <input
      type="number"
      {...register("guests", { valueAsNumber: true })}
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
    />
    {errors.guests && (
      <p className="text-red-500 mt-1 text-sm">{errors.guests.message}</p>
    )}
  </div>

  <div>
    <label className="block mb-1 font-semibold text-gray-700">Image URL</label>
    <input
      {...register("image")}
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
    />
    {errors.image && (
      <p className="text-red-500 mt-1 text-sm">{errors.image.message}</p>
    )}
  </div>

  <div>
    <label className="block mb-1 font-semibold text-gray-700">Address</label>
    <input
      {...register("address")}
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
    />
    {errors.address && (
      <p className="text-red-500 mt-1 text-sm">{errors.address.message}</p>
    )}
  </div>

  <div>
    <label className="block mb-1 font-semibold text-gray-700">Description</label>
    <textarea
      {...register("description")}
      className="w-full border border-gray-300 rounded-md px-4 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-purple-400"
      rows={4}
    />
    {errors.description && (
      <p className="text-red-500 mt-1 text-sm">{errors.description.message}</p>
    )}
  </div>

  <button
    type="submit"
    className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
  >
    Add Event
  </button>
</form>

    </div>
  );
}
