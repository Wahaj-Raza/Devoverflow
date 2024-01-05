import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();

  // Convert the time difference to seconds
  const seconds = Math.floor(timeDifference / 1000);

  // Define the time units
  const minute = 60;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  // Calculate the time ago
  if (seconds < minute) {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  } else if (seconds < hour) {
    const minutes = Math.floor(seconds / minute);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (seconds < day) {
    const hours = Math.floor(seconds / hour);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (seconds < month) {
    const days = Math.floor(seconds / day);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (seconds < year) {
    const months = Math.floor(seconds / month);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    const years = Math.floor(seconds / year);
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
};
export const formatLargeNumber = (number: number): string => {
  if (number >= 1000000) {
    const millions = (number / 1000000).toFixed(1);
    return `${millions}M`;
  } else if (number >= 1000) {
    const thousands = (number / 1000).toFixed(1);
    return `${thousands}K`;
  } else {
    return number.toString();
  }
};

export const getJoinedDate = (date: Date): string => {
  // Extract the month and year from the Date object
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Create the joined date string (e.g., "September 2023")
  const joinedDate = `${month} ${year}`;

  return joinedDate;
};
