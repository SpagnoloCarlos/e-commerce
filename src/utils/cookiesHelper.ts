interface ICookie {
  name: string;
  data: any;
  remove?: boolean;
}

export const setCookie = ({ name, data, remove = false }: ICookie) => {
  var jsonString = JSON.stringify(data);
  var base64String = btoa(jsonString);
  const date = new Date();
  date.setTime(
    remove ? date.getTime() + 0 : date.getTime() + 5 * 60 * 60 * 1000
  );
  let exp = "expires=" + date.toUTCString();
  document.cookie = name + "=" + base64String + ";" + exp + ";path=/";
};
