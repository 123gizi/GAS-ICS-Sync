// This script will color code Events in Google Calendar. For setup, follow the instructions posted here:
// https://www.linkedin.com/pulse/automate-color-coding-your-google-calendar-marguerite-thibodeaux-acc/?trk=articles_directory

function colorEventsBackDate() {
  const today = new Date();
  const endDate = new Date();
  // Set the end date for calendar events - set below at 31 days from current date
  today.setDate(today.getDate() - 300);
  endDate.setDate(endDate.getDate() + 5);
  Logger.log(today + " " + endDate);
 
  var calendars = CalendarApp.getAllOwnedCalendars();
  Logger.log("found number of calendars: " + calendars.length);
 
  for (var i=0; i<calendars.length; i++) {
    const calendar = calendars[i];
    const events = calendar.getEvents(today, endDate);

    // Terms to look for in calendar events by type of event
    // Add as many different event types by creating a new line below (or delete extras)
    const dayOff = ["RDO", "CAO", "LDO", "ALV", "CLV", "SICK"];
    const standbyDuty = ["STANDBY"];
    const workDuty = ["ABF - ABF", "INSTRUCT", "ADMIN", "Administration", "COURSE"];
    const workMission = ["Mission ID"];
    const workExam = ["EXAM", "Recency"];

    // Process each calendar event
    for (let j=0; j<events.length; j++) {
      let e = events[j];
      let title = e.getTitle();
      let currentColor = e.getColor();
      let description = e.getDescription();

      // Evaluate for each keyword for each type of meeting
      // Must have one below for each event type above. Note that the constant name following the = sign must match 
      // the constant name assigned above in lines 20-25
      const personal = dayOff.some(event => title.includes(event));
      const standby = standbyDuty.some(event => title.includes(event));
      const duty = workDuty.some(event => title.includes(event));
      const mission = workMission.some(event => description.includes(event));
      const exam = workExam.some(event => title.includes(event));

      // Set the colors based on event type
      // Only change the calendar event if the color needs to change
      // Customize colors by changing the color in ALL CAPS
      // Colors available listed here: https://developers.google.com/apps-script/reference/calendar/event-color

      if (personal) {
        if (currentColor != 8) {
          e.setColor(CalendarApp.EventColor.GRAY);
        }
      }

      if (standby) {
        if (currentColor != 5) {
          e.setColor(CalendarApp.EventColor.YELLOW);
        }
      }

      if (duty) {
        if (currentColor != 10) {
          e.setColor(CalendarApp.EventColor.GREEN);
        }
      }

      if (mission) {
        if (currentColor != 10) {
          e.setColor(CalendarApp.EventColor.GREEN);
        }
      }

      if (exam) {
        if (currentColor != 11) {
          e.setColor(CalendarApp.EventColor.RED);
        }
      }

    }
  }

}
