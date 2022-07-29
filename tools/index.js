const nameFormatter = (value) => {
  let str = value;

  let result = true;
  const re = /^[a-zA-Z]+$/;

  for (let i = 0; i < str.split("").length; i += 1) {
    result = re.test(str.split("")[i]);
    if (!result) {
      str = str.split("");
      str.splice(i, 1);
      str = str.join("");
      return str;
    }
  }

  if (!str) {
    str = "";
    return str;
  }

  str = str.toLowerCase();
  str = str[0].toUpperCase() + str.slice(1);
  return str;
};

export { nameFormatter };
