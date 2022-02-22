import { Client } from '../utils/prismicHelpers'
import { queryRepeatableDocuments } from '../utils/queries'
import { SliceZone } from '@prismicio/react'

import Layout from './../components/Layout'
import * as Slices from '../slices'

const Page = (props) => {
  return (
    <Layout menu={props.menu} doc={props.doc} meta={props.meta}>
      <SliceZone
        slices={props.slices}
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
  const doc = (await Client().getByUID('page', params.uid)) || {}

  return {
    props: {
      doc: doc,
      metadata: doc.data.slices1,
      slices: doc.data.body,
    },
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'page')
  return {
    paths: documents.map((doc) => `/${doc.uid}`),
    fallback: true,
  }
}

export default Page
