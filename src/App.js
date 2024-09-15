import './App.css';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import mockData from './mock-data';

function App() {
  const mockDataEvents = mockData;
  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents />
      <EventList events={mockDataEvents} key={mockDataEvents.id}/>
    </div>
  );
}

export default App;
