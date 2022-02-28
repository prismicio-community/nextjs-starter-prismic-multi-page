import React from 'react'
import Head from 'next/head'
import Header from './Header'

const Layout = ({ children, menu, doc }) => {
  const title = doc.data.meta_title
  const description = doc.data.meta_description
  return (
    <div>
      <Head>
        <title>{title ? title : 'Page title'}</title>
        <meta
          name="description"
          content={description ? description : 'Page Description'}
        />
      </Head>
      <Header menu={menu} doc={doc} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
