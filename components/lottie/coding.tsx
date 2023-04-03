import React from "react";
import Lottie from "react-lottie";

export default function CodingLottie({data}: {data: string}){
	const options = {
		loop: true,
		autoplay: true,
		path: data,
		animationData: null

	};

	return (
		<div onClick={() => null}>
			<Lottie options={options} />
		</div>
	);
};

