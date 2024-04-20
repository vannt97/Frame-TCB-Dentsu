import { useEffect, useRef, useState } from "react";
import useScroll from "../../../hooks/useScroll";

import { deviceType } from "../../../utils/common";

export default function VideoKv() {
  const refVideoKv = useRef<HTMLVideoElement>(null);
  const { scrollTop } = useScroll();
  const [isPlayVideoKv, setIsPlayVideoKv] = useState(false);

  useEffect(() => {
    let targetHeight =
      Number(refVideoKv.current?.scrollHeight) +
      Number(refVideoKv.current?.clientHeight) / 2;
    if (Number(scrollTop) >= targetHeight) {
      if (!isPlayVideoKv) {
        refVideoKv.current?.play();
        setIsPlayVideoKv(true);
      }
    }
  }, [scrollTop]);

  const renderVideo = () => {
    if (deviceType() == "mobile") {
      return (
        <video
          ref={refVideoKv}
          className="w-full aspect-[16/9] mx-auto"
          preload="auto"
          muted={true}
          loop={false}
          playsInline
          controls={true}
        >
          <source
            src="/assets/videos/capitaland-2-mobile.mp4"
            type="video/mp4"
          />
        </video>
      );
    }
    return (
      <video
        ref={refVideoKv}
        className="w-full aspect-[16/9] mx-auto"
        preload="auto"
        muted={true}
        loop={false}
        playsInline
        controls={true}
      >
        <source src="/assets/videos/capitaland-2.mp4" type="video/mp4" />
      </video>
    );
  };
  return (
    <section id="video-kv" className="video-kv bg-black ct-custom">
      {renderVideo()}
    </section>
  );
}
