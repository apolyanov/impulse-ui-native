export interface UseTimerOptions {
  /** Milliseconds before execution. Non-positive or non-finite values disable the timer. */
  duration: number;
  callback: () => void;

  /** Disabling cancels the countdown; enabling starts a fresh duration. */
  enabled?: boolean;

  /** Pause while the native app is inactive and resume with the remaining duration. */
  pauseOnBackground?: boolean;
}
