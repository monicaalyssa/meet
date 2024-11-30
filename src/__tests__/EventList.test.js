import { render, within, waitFor } from "@testing-library/react";
import EventList from "../components/EventList";
import { getEvents } from "../api";
import App from "../App";

describe('<EventList /> component', () => {
    let EventListComponent;
    beforeEach(() => {
        EventListComponent = render(<EventList />);
    })

    test('Has an element with "list" role', () => {
        expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
    });

    test('Renders correct number of events', async () => {
        const allEvents = await getEvents();
        EventListComponent.rerender(<EventList events={allEvents} />);
        expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
    })
});

describe('<EventList /> integration', () => {
    test('Renders a list of 32 events when the app is mounted and rendered', async () => {
        
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        const allEvents = await getEvents();
        const { container } = render(<EventList events={allEvents} loading={false} />);
        const EventListDOM = await waitFor(() => container.querySelector('#event-list'));
        await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBeGreaterThan(32);
        })
    })
})