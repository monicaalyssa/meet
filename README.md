# Meet <a name="top"></a>
Meet is a serverless, Progressive Web App built in React that allows users to search for upcoming events in different cities.

## Features ✨

- **Browse events:** View various events from different locations along with their details.
- **Filter Events by City:** Search for events in a specific city.
- **Offline Access:** Access previously viewed events and data, even when offline.
- **Add to Home Screen:** Users can add the app to their home screen.
- **Data Visualization:** Interactive scatterplot and pie chart to display the number of events based on location, and the popularity of event genres.
- **Google Authentication:** Users can sign in securely using their Google account.


## User Stories & Test Scenarios 🔍
This app follows a Test-Driven Development (TDD) approach, meaning the tests were written before the actual implementation of features.



<details>
<summary> <strong>Feature 1: Filter Events by City</strong> </summary>
<br>

As a `user`, I should be able to `filter events by city` so that `I can see a list of events taking place in that city`.


```
Scenario 1: When user hasn’t searched for a specific city, show upcoming events from all cities.

- Given user hasn’t searched for any city
- When the user opens the app
- Then the user should see a list of upcoming events
```
```
Scenario 2: User should see a list of suggestions when they search for a city.

- Given the main page is open
- When user starts typing in the city textbox
- Then the user should receive a list of cities (suggestions) that match what they’ve typed
```
```
Scenario 3: User can select a city from the suggested list.

- Given user was typing “Miami” in the city textbox AND the list of suggested cities is showing
- When the user selects a city (e.g., “Miami, Florida) from the list
- Then their city should be changed to that city (i.e., “Miami, Florida") AND the user should receive a list of upcoming events in that city
```

</details>


<details>
<summary> <strong>Feature 2: Show/Hide Event Details </strong> </summary>
<br>


As a `user`, I should be able to `collapse or show event details` so that `I can get more information about a specific event`.

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

</details>


<details>
<summary> <strong>Feature 3: Specify Number of Events</strong> </summary>
<br>


As a `user`, I should be able to `change the number of events displayed` so that `I can get a list of a specific number of events`.

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

</details>

<details>
<summary> <strong>Feature 4: Use the App When Offline </strong> </summary>
<br>


As a `user`, I should be able to `use the app offline` so that `I can get still get a list of upcoming events when I am not connected to the internet`.

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

</details>

<details>
<summary> <strong>Feature 5: Add an App Shortcut to the Home Screen</strong> </summary>
<br>



As a `user`, I should be able to `add the app to my home screen` so that `I can easily access the app as a shortcut from my home screen`.

```
Scenario 1: User can install the meet app as a shortcut on their device home screen. 

Given the user is on the meet app in their web browser
When the user adds the app as a shortcut on their device
Then the user should have a shortcut icon on their home screen to access the meet app
```

</details>

<details>
<summary> <strong>Feature 6: Display Charts Visualizing Event Details</strong> </summary>
<br>


As a `user`, I should be able to `display charts with event details` so that `I can easily visualize and understand event data`.

```
Scenario 1: Show a chart with the number of upcoming events in each city.

Given the user is on the upcoming events page
When the user clicks on display chart details
Then the user should see a pie chart visualizing the popularity of event genres and a scatterplot showing how many events will take place in each location
```

</details>

## Technologies & Dependencies 🛠️
### Frontend
<a href="https://reactnative.dev/">React</a>: A JavaScript library to create user interface components. This application integrates object-oriented programming principles for handling warning messages, as well as loop and state management for the events list.

<a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps">Progressive Web App</a> (PWA): Service workers for offline funcionality, and a manifest JSON for home screen installation.

### UI Components
<a href="https://recharts.org/en-US/">Recharts</a>: React library for creating interactive charts.

### Backend
<a href="https://aws.amazon.com/pm/lambda/?gclid=Cj0KCQiA_9u5BhCUARIsABbMSPuqN4VQDI0LuzqhRIJwH0xkshl_XEL9TAR4XisgeEclmbxD9nsy4rgaApBwEALw_wcB&trk=73f686c8-9606-40ad-852f-7b2bcafa68fe&sc_channel=ps&ef_id=Cj0KCQiA_9u5BhCUARIsABbMSPuqN4VQDI0LuzqhRIJwH0xkshl_XEL9TAR4XisgeEclmbxD9nsy4rgaApBwEALw_wcB:G:s&s_kwcid=AL!4422!3!651212652666!e!!g!!lambda!909122559!45462427876">AWS Lambda</a>: Serverless functions for handling authentication and API interactions.

<a href="https://datatracker.ietf.org/doc/html/rfc6749">OAuth2</a>: Handles user authentication securely, allowing users to sign in via Google without the need to create a separate account.

### API
<a href="https://developers.google.com/calendar/api/guides/overview">Google Calendar API</a>: Fetches event data to display in the app to users.


### Testing
<a href="https://jestjs.io/">Jest</a>: Testing framework for unit and integration testing ensuring all components work as expected.

<a href="https://cucumber.io/">Cucumber</a>: Testing framework for writing acceptance testing in Gherkin syntax.

<a href="https://pptr.dev/">Puppeteer</a>: End-to-end testing library for automating the browser.

## Demo 🎥

https://github.com/user-attachments/assets/a57406f6-1ac2-422a-8db2-c9095b296309

##
[Back to top](#top)
