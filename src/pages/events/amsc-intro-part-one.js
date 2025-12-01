// src/pages/events/amsc-intro-part-one.js
import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import AmScBreadcrumbs from "../../components/AmScBreadcrumbs";
import { useEventMediaBase } from "@site/src/config/eventMediaConfig";

export default function AmscIntroPartOne() {
  const mediaUrl = useEventMediaBase();

  return (
    <Layout
      title="Introduction to the American Science Cloud (AmSC): Part One"
      description="Introduction to the American Science Cloud (AmSC): Part One · Nov 13, 2025 · Virtual"
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

      {/* Hero – full width, consistent with Projects/Events */}
      <section className="usa-section amsc-hero" style={{ minHeight: "20vh" }}>
        <div className="grid-container">
          <div className="amsc-hero__content">
            <h1>Introduction to the American Science Cloud (AmSC): Part One</h1>
            <p>November 13, 2025 · Virtual</p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section
        className="usa-section"
        style={{ paddingTop: "1rem", paddingBottom: 0 }}
      >
        <div className="grid-container">
          <AmScBreadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Events", to: "/events" },
              {
                label:
                  "Introduction to the American Science Cloud (AmSC): Part One",
              },
            ]}
          />
        </div>
      </section>

      {/* Main content */}
      <section className="usa-section amsc-section alt">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            {/* Left column: main body */}
            <div className="tablet:grid-col-8">
              <h2 className="border-heading">Overview</h2>
              <p>
                The AmSC introductory webinar brings together researchers, facility staff, and partners to explore Al- and data-driven workflows across DOE.
              </p>

              <h2 className="border-heading">Agenda Highlights</h2>
              <ul>
                <li>Overview of the American Science Cloud vision</li>
              </ul>

              <h2 className="border-heading">Event Materials</h2>
              <ul>
                <li>
                  <a
                    href={`${mediaUrl}AmSC_November_Webinar_Slides.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Slides (PDF)
                  </a>
                </li>
                <li>
                  <a
                    href={`${mediaUrl}Webinar_Q&A.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Webinar Q&A (PDF)
                  </a>
                </li>
                <li>
                  <a
                    href="https://vimeo.com/1137699305"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Recording (Vimeo)
                  </a>
                </li>
                {/* Example for future materials:
                <li>
                  <a
                    href={`${mediaUrl}AmSC_November_Webinar_Whitepaper.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Whitepaper (PDF)
                  </a>
                </li>
                */}
              </ul>
            </div>

            {/* Right column: event details card */}
            <div className="tablet:grid-col-4">
              <div className="usa-card">
                <div className="usa-card__container">
                  <div className="usa-card__header">
                    <h3 className="usa-card__heading">Event Details</h3>
                  </div>
                  <div className="usa-card__body">
                    <p>
                      <strong>Date:</strong> November 13, 2025
                    </p>
                    <p>
                      <strong>Location:</strong> Virtual
                    </p>
                    <p>
                      <strong>Audience:</strong> DOE labs, facilities, and
                      partners
                    </p>
                  </div>
                  <div className="usa-card__footer">
                    {/* You can add registration link, contact, etc. here later */}
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
