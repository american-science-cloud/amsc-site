// src/pages/projects.js
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function Projects() {
  return (
    <Layout
      title="Projects"
      description="American Science Cloud Projects"
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

      {/* Hero Section */}
      <section className="usa-section amsc-hero" style={{ minHeight: '20vh' }}>
        <div className="grid-container">
          <div className="amsc-hero__content">
            <h1>Our Projects</h1>
            <p>Advancing science through collaboration and innovation.</p>
          </div>
        </div>
      </section>

      {/* Placeholder Section */}
      <section className="usa-section amsc-section alt">
        <div className="grid-container">
          <div className="grid-row">
            <div className="grid-col-12">
              <h2 className="centered-heading">Coming Soon</h2>
              <p style={{ textAlign: 'center', fontSize: '1.25rem' }}>
                Stay tuned — exciting projects are on the horizon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
