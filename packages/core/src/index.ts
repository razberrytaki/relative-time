import { calculateTimeDifference } from './calculator';
import { formatRelativeTime, type Locale } from './formatter';

export interface RelativeTimeOptions {
  locale?: Locale;
  baseTime?: number;
}

export function formatRelativeTimeString(timestamp: number, options?: RelativeTimeOptions): string {
  if (!Number.isFinite(timestamp) || timestamp < 0) {
    throw new Error('Invalid timestamp: must be a valid positive number');
  }

  const baseTime = options?.baseTime ?? Date.now();
  const locale = options?.locale ?? 'en';

  const timeDiff = calculateTimeDifference(timestamp, baseTime);

  return formatRelativeTime(timeDiff, locale);
}

export type { Locale };
