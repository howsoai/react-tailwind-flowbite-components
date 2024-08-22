export type Languages = "en";

export type UXConstants = {
  classes: UXClasses;
  durations: UXDurations;
};

type UXClasses = {
  marginBottom: string;
};

type UXDurations = {
  input: {
    /* Milliseconds time after which a user's input stream should be considered paused */
    activityDecay: number;
  };
  scroll: {
    /* Milliseconds time after which a user's input stream should be considered paused */
    activityDecay: number;
  };
  /* Duration to display inline copy modifications after user interactions */
  inlineNotification: number;
};

export const UX: UXConstants = {
  classes: {
    marginBottom: "mb-5",
  },
  durations: {
    input: { activityDecay: 500 },
    scroll: { activityDecay: 250 },
    inlineNotification: 1500,
  },
};
