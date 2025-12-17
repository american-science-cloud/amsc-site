// src/pages/events/index.js
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { events } from '@site/src/data/events';

export default function EventsPage() {
  // ---- Split events into upcoming + past ----
  // Convention: upcoming events have dateISO = null (or omitted)
  const upcomingEvents = events.filter((e) => !e.dateISO);
  const pastEvents = events
    .filter((e) => e.dateISO)
    .sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO));

  // Default event image (lives at static/img/default_event.svg)
  const defaultEventImg = useBaseUrl('/img/default_event.svg');

  return (
    <Layout title="Events" description="AmSC Events and Workshops">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.10.0/dist/css/uswds.min.css"
        />
      </Head>

      {/* Hero Section */}
      <section className="usa-section amsc-hero" style={{ minHeight: '25vh' }}>
        <div className="grid-container">
          <div className="amsc-hero__content">
            <h1>Events</h1>
            <p>Announcements, workshops, webinars, and past event archives</p>
          </div>
        </div>
      </section>

      {/* ---- UPCOMING EVENT SECTION ---- */}
      <section className="usa-section amsc-section">
        <div className="grid-container">
          <h2 className="centered-heading">Upcoming Event</h2>

          {upcomingEvents.length === 0 && (
            <p style={{ textAlign: 'center' }}>No upcoming events at this time.</p>
          )}

          {upcomingEvents.map((event) => (
            <div
              key={event.slug}
              className="usa-card amsc-event-card"
              style={{ marginTop: '2rem' }}
            >
              <div className="usa-card__container">
                <div className="grid-row grid-gap">
                  {/* Event Image (4 columns) */}
                  <div className="tablet:grid-col-4 amsc-event-image">
                    <img
                      src={defaultEventImg}
                      alt="Event"
                      style={{ width: '100%', borderRadius: '6px' }}
                    />
                  </div>

                  {/* Event Info (8 columns) */}
                  <div className="tablet:grid-col-8 amsc-event-details">
                    <h3>{event.title}</h3>

                    <p style={{ fontSize: '1rem' }}>
                      {event.summary || 'Details coming soon.'}
                    </p>

                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        marginTop: '1rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <li>
                        <strong>Date:</strong> {event.dateLabel || 'January 20, 2026'}
                      </li>
                      <li>
                        <strong>Location:</strong> {event.location || 'Virtual'}
                      </li>
                    </ul>

                    <Link className="usa-button" to={`/events/${event.slug}`}>
                      View Event Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- PAST EVENTS (Grey Background) ---- */}
      <section
        className="usa-section usa-section--light"
        style={{ marginTop: '3rem' }}
      >
        <div className="grid-container">
          <h2 className="centered-heading">Past Events</h2>

          <div className="grid-row grid-gap">
            {pastEvents.map((event) => (
              <div key={event.slug} className="tablet:grid-col-4">
                <div className="usa-card">
                  <div className="usa-card__container">
                    <div className="usa-card__header">
                      <h3 className="usa-card__heading">{event.title}</h3>
                    </div>

                    <div className="usa-card__body">
                      <p>{event.summary}</p>
                      <p>
                        <strong>Date:</strong> {event.date}
                      </p>
                      <p>
                        <strong>Location:</strong> {event.location}
                      </p>
                    </div>

                    <div className="usa-card__footer">
                      <Link
                        className="usa-button usa-button--outline"
                        to={`/events/${event.slug}`}
                      >
                        View Event
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {pastEvents.length === 0 && <p>No past events yet.</p>}
          </div>
        </div>
      </section>
    </Layout>
  );
}
