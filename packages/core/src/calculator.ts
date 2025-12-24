export interface TimeDifference {
  value: number;
  unit: 'second' | 'minute' | 'hour' | 'day';
}

export function calculateTimeDifference(timestamp: number, baseTime: number): TimeDifference {
  const diff = baseTime - timestamp;

  if (diff < 0) {
    throw new Error('Future timestamp is not supported');
  }

  const seconds = diff / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  if (days >= 1) {
    return { value: Math.floor(days), unit: 'day' };
  } else if (hours >= 1) {
    return { value: Math.floor(hours), unit: 'hour' };
  } else if (minutes >= 1) {
    return { value: Math.floor(minutes), unit: 'minute' };
  } else {
    return { value: Math.floor(seconds), unit: 'second' };
  }
}
