import Cropper from "cropperjs";
export let cropper: Cropper | undefined = undefined;
export const uploadImageToCrop = (
  idElem: string,
  file: FileList,
  { isImage, url }: { isImage: boolean; url: string },
  aspectRatio: any
) => {
  let config = {
    aspectRatio,
    autoCropArea: 1,
    zoomable: true,
    background: false,
    modal: false,
    guides: false,
    highlight: false,
    center: false,
    autoCrop: true,
    dragMode: "move",
  } as any;
  if (isImage) {
    let result = document.getElementById(idElem) as HTMLElement;
    let img = document.createElement("img");
    img.id = "image";
    img.src = url;
    // clean result before
    result.innerHTML = "";
    // append new image
    result.appendChild(img);
    config.minCropBoxHeight = result.clientHeight;
    config.minCropBoxWidth = result.clientWidth;
    // init cropper
    // cropper =
    if (!cropper) {
      cropper = new Cropper(img, config);
    } else {
      cropper.destroy();
      cropper = new Cropper(img, config);
    }
  } else {
    if (file.length) {
      // start file reader
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          let result = document.getElementById(idElem) as HTMLElement;
          let img = document.createElement("img");
          img.id = "image";
          img.src = e.target.result as string;
          // clean result before
          result.innerHTML = "";
          // append new image
          result.appendChild(img);
          config.minCropBoxHeight = result.clientHeight;
          config.minCropBoxWidth = result.clientWidth;
          // init cropper
          // cropper =
          if (!cropper) {
            cropper = new Cropper(img, config);
          } else {
            cropper.destroy();
            cropper = new Cropper(img, config);
          }
        }
      };
      reader.readAsDataURL(file[0]);
    }
  }
};

export const getCroppedCanvas = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (cropper as Cropper)
    .getCroppedCanvas({
      minWidth: width,
      minHeight: height,
      maxHeight: 4096,
      maxWidth: 4096,
      imageSmoothingEnabled: true,
      imageSmoothingQuality: "high",
    })
    .toDataURL("image/png", 1);
};

export const disableMode = () => {
  if (!cropper) return;
  cropper?.disable();
};

export const activeModeMove = () => {
  if (!cropper) return;
  cropper.enable();
};

// export const destroyCropper = () => {
//   if (!cropper) return;
//   cropper.destroy();
// };
