import { render } from "@testing-library/react";
import CitySearch from "../components/CitySearch";
import userEvent from "@testing-library/user-event";

describe('<CitySearch /> component', () => {
    let CitySearchComponent;
    beforeEach(() => {
        CitySearchComponent = render(<CitySearch />);
    })

    test('Renders text input', () => {
        const cityTextBox = CitySearchComponent.queryByRole('textbox');
        expect(cityTextBox).toBeInTheDocument();
        expect(cityTextBox).toHaveClass('city')
    });

    test('Suggestions list is hidden by default', () => {
        const suggestionList = CitySearchComponent.queryByRole('list');
        expect(suggestionList).not.toBeInTheDocument();
    })

    test('Renders a list of suggestions when city text box gains focus', async () => {
        const user = userEvent.setup();
        const cityTextBox = CitySearchComponent.queryByRole('textbox');
        await user.click(cityTextBox);
        const suggestionList = CitySearchComponent.queryByRole('list');
        expect(suggestionList).toBeInTheDocument();
        expect(suggestionList).toHaveClass('suggestions');
    })
});