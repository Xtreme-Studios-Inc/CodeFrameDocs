import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {/* {siteConfig.title} */}
          <span className={styles.brandTitle}>CodeFrame</span>
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg"
            style={{
              backgroundColor: "var(--color-green)",
              color: "white",
              marginRight: "1rem",
            }}
            to="https://github.com/Xtreme-Studios-Inc/CodeFrameDocs/releases/download/codeframe.003/codeframe-installer.exe"
          >
            Download
          </Link>
          <Link
            className="button button--lg"
            style={{
              backgroundColor: "#9777ea",
              color: "white",
              marginRight: "1rem",
            }}
            to="/docs/introduction"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
