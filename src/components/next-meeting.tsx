import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const meetingTypes = [
  "in 30 minutes",
  "Tomorrow",
  "in 6 hours",
  "No contact",
  "in 1 hour",
  "Next month",
] as const;

export type Meeting = (typeof meetingTypes)[number];

const meetingColours: {
  [key in Meeting]: string;
} = {
  "in 30 minutes": "#223322",
  Tomorrow: "#223545",
  "in 6 hours": "#223322",
  "No contact": "#492922",
  "in 1 hour": "#223322",
  "Next month": "#2f3134",
};

interface NextMeetingProps {
  nextMeeting: Meeting;
}

const NextMeeting = ({ nextMeeting }: NextMeetingProps) => {
  const colour = meetingColours[nextMeeting];
  return (
    <div
      style={{ backgroundColor: colour }}
      className={`rounded-sm w-fit  px-1 border border-1  text-white`}
    >
      {nextMeeting}
    </div>
  );
};

export default NextMeeting;
