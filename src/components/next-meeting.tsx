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
  [key in Meeting]: { bg: string; text: string };
} = {
  "in 30 minutes": { bg: "#e1fae7", text: "#517865" },
  Tomorrow: { bg: "#dbf9ff", text: "#365d65" },
  "in 6 hours": { bg: "#d1f4e0", text: "#254736" },
  "No contact": { bg: "#faf0f0", text: "#5d3d3e" },
  "in 1 hour": { bg: "#d1f4e0", text: "#254736" },
  "Next month": { bg: "#f6f7fb", text: "#84858a" },
};

interface NextMeetingProps {
  nextMeeting: Meeting;
}

const NextMeeting = ({ nextMeeting }: NextMeetingProps) => {
  const colour = meetingColours[nextMeeting];
  return (
    <div
      style={{ backgroundColor: colour.bg, color: colour.text }}
      className={`rounded-sm w-fit  px-1 border border-1  text-white`}
    >
      {nextMeeting}
    </div>
  );
};

export default NextMeeting;
