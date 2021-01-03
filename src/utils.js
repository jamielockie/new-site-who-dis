import { formatDistanceToNow } from "date-fns";

export const generateCountdownString = (date) => {
  return formatDistanceToNow(date);
};
