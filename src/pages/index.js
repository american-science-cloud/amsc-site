import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import '../css/styles.css'; 

export default function Home() {
  return (
    <Layout
      title="American Science Cloud (AmSC)"
      description="Accelerating innovation with AI and advanced computing"
    >
      <Head>
        {/* USWDS CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.10.0/dist/css/uswds.min.css"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.10.0/dist/js/uswds.min.js"
          defer
        ></script>
        <link rel="icon" type="image/x-icon" href="img/favicon.png" />
      </Head>

      {/* Hero */}
      <section className="amsc-hero">
        <div className="grid-container">
          <div className="amsc-hero__content">
            <img
              src="img/amsc_logo_new.svg"
              alt="AmSC Logo"
              className="amsc-logo"
            />
            <h1>Empowering DOE’s National Labs</h1>
            <p>Accelerating innovation with AI and advanced computing.</p>
            <a className="usa-button usa-button--secondary" href="#about">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section id="about" className="usa-section  amsc-section alt">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <div className="tablet:grid-col-6">
              <img src="img/section1.svg" alt="AmSC Overview" />
            </div>
            <div className="tablet:grid-col-6">
              <h2 className='border-heading'>What is AmSC: A Platform for Transformative Science</h2>
              <p>
                AmSC is a secure, federated, and science-optimized cloud
                environment that integrates the DOE’s world-leading computing
                and experimental facilities, data resources, and high-performance
                networks.
              </p>
              <p>
                AmSC enables DOE scientists to create, access, and integrate
                world-class AI-ready datasets, run scalable model training on
                leadership-class systems, perform distributed simulations,
                control instruments, and move data efficiently across sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="usa-section usa-section--light amsc-section alt">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <div className="tablet:grid-col-6 section2-content">
              <h2 className='border-heading'>
                What Will AmSC Provide: Advanced AI Tools for Scientific Discovery
              </h2>
              <ul>
                <li>
                  <strong>Data Services:</strong> Ensure DOE’s vital data assets
                  are FAIR and AI-ready.
                </li>
                <li>
                  <strong>Model Services:</strong> Enable access to
                  state-of-the-art models for scientific discovery.
                </li>
                <li>
                  <strong>At-Scale Services:</strong> Harness leadership-class
                  systems for extreme-scale model training and inference.
                </li>
                <li>
                  <strong>Infrastructure Services:</strong> Provide secure,
                  uniform access to compute, storage, and networking across DOE
                  and cloud partners.
                </li>
              </ul>
            </div>
            <div className="tablet:grid-col-6 section2-image">
              <img src="img/section2.svg" alt="AI Tools" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="usa-section amsc-section alt">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <div className="tablet:grid-col-6">
              <img src="img/section3.svg" alt="Scientific Collaboration" />
            </div>
            <div className="tablet:grid-col-6">
              <h2 className='border-heading'>What Will AmSC Achieve: A New Era of Interconnected Research</h2>
              <p>
                AmSC’s objective is to establish a durable and extensible
                platform that empowers DOE’s scientific community to accelerate
                innovation with AI and advanced computing.
              </p>
              <p>
                By combining intuitive interfaces, scalable services, and DOE’s
                unparalleled scientific assets, AmSC embeds AI at the core of
                research to drive faster and more impactful discovery.
              </p>
              <p>
                Once deployed, the AmSC Platform will support DOE mission use
                cases, deliver core API-driven services, and demonstrate seamless
                interoperability across facilities and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Public-Private Partnerships Section */}
      <section className="usa-section usa-section--dark">
        <div className="grid-container">
          <h2 className="centered-heading">Public-Private Partnerships Framework</h2>
          <div className="grid-row grid-gap">
            <div className="tablet:grid-col-4">
              <div className="usa-card">
                <div className="usa-card__container">
                  <img
                    src="img/shield.svg"
                    alt="Technology Validation icon"
                    className="usa-card__icon"
                  />
                  <div className="usa-card__header">
                    <h3 className="usa-card__heading">Technology Validation</h3>
                  </div>
                  <div className="usa-card__body">
                    <p>
                      Cloud service providers and vendors will validate
                      technologies against extreme-scale scientific and national
                      security workloads, co-design solutions with a high-value
                      research community, and evolve pilot deployments into
                      sustainable offerings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tablet:grid-col-4">
              <div className="usa-card">
                <div className="usa-card__container">
                  <img
                    src="img/shake.svg"
                    alt="Long-term Partnerships icon"
                    className="usa-card__icon"
                  />
                  <div className="usa-card__header">
                    <h3 className="usa-card__heading">Long-term Partnerships</h3>
                  </div>
                  <div className="usa-card__body">
                    <p>
                      Participation strengthens long-term partnerships with DOE
                      and expands opportunities for innovation. Secure data
                      access in CSP environments creates new avenues for
                      industry and the public to leverage scientific data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tablet:grid-col-4">
              <div className="usa-card">
                <div className="usa-card__container">
                  <img
                    src="img/reserve.svg"
                    alt="Strategic Computing Reserve icon"
                    className="usa-card__icon"
                  />
                  <div className="usa-card__header">
                    <h3 className="usa-card__heading">Strategic Computing Reserve</h3>
                  </div>
                  <div className="usa-card__body">
                    <p>
                      This model charts a path toward a National Strategic
                      Computing and AI Reserve, supporting both steady-state
                      research and surge capacity in times of crisis, ensuring
                      resilience and U.S. competitiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
<section className="usa-section usa-section--light">
  <div className="grid-container">
    <div className="partner-logos grid-row grid-gap">
      {[
        { name: 'argonne', url: 'https://www.anl.gov/' },
        { name: 'berkley', url: 'https://www.lbl.gov/' },
        { name: 'brookhaven', url: 'https://www.bnl.gov/' },
        { name: 'fermilab', url: 'https://www.fnal.gov/' },
        { name: 'idaho', url: 'https://inl.gov/' },
        { name: 'jeffersonlab', url: 'https://www.jlab.org/' },
        { name: 'netl', url: 'https://netl.doe.gov/' },
        { name: 'nrel', url: 'https://www.nrel.gov/' },
        { name: 'ornl', url: 'https://www.ornl.gov/' },
        { name: 'pnnl-logo', url: 'https://www.pnnl.gov/' },
        { name: 'pppl', url: 'https://www.pppl.gov/' },
        { name: 'slac', url: 'https://www6.slac.stanford.edu/' },
      ].map((partner) => (
        <div
          className="grid-col-6 tablet:grid-col-3 desktop:grid-col-2"
          key={partner.name}
        >
          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${partner.name} website`}
          >
            <img
              src={`img/partners/${partner.name}.svg`}
              alt={`${partner.name} logo`}
            />
          </a>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Footer 
      <footer className="usa-footer usa-footer--slim">
        <div className="grid-container">
          <p>&copy; 2025 American Science Cloud</p>
        </div>
      </footer>
      */}
    </Layout>
  );
}
