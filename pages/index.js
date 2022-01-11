import { Client } from "../utils/prismicHelpers";
import SliceZone from "next-slicezone";

import Layout from "./../components/Layout";
import * as Slices from "../slices";
const resolver = ({ sliceName }) => Slices[sliceName];

const Home = (props) => {
  return (
    <Layout menu={props.menu}>
      <SliceZone slices={props.slices} resolver={resolver} />
    </Layout>
  );
};

export async function getStaticProps() {

  const doc = await Client().getSingle("home-page") || null

  return {
    props: {
      slices: doc.data.slices
    }
  }
}

export default Home;
