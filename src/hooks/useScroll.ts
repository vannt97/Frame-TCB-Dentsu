import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollTop, setScrollTop] = useState<number>();
  useEffect(() => {
    const onScroll = (e: Event) => {
      setScrollTop((e.target as any).documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return {
    scrollTop,
  };
};

export default useScroll;
