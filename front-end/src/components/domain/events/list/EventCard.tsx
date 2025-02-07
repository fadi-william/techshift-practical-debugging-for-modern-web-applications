import { IEventModel } from '@/services/events';

interface IEventCardProps {
  event: IEventModel;
}

const EventCard = ({ event }: IEventCardProps) => {
  return (
    // Case Study 3 - Debugging a style issue.
    <div key={event.id} className="border-4 border-black p-4 rounded shadow">
      <img
        src={`http://localhost:3000/images/${event.image}`}
        alt={event.title}
        className="w-full h-48 
        object-cover rounded"
      />
      <h2 className="font-bold">{event.title}</h2>
      <p>{event.description}</p>
      <div className="bg-gray-200 text-gray-800 text-sm font-medium mt-2 mb-2 px-2.5 py-0.5 rounded-full inline-block">
        {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }).replace(',', '')}
      </div>
    </div>
  );
};

export default EventCard;
