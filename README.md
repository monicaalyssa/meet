# User Stories & Test Scenarios
### Feature 1: Filter Events by City

As a `user`, I should be able to `filter events by city` so that `I can see a list of events taking place in that city.`

```
Scenario 1: When user hasn’t searched for a specific city, show upcoming events from all cities.

- Given user hasn’t searched for any city
- When the user opens the app
- Then the user should see a list of upcoming events.
```
```
Scenario 2: User should see a list of suggestions when they search for a city.

- Given the main page is open
- When user starts typing in the city textbox
- Then the user should receive a list of cities (suggestions) that match what they’ve typed.
```
```
Scenario 3: User can select a city from the suggested list.

- Given user was typing “Miami” in the city textbox AND the list of suggested cities is showing
- When the user selects a city (e.g., “Miami, Florida) from the list
- Then their city should be changed to that city (i.e., “Miami, Florida") AND the user should receive a list of upcoming events in that city.
```
### Feature 2: Show/Hide Event Details 

As a `user`, I should be able to `collapse or show event details` so that `I can get more information about a specific event.`

```
Scenario 1: An event element is collapsed by default. 

Given the user is on the upcoming events page
When the user views a list of different upcoming events
Then the events should be collapsed by default AND the user should be given the option to show a specific events details
```
```
Scenario 2: User can expand an event to see details. 

Given the user is on the upcoming events page
When the user clicks on expand details
Then the user should given more information on the event AND should be given the option to hide details
```
```
Scenario 3: User can collapse an event to hide details.

Given the user expands a specific events details
When the user clicks on the collapse option
Then the event element should hide additional details AND should be given the option to show details again
```
### Feature 3: Specify Number of Events 

As a `user`, I should be able to `change the number of events displayed` so that `I can get a list of a specific number of events.`

```
Scenario 1: When user hasn’t specified a number, 32 events are shown by default. 

Given the user is on the upcoming events page
When the user hasn’t specific a number of events to display
Then the list of events should be 32 events shown by default
```
```
Scenario 2: User can change the number of events displayed. 

Given the user is on the upcoming events page
When the user selects a different number of events to display
Then the list of events should change to display the number of events the user has selected
```
### Feature 4: Use the App When Offline 

As a `user`, I should be able to `use the app offline` so that `I can get still get a list of upcoming events when I am not connected to the internet.`

```
Scenario 1: Show cached data when there’s no internet connection. 

Given the user is viewing the upcoming events page
When the user has no internet connection
Then the list of events should still be shown using the most recent cached data AND the user should seen a message indicating data is still being shown offline
```
```
Scenario 2: Show error when user changes search settings (city, number of events). 

Given the user tries to edit the search filter
When the user has no internet connection
Then the user should receive an error stating that they are offline AND this action can not be performed with no internet connection
```
### Feature 5: Add an App Shortcut to the Home Screen 

As a `user`, I should be able to `add the app to my home screen` so that `I can easily access the app as a shortcut from my home screen.`

```
Scenario 1: User can install the meet app as a shortcut on their device home screen. 

Given the user is on the meet app in their web browser
When the user adds the app as a shortcut on their device
Then the user should have a shortcut icon on their home screen to access the meet app
```
### Feature 6: Display Charts Visualizing Event Details 

As a `user`, I should be able to `display charts with event details` so that `I can easily visualize and understand event data.`

```
Scenario 1: Show a chart with the number of upcoming events in each city.

Given the user is on the upcoming events page
When the user clicks on display chart details
Then the user should see a pie chart visualizing the popularity of event genres and a scatterplot showing how many events will take place in each location
```
