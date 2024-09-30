Feature: Collapse or show event details

    Scenario: An event element is collapsed by default.
      Given the user is on the upcoming events page 
      When the user views a list of different upcoming events
      Then the events should be collapsed by default 
      And the user should be given the option to show a specific events details

    Scenario: User can expand an event to see details.
      Given the user is on the upcoming events page
      When the user clicks on expand details
      Then the user should be given more information on the event
      And should be given the option to hide details
    
    Scenario: User can collapse an event to hide details.
      Given the user expands a specific events details
      When the user clicks on the collapse option
      Then the event element should hide additional details
      And should be given the option to show details again