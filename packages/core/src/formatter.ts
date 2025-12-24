import type { TimeDifference } from './calculator';

export type Locale = 'ko' | 'en';

function formatEnglish(timeDiff: TimeDifference): string {
  const { value, unit } = timeDiff;

  if (unit === 'second') {
    return 'just now';
  }

  const plural = value === 1 ? '' : 's';
  return `${value} ${unit}${plural} ago`;
}

function formatKorean(timeDiff: TimeDifference): string {
  const { value, unit } = timeDiff;

  if (unit === 'second') {
    return '방금 전';
  }

  const unitMap: Record<'minute' | 'hour' | 'day', string> = {
    minute: '분',
    hour: '시간',
    day: '일'
  };

  return `${value}${unitMap[unit]} 전`;
}

export function formatRelativeTime(timeDiff: TimeDifference, locale: Locale = 'en'): string {
  if (locale === 'ko') {
    return formatKorean(timeDiff);
  }
  return formatEnglish(timeDiff);
}
