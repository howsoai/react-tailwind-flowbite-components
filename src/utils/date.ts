export const getRelativeTime = (time?: Date | string | null) => {
  if (!time) {
    return "";
  }

  if (typeof time === "string") {
    time = new Date(time);
  }

  const difference = Date.now() - time.getTime();
  if (difference >= 24 * 60 * 60 * 1000) {
    return time.toLocaleString();
  } else if (difference >= 1000 * 60 * 60) {
    return `${Math.floor(difference / (1000 * 60 * 60))} hours ago`;
  } else if (difference >= 1000 * 60) {
    return `${Math.floor(difference / (1000 * 60))} minutes ago`;
  } else {
    return "Just now";
  }
};
