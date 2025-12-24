import { formatRelativeTimeString } from '../src/index';

describe('formatRelativeTimeString', () => {
  describe('English locale (default)', () => {
    it('should format seconds as "just now"', () => {
      const result = formatRelativeTimeString(Date.now() - 30000);
      expect(result).toBe('just now');
    });

    it('should format 1 minute', () => {
      const result = formatRelativeTimeString(Date.now() - 60000);
      expect(result).toBe('1 minute ago');
    });

    it('should format multiple minutes', () => {
      const result = formatRelativeTimeString(Date.now() - 180000);
      expect(result).toBe('3 minutes ago');
    });

    it('should format 1 hour', () => {
      const result = formatRelativeTimeString(Date.now() - 3600000);
      expect(result).toBe('1 hour ago');
    });

    it('should format multiple hours', () => {
      const result = formatRelativeTimeString(Date.now() - 7200000);
      expect(result).toBe('2 hours ago');
    });

    it('should format 1 day', () => {
      const result = formatRelativeTimeString(Date.now() - 86400000);
      expect(result).toBe('1 day ago');
    });

    it('should format multiple days', () => {
      const result = formatRelativeTimeString(Date.now() - 172800000);
      expect(result).toBe('2 days ago');
    });
  });

  describe('Korean locale', () => {
    it('should format seconds as "방금 전"', () => {
      const result = formatRelativeTimeString(Date.now() - 30000, { locale: 'ko' });
      expect(result).toBe('방금 전');
    });

    it('should format minutes', () => {
      const result = formatRelativeTimeString(Date.now() - 60000, { locale: 'ko' });
      expect(result).toBe('1분 전');
    });

    it('should format hours', () => {
      const result = formatRelativeTimeString(Date.now() - 3600000, { locale: 'ko' });
      expect(result).toBe('1시간 전');
    });

    it('should format days', () => {
      const result = formatRelativeTimeString(Date.now() - 86400000, { locale: 'ko' });
      expect(result).toBe('1일 전');
    });
  });

  describe('Custom base time', () => {
    it('should calculate relative to custom base time', () => {
      const baseTime = 1734567950000;
      const timestamp = 1734567890000;
      const result = formatRelativeTimeString(timestamp, { baseTime });
      expect(result).toBe('1 minute ago');
    });

    it('should work with Korean locale and custom base time', () => {
      const baseTime = 1734567950000;
      const timestamp = 1734567890000;
      const result = formatRelativeTimeString(timestamp, { baseTime, locale: 'ko' });
      expect(result).toBe('1분 전');
    });
  });

  describe('Edge cases', () => {
    it('should handle boundary between seconds and minutes', () => {
      const result59s = formatRelativeTimeString(Date.now() - 59000);
      expect(result59s).toBe('just now');

      const result1m = formatRelativeTimeString(Date.now() - 60000);
      expect(result1m).toBe('1 minute ago');
    });

    it('should handle boundary between minutes and hours', () => {
      const result59m = formatRelativeTimeString(Date.now() - 3540000);
      expect(result59m).toBe('59 minutes ago');

      const result1h = formatRelativeTimeString(Date.now() - 3600000);
      expect(result1h).toBe('1 hour ago');
    });

    it('should handle boundary between hours and days', () => {
      const result23h = formatRelativeTimeString(Date.now() - 82800000);
      expect(result23h).toBe('23 hours ago');

      const result1d = formatRelativeTimeString(Date.now() - 86400000);
      expect(result1d).toBe('1 day ago');
    });
  });

  describe('Error handling', () => {
    it('should throw error for future timestamp', () => {
      expect(() => {
        formatRelativeTimeString(Date.now() + 10000);
      }).toThrow('Future timestamp is not supported');
    });

    it('should throw error for negative timestamp', () => {
      expect(() => {
        formatRelativeTimeString(-1000);
      }).toThrow('Invalid timestamp: must be a valid positive number');
    });

    it('should throw error for NaN timestamp', () => {
      expect(() => {
        formatRelativeTimeString(NaN);
      }).toThrow('Invalid timestamp: must be a valid positive number');
    });

    it('should throw error for Infinity timestamp', () => {
      expect(() => {
        formatRelativeTimeString(Infinity);
      }).toThrow('Invalid timestamp: must be a valid positive number');
    });
  });
});
