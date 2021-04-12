import "../styles/globals.css";
import React from 'react'
import NextApp from 'next/app'
import { Client } from "../prismic-configuration";

export default class MyApp extends NextApp {
  static async getInitialProps(appCtx) {
    const client = Client();
    const menu = (await client.getSingle("menu")) || {};
    return {
      props: {
        menu: menu
      },
    };
  }

  render() {
    const { Component, pageProps, props } = this.props
    return (
      <Component {...pageProps} menu={props.menu} />
    )
  }
}