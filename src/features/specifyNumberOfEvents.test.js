import { loadFeature, defineFeature } from "jest-cucumber";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import { render } from "@testing-library/react";
import App from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');
defineFeature(feature,  test => {
    test('When a user hasn\'t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        let NumberOfEventsComponent, user, numberTextBox; 

        beforeEach(() => {
            user = userEvent.setup();
            NumberOfEventsComponent = render(<NumberOfEvents />);
            numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        });
        given('the user is on the upcoming events page', () => {});

        when('the user hasn\'t specified a number of events to display', () => {
            expect(numberTextBox).toHaveValue('32');
        });

        then(/^the list of events should be (\d+) events shown by default$/, (arg0) => {
            expect(numberTextBox).toHaveValue('32');
        });
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
        let NumberOfEventsComponent, user, numberDOM, numberTextBox; 

        beforeEach(() => {
            user = userEvent.setup();
            NumberOfEventsComponent = render(<NumberOfEvents />);
            numberDOM = NumberOfEventsComponent.container.querySelector('#number-of-events');
            numberTextBox = numberDOM.querySelector('input[type="text"]');
        });
        given('the user is on the upcoming events page', () => {});

        when('the user selects a different number of events to display', async () => {
            await user.type(numberTextBox, "1");
            expect(numberTextBox).toHaveValue("321");
        });

        then('the list of events should change to display the number of event', async () => {
            const AppComponent = render(<App />);
            const displayedEvents = AppComponent.container.querySelector('li')
            expect(numberTextBox).toHaveValue("321");
        });
    });
});
