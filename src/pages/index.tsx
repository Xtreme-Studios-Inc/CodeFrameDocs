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
            to="https://github.com/Xtreme-Studios-Inc/CodeFrameDocs/releases/download/codeframe.latest/codeframe-installer.exe"
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
//${siteConfig.title}`
export default function Home(): ReactNode {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Modern Toolchain for Low-Level Development`}
      description="CodeFrame is the next-generation low-level build tool bringing speed, simplicity, and modern features you expect from tools like Bun or npm, to C, C++ and Assembly. <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
