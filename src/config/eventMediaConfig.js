// src/config/eventMediaConfig.js

import useBaseUrl from '@docusaurus/useBaseUrl';

// Base path for ALL event files inside "static/events/"
export const EVENT_MEDIA_BASE = '/events/';

// Returns the fully resolved media base URL (e.g., /amsc-site/events/)
export function useEventMediaBase() {
  return useBaseUrl(EVENT_MEDIA_BASE);
}
