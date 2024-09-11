import { render } from "@testing-library/react";
import EventList from "../components/EventList";

describe('<EventList /> component', () => {
    test('Has an element with "list" role', () => {
        const EventListComponent = render(<EventList />);
        expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
    });

    test('Renders correct number of events', () => {
        const EventListComponent = render(<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />);
        expect(EventListComponent.getAllByRole("listitem")).toHaveLength(4);
    })
});