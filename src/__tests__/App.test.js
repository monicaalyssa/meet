import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";
import EventList from '../components/EventList';

describe('App /> component', () => {
    let AppDOM;
    beforeEach(() => {
        AppDOM = render(<App />).container.firstChild;
    })
    
    test('Renders list of events', async () => {
        const allEvents= await getEvents();
        const { container } = render(<EventList events={allEvents} loading={false} />);
        const EventListDOM = await waitFor(() => container.querySelector('#event-list'));
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
    });

    test('Render CitySearch', () => {
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    })

    test('Renders number of events', () => {
        expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
    })
})

describe('<App /> integration', () => {
    test('Renders a list of events matching the city selected by the user', async () => {
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        
        const CitySearchDOM = AppDOM.querySelector('#city-search');
        const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');

        await user.type(CitySearchInput, "Berlin");
        const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany');
        await user.click(berlinSuggestionItem);

        const EventListDOM = AppDOM.querySelector('#event-list');
        const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');

        const allEvents = await getEvents();
        const berlinEvents = allEvents.filter(
            event => event.location === 'Berlin, Germany'
        );

        expect(allRenderedEventItems.length).toBe(berlinEvents.length);
        allRenderedEventItems.forEach(event => {
            expect(event.textContent).toContain("Berlin, Germany");
        });
    });
})
