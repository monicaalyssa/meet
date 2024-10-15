import { render, within } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents setErrorAlert={() => { }}/>);
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

describe('<NumberOfEvents /> integration', () => {
    test('Renders a list of events matching the input of by the user', async () => {
        const setCurrentNOE = 32;
        const NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={() => { }}/>);
        const NumberOfEventsInput =  NumberOfEventsComponent.queryByRole('textbox')

        const user = userEvent.setup();
        await user.type(NumberOfEventsInput, "{backspace}{backspace}10");

        const allEvents = await getEvents();
        NumberOfEventsComponent.rerender(<NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={() => { }}/>)
        expect(NumberOfEventsInput).toHaveValue("10");
    });
});

