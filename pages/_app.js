import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";

import { repositoryName, linkResolver } from "../prismicio";

import "../styles.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, ...props }) => (
          <Link href={href}>
            <a {...props} />
          </Link>
        )}
      >
        <Component {...pageProps} />
      </PrismicProvider>
      <PrismicPreview repositoryName={repositoryName} />
    </>
  );
};

export default App;
