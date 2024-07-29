export type Languages = "en";

export type UXConstants = {
  durations: UXDurations;
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
  durations: {
    input: { activityDecay: 500 },
    scroll: { activityDecay: 250 },
    inlineNotification: 1500,
  },
};
