import { Client } from "../utils/prismicHelpers";
import { queryRepeatableDocuments } from '../utils/queries';
import SliceZone from "next-slicezone";

import Layout from "./../components/Layout";
import * as Slices from "../slices";
const resolver = ({ sliceName }) => Slices[sliceName];

const Page = (props) => {
  return (
    <Layout menu={props.menu}>
      <SliceZone slices={props.slices} resolver={resolver} />
    </Layout>
  );
};

// Fetch content from prismic
export async function getStaticProps({ params }) {

  const doc = await Client().getByUID("page", params.uid) || {}

  return {
    props: {
      slices: doc.data.body
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'page')
  return {
    paths: documents.map(doc => `/${doc.uid}`),
    fallback: true,
  }
}

export default Page;
