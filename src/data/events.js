// src/data/events.js

// Single source of truth for Events metadata
export const events = [
  {
    slug: 'amsc-intro-part-one',
    title: 'Introduction to the American Science Cloud (AmSC): Part One',
    date: 'November 13, 2025',
    dateISO: '2025-11-13',
    location: 'Virtual',
    audience: 'DOE labs, facilities, and partners',
    heroTagline: 'November 13, 2025 · Virtual',
    summary:
      'The AmSC introductory webinar brings together researchers, facility staff, and partners to explore Al- and data-driven workflows across DOE.',
  },

  {
    slug: 'amsc-intro-part-two',
    title: 'Introduction to the American Science Cloud (AmSC): Part Two',
    // No concrete date yet
    dateLabel: 'TBD',
    dateISO: null, // treat as upcoming
    location: 'TBD',
    audience: 'DOE labs, facilities, and partners',
    heroTagline: 'Details coming soon',
    summary:
      'A follow-up event that will dive deeper into AmSC capabilities and roadmap.',
  },

  // Add more events here over time…
];

// Quick lookup map if you ever want it
export const eventsBySlug = Object.fromEntries(
  events.map((event) => [event.slug, event]),
);

// Helper to split into upcoming vs past
export function splitEventsByDate(eventsList) {
  const now = new Date();
  const upcomingEvents = [];
  const pastEvents = [];

  for (const ev of eventsList) {
    // If there's no ISO date, treat explicit TBD as upcoming
    if (!ev.dateISO) {
      if (ev.dateLabel === 'TBD' || !ev.date) {
        upcomingEvents.push(ev);
      } else {
        pastEvents.push(ev);
      }
      continue;
    }

    const eventDate = new Date(ev.dateISO);
    if (eventDate >= now) {
      upcomingEvents.push(ev);
    } else {
      pastEvents.push(ev);
    }
  }

  return { upcomingEvents, pastEvents };
}
