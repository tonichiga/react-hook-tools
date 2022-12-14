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

const moneyFormatter = (money, isFormat1000 = false) => {
  let equal = 10000;

  if (isFormat1000) {
    equal = 1000;
  }

  if (Number(money) >= equal) {
    money = parseInt(money).toLocaleString("en-US").replaceAll(",", " ");
  }
  return money;
};

const phoneFormatter = (number, preset = [3, 7, 10]) => {
  let arr = String(number).split("");
  let stroke = "-";

  arr.splice(preset[0], 0, stroke);
  arr.splice(preset[1], 0, stroke);
  arr.splice(preset[2], 0, stroke);

  const string = "+" + arr.join("");

  return string;
};

const deppClone = (obj) => {
  // Se não for array ou objeto, retorna null
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let cloned, i;

  // Handle: Date
  if (obj instanceof Date) {
    cloned = new Date(obj.getTime());
    return cloned;
  }

  // Handle: array
  if (obj instanceof Array) {
    let l;
    cloned = [];
    for (i = 0, l = obj.length; i < l; i++) {
      cloned[i] = ObjectUtils.deppClone(obj[i]);
    }

    return cloned;
  }

  // Handle: object
  cloned = {};
  for (i in obj)
    if (obj.hasOwnProperty(i)) {
      cloned[i] = ObjectUtils.deppClone(obj[i]);
    }

  return cloned;
};

export { nameFormatter, moneyFormatter, phoneFormatter, deppClone };
