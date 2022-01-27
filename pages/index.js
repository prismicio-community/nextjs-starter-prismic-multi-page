import { Client } from "../prismicConfiguration";
import { SliceZone } from '@prismicio/react'

import Layout from "./../components/Layout";
import { components } from '../slices';

const Home = (props) => {
  return (
    <Layout menu={props.menu}>
      <SliceZone 
        slices={props.slices}
        components={components} 
      />
    </Layout>
  );
};

export async function getStaticProps(context) {

  const doc = await Client({context}).getSingle("home-page") || null

  return {
    props: {
      slices: doc.data.slices
    }
  }
}

export default Home;
