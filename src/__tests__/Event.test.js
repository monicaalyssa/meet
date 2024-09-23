import { render } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import mockData from "../mock-data"

describe('<Event /> component', () => {
    let EventComponent;
    const event = mockData[0];
    beforeEach(() => {
        EventComponent = render(<Event event={event} />);
    })

    test('Renders event location', () => {
        expect(EventComponent.queryByText(mockData[0].location)).toBeInTheDocument();
    });

    test('Renders event summary', () => {
        expect(EventComponent.queryByText(mockData[0].summary)).toBeInTheDocument();
    });

    test('Renders event show details button', () => {
        expect(EventComponent.queryByText('Show details')).toBeInTheDocument();
    });

    test('Event details are hidden by default', () => {
        const eventDetails = EventComponent.container.querySelector('.details');
        expect(eventDetails).not.toBeInTheDocument();
    });

    test('Renders event details when a user clicks on show details button', async () => {
        const user = userEvent.setup();
        let showButton = EventComponent.queryByText('Show details');
        let hideButton = EventComponent.queryByText('Hide details');
        expect(hideButton).not.toBeInTheDocument();
        await user.click(showButton);
        let details = EventComponent.container.querySelector('.details');
        expect(details).toBeInTheDocument();
    });

    test('Hides event details when user clicks on hide details button', async () => {
        const user = userEvent.setup();
        let showButton = EventComponent.queryByText('Show details');
        await user.click(showButton);
        let details = EventComponent.container.querySelector('.details');
        expect(details).toBeInTheDocument();

        let hideButton = EventComponent.queryByText('Hide details');
        await user.click(hideButton);
        details = EventComponent.container.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });
});