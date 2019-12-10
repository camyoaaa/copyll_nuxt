import CryptoJS from 'crypto-js';

export function CryptoMd5(str) {
  const salt = "OvWJ5TMCoq0PozDRKWbU5D3l3O0Kt";
  return CryptoJS.MD5(`${salt}${str}`).toString();
}
