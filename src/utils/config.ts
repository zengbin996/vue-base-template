export const CONST_URL = {
  SERVICE: 'https://github.com/',
};

export const PATTERNS = {
  mobileNumber: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/, //手机号
  email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, //邮箱
  passwordSimple: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,12}$/, //复杂密码
  passwordComplex: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/, //简单密码
  account: /^\d{6,9}$/, //账号
  bankNumber: /^([1-9]{1})(\d{15}|\d{16}|\d{18})$/, //银行卡号
};
