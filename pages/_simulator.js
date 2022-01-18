// e.g. ~/pages/slice-simulator.jsx
import { SliceSimulator } from "@prismicio/slice-simulator-react";
import SliceZone from "next-slicezone";

import state from "../.slicemachine/libraries-state.json";
import resolver from  "../sm-resolver";

const SliceSimulatorPage = () => (<SliceSimulator
	// The `sliceZone` prop should be a function receiving slices and rendering them using your `SliceZone` component.
	sliceZone={({ slices }) => <SliceZone slices={slices} resolver={resolver} />}
	state={state}
/>);

export default SliceSimulatorPage;