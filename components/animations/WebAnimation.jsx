"use client";

import Lottie from "lottie-react";
import webAnimation from "./web.json";

export default function WebAnimation() {
    const style = {
        height: 800,
    };

    return <Lottie style={style} animationData={webAnimation} speed={0.1} />;
}
