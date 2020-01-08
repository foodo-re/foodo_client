export const validatePassword = password => {
  // Password must contain at least one number. & >=8
  return password.match(/\d+/g) && password.length >= 8;
};

export const validateEmail = address => {
  const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return emailRegExp.test(address); // 형식에 맞는 경우 true 리턴
};
