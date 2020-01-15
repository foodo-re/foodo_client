export const validatePassword = password => {
  // Password must contain at least one number. & >=8
  return password.match(/\d+/g) && password.length >= 8;
};

export const validateEmail = address => {
  const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return emailRegExp.test(address); // 형식에 맞는 경우 true 리턴
};

export const categoryIcon = {
  육류: "drumstick-bite",
  수산물: "fish",
  채소: "carrot",
  과일: "lemon",
  가공식품반찬류: "hamburger",
  조미향신료: "wine-bottle",
  기타: "bread-slice"
};

export const msgColor = {
  "hurry Eat": "#ffd965",
  "fresh!": "#5ed34f"
};
