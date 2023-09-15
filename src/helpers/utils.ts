import CryptoJS from "crypto-js";

import dotenv from "dotenv";
dotenv.config(); 
const secKey = "UREISLWLSKJKFNU489349FNS";
export const encrypt = (data: string | CryptoJS.lib.WordArray) => {
    return CryptoJS.AES.encrypt(data,secKey).toString();
};

export const decrypt = (data: string | CryptoJS.lib.CipherParams) => {
    const bytes  = CryptoJS.AES.decrypt(data, secKey);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
};