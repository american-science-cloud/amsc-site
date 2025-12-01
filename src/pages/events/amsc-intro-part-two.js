// src/pages/events/amsc-intro-part-two.js
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import AmScBreadcrumbs from '../../components/AmScBreadcrumbs';
import { useEventMediaBase } from '@site/src/config/eventMediaConfig';

export default function AmscIntroPartTwo() {
  const mediaUrl = useEventMediaBase();

  return (
    <Layout
      title="Introduction to the American Science Cloud (AmSC): Part Two"
      description="Introduction to the American Science Cloud (AmSC): Part Two · Date TBD · Virtual"
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.10.0/dist/css/uswds.min.css"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.10.0/dist/js/uswds.min.js"
          defer
        ></script>
      </Head>

      {/* Hero */}
      <section className="usa-section amsc-hero" style={{ minHeight: '20vh' }}>
        <div className="grid-container">
          <div className="amsc-hero__content">
            <h1>Introduction to the American Science Cloud (AmSC): Part Two</h1>
            <p>Details Coming Soon · Virtual</p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="usa-section" style={{ paddingTop: '1rem', paddingBottom: 0 }}>
        <div className="grid-container">
          <AmScBreadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Events', to: '/events' },
              { label: 'Introduction to the American Science Cloud (AmSC): Part Two' },
            ]}
          />
        </div>
      </section>

      {/* Main body */}
      <section className="usa-section amsc-section alt">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            {/* Left column */}
            <div className="tablet:grid-col-8">
              <h2 className="border-heading">Overview</h2>
              <p>
                Part Two of the AmSC Introduction Series will build on the foundational
                concepts from Part One and provide deeper insights into the evolving
                AmSC ecosystem. Agenda and content are currently in development.
              </p>

              <h2 className="border-heading">Topics in Development</h2>
              <ul>
                <li>Expanded architecture overview</li>
                <li>Early platform demonstrations</li>
                <li>Data, model, and workflow service previews</li>
                <li>Roadmap for pilot engagement</li>
              </ul>

              <h2 className="border-heading">Event Materials</h2>
              <p>Materials will be added as they become available.</p>

              {/* Example of how files will be linked once available */}
              <ul>
                {/* Uncomment once materials exist */}
                {/* 
                <li>
                  <a
                    href={`${mediaUrl}AmSC_Part_Two_Slides.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Slides (PDF)
                  </a>
                </li>
                */}
              </ul>
            </div>

            {/* Right column — event details */}
            <div className="tablet:grid-col-4">
              <div className="usa-card">
                <div className="usa-card__container">
                  <div className="usa-card__header">
                    <h3 className="usa-card__heading">Event Details</h3>
                  </div>
                  <div className="usa-card__body">
                    <p><strong>Date:</strong> TBD</p>
                    <p><strong>Location:</strong> Virtual</p>
                    <p><strong>Audience:</strong> DOE labs, facilities, and partners</p>
                  </div>
                  <div className="usa-card__footer">
                    {/* Future content (e.g., registration link) can go here */}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
