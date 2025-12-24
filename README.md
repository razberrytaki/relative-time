# Relative Time Library

A lightweight TypeScript library for formatting relative time strings like "N minutes ago" or "N분 전".

## Core Features (Implemented)

- ✅ **Time Units**: Support for seconds, minutes, hours, and days
- ✅ **Localization**: Korean and English locales supported (default: 'en')
- ✅ **Flexible Base Time**: Specify custom reference time (default: current time)
- ✅ **Predefined Formats**: Built-in templates for consistent formatting
- ✅ **TypeScript Strict Mode**: Full type safety with strict mode enabled

## Installation

```bash
npm install @relative-time/core
```

## Usage

### Basic Usage (English)

```typescript
import { formatRelativeTimeString } from '@relative-time/core';

const now = Date.now();
formatRelativeTimeString(now - 30000);    // "just now"
formatRelativeTimeString(now - 60000);    // "1 minute ago"
formatRelativeTimeString(now - 180000);   // "3 minutes ago"
formatRelativeTimeString(now - 3600000);  // "1 hour ago"
formatRelativeTimeString(now - 86400000);  // "1 day ago"
```

### Korean Locale

```typescript
import { formatRelativeTimeString } from '@relative-time/core';

const now = Date.now();
formatRelativeTimeString(now - 30000, { locale: 'ko' });    // "방금 전"
formatRelativeTimeString(now - 60000, { locale: 'ko' });    // "1분 전"
formatRelativeTimeString(now - 180000, { locale: 'ko' });   // "3분 전"
formatRelativeTimeString(now - 3600000, { locale: 'ko' });  // "1시간 전"
formatRelativeTimeString(now - 86400000, { locale: 'ko' });  // "1일 전"
```

### Custom Base Time

```typescript
import { formatRelativeTimeString } from '@relative-time/core';

const baseTime = 1734567950000;
const timestamp = 1734567890000;

formatRelativeTimeString(timestamp, { baseTime }); // "1 minute ago"
```

## API

### `formatRelativeTimeString(timestamp, options?)`

Formats a timestamp as a relative time string.

**Parameters:**
- `timestamp` (number): The timestamp to format (in milliseconds)
- `options` (object, optional):
  - `locale` ('ko' | 'en', default: 'en'): The locale for formatting
  - `baseTime` (number, default: Date.now()): The reference time for comparison

**Returns:** string - The formatted relative time string

**Throws:**
- Error if timestamp is in the future
- Error if timestamp is not a valid positive number

## Time Units

| Range | Unit | Korean | English |
|-------|------|--------|---------|
| 0-59s | seconds | 방금 전 | just now |
| 1-59m | minutes | N분 전 | N minutes ago |
| 1-23h | hours | N시간 전 | N hours ago |
| 1d+ | days | N일 전 | N days ago |

## Error Handling

```typescript
// Future timestamp (throws error)
formatRelativeTimeString(Date.now() + 10000);
// Error: Future timestamp is not supported

// Negative timestamp (throws error)
formatRelativeTimeString(-1000);
// Error: Invalid timestamp: must be a valid positive number

// Invalid timestamp (throws error)
formatRelativeTimeString(NaN);
// Error: Invalid timestamp: must be a valid positive number
```

## Development

### Setup

```bash
npm install
```

### Run Tests

```bash
npm test
```

### Type Checking

```bash
npm run typecheck
```

### Build

```bash
npm run build
```

## Future Features (Not Implemented)

The following features are planned for future releases but are not currently implemented:

1. **Extended Time Units**: Support for weeks, months, and years
2. **Additional Locales**: Japanese, Chinese, and other languages
3. **Custom Formatting**: User-provided callback functions for custom formats
4. **Auto-refresh**: Real-time updates (e.g., "1 minute ago" → "2 minutes ago")
5. **Server-Side Rendering Support**: Integration with Next.js and other frameworks
6. **Other Language Bindings**: Support for languages beyond JavaScript/TypeScript

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
