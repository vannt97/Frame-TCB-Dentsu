import CryptoJS from "crypto-js";

const CRYPTO_KEY = "marvyco-key";

export const encrypt = (msg: string) => {
  return CryptoJS.AES.encrypt(msg, CRYPTO_KEY).toString();
};

export const decrypt = (ciphertext: string) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, CRYPTO_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};
