import CryptoJS from 'crypto-js';


//加密字符串
export function CryptoMd5(str) {
  const salt = "OvWJ5TMCoq0PozDRKWbU5D3l3O0Kt";
  return CryptoJS.MD5(`${salt}${str}`).toString();
}

//隐藏手机号码中间4位
export function phoneHide(phone) {
  return String(phone).split('').map((c, i) => [3, 4, 5, 6].includes(i) ? '*' : c).join('');
}
