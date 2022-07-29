const nameFormatter = (value) => {
  let str = value;

  let result = true;
  const re = /^[a-zA-Z]+$/;

  for (let i = 0; i < str.split("").length; i += 1) {
    result = re.test(str.split("")[i]);
    if (!result) return;
  }

  if (!str) {
    str = "";
    return;
  }

  str = str.toLowerCase();
  str = str[0].toUpperCase() + str.slice(1);
  return str;
};

export { nameFormatter };
