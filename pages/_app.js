import "../styles/globals.css";
import React from 'react';
import NextApp from 'next/app';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { 
  Client,
  repositoryName,
  linkResolver 
} from './../prismicConfiguration';

export default class MyApp extends NextApp {
  static async getInitialProps() {
    const menu = await Client().getSingle("menu")
    return {
      props: {
        menu: menu
      },
    };
  }

  render() {
    const { Component, pageProps, props } = this.props
    return (
      <PrismicPreview repositoryName={repositoryName}>
        <PrismicProvider
          linkResolver={linkResolver}
          internalLinkComponent={({ href, children, ...props }) => (
            <Link href={href}>
              <a {...props}>{children}</a>
            </Link>
          )}
        >
          <Component {...pageProps} menu={props.menu} />
        </PrismicProvider>
      </PrismicPreview>
    )
  }
}