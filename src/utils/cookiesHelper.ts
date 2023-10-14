export const setCookieToken = (token) => {
  const date = new Date();
  date.setTime(date.getTime() + 5 * 60 * 60 * 1000);
  let exp = "expires=" + date.toUTCString();
  document.cookie = "access_token" + "=" + token + ";" + exp + ";path=/";
};
