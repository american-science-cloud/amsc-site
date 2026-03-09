import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

export default function Home() {
  useEffect(() => {
    window.location.replace("https://amsc.energy.gov/");
  }, []);

  return (
    <Layout title="Site moved" description="This site has moved">
      <Head>
        <meta httpEquiv="refresh" content="0; url=https://amsc.energy.gov/" />
        <link rel="canonical" href="https://amsc.energy.gov/" />
        <meta name="robots" content="noindex" />
      </Head>

      <main style={{ padding: "2rem", textAlign: "center" }}>
        <p>
          This site has moved to{" "}
          <a href="https://amsc.energy.gov/">https://amsc.energy.gov/</a>.
        </p>
      </main>
    </Layout>
  );
}
