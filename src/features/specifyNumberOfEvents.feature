Feature: Specify number of events
    
    Scenario: When a user hasn't specified a number, 32 events are shown by default.
      Given the user is on the upcoming events page
      When the user hasn't specified a number of events to display
      Then the list of events should be 32 events shown by default

    Scenario: User can change the number of events displayed.
      Given the user is on the upcoming events page
      When the user selects a different number of events to display
      Then the list of events should change to display the number of event
