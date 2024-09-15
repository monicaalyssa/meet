import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
    });

    test('Has an element with the "textbox" role', () => {
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberTextBox).toBeInTheDocument();
    });
    
    test('Default value of number of events is 32', () => {
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberTextBox).toHaveValue('32');
    });

    test('Number of events changes according to user input', async () => {
        const user = userEvent.setup();
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        await user.type(numberTextBox, "1");
        expect(numberTextBox).toHaveValue("321");
    });
});

