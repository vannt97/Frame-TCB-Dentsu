export const getRandomNum = (min: number, max: number) => {
  return Math.random() * (max - min);
};
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};
export function isEmail(email: string) {
  var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}
export function isPhone(number: string) {
  var vnf_regex = /^(0)\D?((3)|(5)|(7)|(8)|(9){1})\D?([0-9]{8})$/g;
  return vnf_regex.test(number);
}

export function convertToDate(dateString: string) {
  //  Convert a "dd/MM/yyyy" string into a Date object
  let d = dateString.split("/");
  let dat = new Date(d[2] + "/" + d[1] + "/" + d[0]);
  return dat;
}

export function deviceType() {
  const ua = navigator.userAgent;
  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  } else if (
    /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
      ua
    )
  ) {
    return "tablet";
  }
  return "desktop";
}



export const arrayToArray2 = (arr: any[]) => {
  let arr2D = [];

  for (let i = 0; i < arr.length; i += 3) {
    arr2D.push([arr[i], arr[i + 1], arr[i + 2]]);
  }

  return arr2D;
};

export function numberWithFullStop(x: any) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

//Conver img64 to file
//return a promise that resolves with a File instance
export function base64toFile(
  base64: any,
  filename: any,
  mimeType = "image/png"
) {
  //call
  // urltoFile(Database64, 'painting.png','image/png').then(function(file){
  //     console.log(file);
  // });
  return fetch(base64)
    .then(function (res) {
      return res.arrayBuffer();
    })
    .then(function (buf) {
      return new File([buf], filename, { type: mimeType });
    });
}

export const imageUrlToBase64 = async (url: string) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
    reader.onerror = reject;
  });
};

export function getBase64Image(img: HTMLImageElement) {
  let canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.drawImage(img, 0, 0);
  let dataURL = canvas.toDataURL("image/png");
  return dataURL;
}

export async function reduceSizeCustom(files: any, target: number) {
  return new Promise((resolve, rejects) => {
    if (!files) {
      rejects();
    }
    if (!files.length) {
      rejects();
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      let img = new Image();
      img.onload = async () => {
        console.log("width: ", img.width);
        console.log("height: ", img.height);
        let d =
          Math.floor(Math.sqrt(target / (img.width * img.height)) * 100) / 100;
        let imgResized = {
          width: img.width * d,
          height: img.height * d,
        };
        console.log("after cal: ", imgResized);
        const resolution = imgResized.width / imgResized.height;
        const canvas = document.createElement("canvas") as HTMLCanvasElement;
        canvas.height = imgResized.height;
        canvas.width = imgResized.height * resolution;
        console.log("canvas", {
          width: imgResized.height * resolution,
          height: imgResized.height,
        });
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        ctx.drawImage(
          img,
          0,
          0,
          imgResized.height * resolution,
          imgResized.height
        );
        let url = canvas.toDataURL("image/png");
        base64toFile(url, `upload-${Date.now()}`).then((responseFile) => {
          resolve(responseFile);
        });

        // console.log("after width: ", img.width * d);
        // console.log("after height: ", img.height * d);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(files[0]);
  });
}

export function validationSingleFile(
  files: any,
  type = "image",
  isCheckSize = false,
  maxSize = 10
) {
  if (files.length == 0) {
    return "Chọn file cần upload";
  } else {
    console.log(files[0]);
    let filename = files[0].name;

    /* getting file extenstion eg- .jpg,.png, etc */
    let extension = filename.substr(filename.lastIndexOf("."));
    let isAllowed = undefined;
    /* define allowed file types */
    if (type == "image") {
      let allowedExtensionsRegx = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      isAllowed = allowedExtensionsRegx.test(extension);
    }
    /* testing extension with regular expression */

    if (isAllowed) {
      let fileSize = files[0].size;
      /* 1024 = 1MB */
      let size = Math.round(fileSize / 1024);
      /* checking for less than or equals to 2MB file size */
      if (isCheckSize) {
        if (size <= maxSize * 1024) {
          return "";
        } else {
          return `"File có dung lượng nhỏ hơn hoặc bằng ${maxSize} MB`;
        }
      } else {
        // file upload
        return "";
      }
    } else {
      return "File không hợp lệ";
    }
  }
}

export function fileToBase64(files: FileList) {
  return new Promise<string>((resolve, reject) => {
    if (files.length) {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target?.result as string);
      };
      reader.onerror = () => {
        reject();
      };
      reader.readAsDataURL(files[0]);
    }
  });
}

// export function logger() {
//   // console.log(window.IS_DEBUG);
//   if (window.IS_DEBUG == false) {
//     if (!window.console) window.console = {};
//     var methods = ["log", "debug", "warn", "info"];
//     for (var i = 0; i < methods.length; i++) {
//       console[methods[i]] = function () {};
//     }
//   }
// }