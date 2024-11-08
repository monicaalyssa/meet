import { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alerts';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';
import './App.css';
import Loader from './components/Loader';

function App() {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.onLine) {
      setWarningAlert("You are offline. Events data may be outdated.");
    } else {
      setWarningAlert("")
    }
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    setLoading(true)
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ? allEvents : allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
    setLoading(false);
  }

  const handleNOEChange = (newNOE) => {
    setCurrentNOE(newNOE);
  }

  return (
    <div className="App">
      <div className='alerts-container'>
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
      </div>
      {loading ? (
        <div className="loading-container">
          <Loader></Loader><p>Loading events...</p>
        </div>
      ) : (
        <>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert}/>
      <NumberOfEvents setCurrentNOE={setCurrentNOE} onChangeNOE={handleNOEChange} setErrorAlert={setErrorAlert} />
      <div className='charts-container'>
        <CityEventsChart allLocations={allLocations} events={events}/>
        <EventGenresChart events={events}/>
      </div>
      <EventList events={events}/>
      </>
      )}
    </div>
  );
}

export default App;
