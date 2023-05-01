import React from "react";
import Lottie from "lottie-react";
import data from "./coding.json"

export default function CodingLottie(){

	return (
		<div onClick={() => null}>
			<Lottie animationData={data} />
		</div>
	);
};

