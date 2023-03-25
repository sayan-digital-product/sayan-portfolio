import React from "react";
import Lottie from "react-lottie";

export default function CodingLottie({ animationPath }){
	const defaultOptions = {
		loop: true,
		autoplay: true,
		path: animationPath,
	};

	return (
		<div onClick={() => null}>
			<Lottie options={defaultOptions} />
		</div>
	);
};

