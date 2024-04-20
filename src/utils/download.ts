export function downloadFile(dataUrl: string, fileName: string) {
  const a = document.createElement("a");
  a.style.display = "none";
  a.target = "_blank";
  a.href = dataUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(dataUrl);
  }, 100);
}

export function downloadFileByFile(file: any, fileName: string) {
  const a = document.createElement("a");
  a.style.display = "none";
  a.target = "_blank";
  a.href = window.URL.createObjectURL(file);
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    // window.URL.revokeObjectURL(dataUrl);
  }, 100);
}
