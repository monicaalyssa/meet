import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";
import Event from "../components/Event";
import EventList from '../components/EventList';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature,  test => {
    let AppComponent, AppDOM, user; 

    beforeEach(() => {
        user = userEvent.setup();
        AppComponent = render(<App />);
        AppDOM = AppComponent.container.firstChild;
    });

    test('An event element is collapsed by default.', ({ given, when, then, and }) => {
        given('the user is on the upcoming events page', () => {});

        when('the user views a list of different upcoming events', async () => {
            const allEvents = await getEvents();

            const { container } = render(<EventList events={allEvents} loading={false} />);
            const EventListDOM = await waitFor(() => container.querySelector('#event-list'));
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBeGreaterThan(32);
            });
        });

        then('the events should be collapsed by default', async () => {
            const allEvents = await getEvents();
            const { container } = render(<EventList events={allEvents} loading={false} />);
            const EventListDOM = await waitFor(() => container.querySelector('#event-list'));
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        });

        and('the user should be given the option to show a specific events details', async () => {
            const allEvents = await getEvents();
            const { container } = render(<EventList events={allEvents} loading={false} />);
            const EventListDOM = await waitFor(() => container.querySelector('#event-list'));
            const detailsButton = await waitFor(() => EventListDOM.querySelector('.details-btn'));
            expect(detailsButton).toBeInTheDocument();
        });
    });

    test('User can expand an event to see details.', ({ given, when, then, and }) => {
        given('the user is on the upcoming events page', () => {});

        when('the user clicks on expand details', async () => {
            const detailsButton = AppDOM.querySelector('.details-btn');
            await user.click(detailsButton);
        });

        let EventComponent;
        then('the user should be given more information on the event', async () => {
            const allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />)
            const showDetails = EventComponent.getAllByText('Show details');
            await user.click(showDetails[0]);
            EventComponent = render(<Event event={allEvents[0]} />)
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).toBeInTheDocument();
        });

        and('should be given the option to hide details', async () => {
            const allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />)
            const hideDetails = EventComponent.getAllByText('Hide details')
            expect(hideDetails.length).toBeGreaterThan(0);
        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then, and }) => {
        given('the user expands a specific events details', async () => {
            const allEvents = await getEvents();
            const EventComponent = render(<Event event={allEvents[0]} />)
            const detailsButton = AppDOM.querySelector('.details-btn');
            await user.click(detailsButton);
        });

        when('the user clicks on the collapse option', async () => {
            const hideDetails = AppDOM.querySelector('.details-btn')
            await user.click(hideDetails[0]);
        });

        then('the event element should hide additional details', () => {
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        });

        and('should be given the option to show details again', () => {
            const detailsButton = AppDOM.querySelector('.details-btn');
            expect(detailsButton).toBeInTheDocument();
        });
    });
});