import Event from "./Event";
import Loader from "./Loader";

const EventList = ({ events, loading }) => {
  return (
      <>
          {loading ? (
              <div className="loading-container">
                  <Loader />
                  <p>Loading events...</p>
              </div>
          ) : (
              <ul id="event-list">
                  { events && events.map((event) => (
                      <Event key={event.id} event={event} />
                  )) }
              </ul>
          )}
      </>
  );
};


export default EventList;