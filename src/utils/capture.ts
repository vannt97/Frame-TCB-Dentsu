import html2canvas, { Options } from "html2canvas";
import { base64toFile } from "./common";

export const captureElement = (idElem: string, isObjectFile = false) => {
  let promise = new Promise((resolve) => {
    html2canvas(
      document.getElementById(idElem) as HTMLElement,
      {
        allowTaint: true,
        useCORS: true,
        letterRendering: 1,
      } as Partial<Options>
    ).then(function (canvas) {
      const image = canvas.toDataURL("image/png", 1.0);
      if (!isObjectFile) {
        resolve(image);
      } else {
        base64toFile(image, `capture-photo-${Date.now()}`).then(
          (responseFile) => {
            resolve(responseFile);
          }
        );
      }
    });
  });
  return promise; //dataBase64
};
