import { useMemo } from "react";

export default function ProcessBar(props: any) {
  const processBar = useMemo(() => {
    let w = "w-[0%]";
    switch (props.step) {
      case 1: {
        w = "w-[25%]";
        break;
      }
      case 2: {
        w = "w-[50%]";
        break;
      }
      case 3: {
        w = "w-[75%]";
        break;
      }
      case 4: {
        w = "w-[100%]";
        break;
      }
      default: {
        w = "w-[0%]";
      }
    }
    return (
      <div
        className={`crt-frame-process-bar crt-frame-process-bar-striped ${w}`}
      ></div>
    );
  }, [props.step]);
  return processBar;
}
