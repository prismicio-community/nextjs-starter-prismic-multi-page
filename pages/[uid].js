import React from 'react'
import { SliceZone } from '@prismicio/react'
import { client } from 'prismicio'

import Layout from './../components/Layout'
import * as Slices from '../slices'

const Page = (props) => {
  return (
    <Layout menu={props.menu} doc={props.doc}>
      <SliceZone
        slices={props.doc.data.body}
        components={{
          banner_slice: Slices.BannerSlice,
          featured_image: Slices.FeaturedImage,
          full_width_image: Slices.FullWidthImage,
          image_gallery: Slices.ImageGallery,
          text_slice: Slices.TextSlice,
          quote_slice: Slices.QuoteSlice,
        }}
      />
    </Layout>
  )
}

// Fetch content from prismic
export async function getStaticProps({ params }) {
  const doc = await client.getByUID('page', params.uid)

  return {
    props: {
      doc: doc,
    },
  }
}

export async function getStaticPaths() {
  const documents = await client.getAllByType('page')
  return {
    paths: documents.map((doc) => `/${doc.uid}`),
    fallback: true,
  }
}

export default Page
