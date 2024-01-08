import packageJson from "../../package.json";
import moment from "jalali-moment";
import { v4 as uuidv4 } from "uuid";
export const timeout = (delay: number) => {
  return new Promise(res => setTimeout(res, delay));
};
export const toDate = (date: string | undefined, dash = false) => {
  if (date && date !== "Invalid date") {
    return moment(date.includes(" - ") ? date.replace(" - ", " ") : date)
      .locale("fa")
      .format(dash ? "YYYYY-MM-DD" : "YYYY/MM/DD");
  } else {
    return moment().locale("fa").format("YYYY/MM/DD");
  }
};
export const toFullTime = (date: string | undefined, dash = false) => {
  if (date) {
    return moment(date.includes(" - ") ? date.replace(" - ", " ") : date)
      .locale("fa")
      .format(dash ? "YYYYY-MM-DD" : "YYYY/MM/DD - HH:MM:SS");
  } else {
    return moment().locale("fa").format("YYYY/MM/DD");
  }
};
export const highlightSearchText = (text: string, searchText: string) => {
  const regex = new RegExp(searchText, "gi");
  return text
    ? text.replace(
        regex,
        match => `<span style="color:#362FD9;">${match}</span>`
      )
    : "ثبت نشده";
};
export const p2e = (s: string) => {
  if (s) {
    const persianNumbers = "۰۱۲۳۴۵۶۷۸۹";
    const englishNumbers = "0123456789";

    let result = "";
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      const index = persianNumbers.indexOf(char);
      if (index !== -1) {
        result += englishNumbers[index];
      } else {
        result += char;
      }
    }
    return result;
  }
};
export const counter = ({
  sortStatus = "asc",
  _id,
  allData,
}: {
  sortStatus: string | null;
  _id: number;
  allData: any;
}) => {
  if (sortStatus !== "asc") {
    return (
      +allData?.meta?.total -
      (+allData?.meta?.current_page - 1) * +allData?.meta?.per_page -
      _id
    );
  } else {
    return (
      (+allData?.meta?.current_page - 1) * +allData?.meta?.per_page + _id + 1
    );
  }
};
export const removeFalsyKeys = (obj: any) => {
  for (let key in obj) {
    if (!obj[key]) {
      delete obj[key];
    }
  }
  return obj;
};
export const hookValue = (keys: string[], obj: any): string | number => {
  let res = "";
  keys.forEach((key, idx) => {
    if (idx === key.length - 1) {
      res = obj[key];
    } else {
      if (obj[key]) {
        hookValue(keys, obj[key]);
      } else {
        res = "";
      }
    }
  });
  return res === "" ? "ثبت نشده" : res;
};
export const caching = () => {
  let version = localStorage.getItem("version");
  if (version !== packageJson.version) {
    if ("caches" in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
      window.location.reload();
    }

    localStorage.clear();
  }
  localStorage.setItem("version", packageJson.version);
};
export const now = () => {
  const m = moment();
  m.locale("fa");
  if (window.innerWidth < 720) {
    return `${m.format("DD")}
  / ${m.format("MMM")} /
  ${m.format("YYYY")}`;
  } else {
    return `${m.format("dddd")}، 
  ${m.format("DD")}
  / ${m.format("MMM")} ماه /
  ${m.format("YYYY")}`;
  }
};
export const changeObj = (
  id: number | string,
  arr: any[],
  obj: any,
  key: string
) => {
  return arr.map(ele => {
    if (ele[key] === id) {
      return { ...ele, ...obj };
    } else {
      return { ...ele };
    }
  });
};
export const random = () => {
  return uuidv4();
};
export const incrementString = (str: string): string => {
  const numPart = str.match(/\d+$/);
  if (numPart) {
    const incrementedNum = String(Number(numPart[0]) + 1).padStart(
      numPart[0].length,
      "0"
    );
    str = str.replace(/\d+$/, incrementedNum);
  } else {
    str += "1";
  }
  return str;
};
export const validateArray = (input: any): boolean => {
  if (Array.isArray(input) && input.length > 0) {
    return true;
  }

  return false;
};
export const convertPersianToEnglish = (obj: any): any => {
  const persianNumberRegex = /[۰-۹]/g; // Regex pattern to match Persian numbers

  if (typeof obj === "object" && obj !== null) {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        obj[key] = obj[key].replace(persianNumberRegex, function (match: any) {
          return String.fromCharCode(match.charCodeAt(0) - 1728);
        });
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        obj[key] = convertPersianToEnglish(obj[key]); // Recursive call for nested objects
      }
    }
  }

  return obj;
};
export const replaceNumbers = (
  inputString: string,
  replacements: Record<string, string>
): string => {
  const resultString = inputString.replace(/\d+/g, match => {
    return replacements.hasOwnProperty(match) ? replacements[match] : match;
  });

  return resultString;
};
export const getYears = () => {
  let currentDate = moment();
  let currentYear = currentDate.jYear();

  let years = generateNumberArray(1402, currentYear + 10);
  return years.map(year => {
    return { value: year, label: year };
  });
};
export const currentYear = () => {
  let currentDate = moment();
  let currentYear = currentDate.jYear();
  return currentYear;
};
export const generateNumberArray = (x: number, y: number) => {
  return Array.from({ length: y - x + 1 }, (_, index) => x + index);
};
export const timestampDate = (currentDate: any) => {
  return moment(currentDate).format("YYYY-MM-DD HH:MM:SS");
};
export const isExists = (watch: any, keys: string[]) => {
  let valid = true;
  keys.forEach((e: string) => {
    if (!watch(e)) {
      valid = false;
    }
  });
  return valid;
};
export const taxCalc = (tax: string | number, value: string | number) => {
  console.log({ tax });
  if (tax) {
    return Math.ceil(+value - +value * (+tax / 100));
  }
  return value;
};
export const renderMonth = (cel: number | string) => {
  let res = "";
  let months = [
    { id: 1, label: "فروردین" },
    { id: 2, label: "اردیبهشت" },
    { id: 3, label: "خرداد" },
    { id: 4, label: "تیر" },
    { id: 5, label: "مرداد" },
    { id: 6, label: "شهریور" },
    { id: 7, label: "مهر" },
    { id: 8, label: "آبان" },
    { id: 9, label: "آذر" },
    { id: 10, label: "دی" },
    { id: 11, label: "بهمن" },
    { id: 12, label: "اسفند" },
  ];
  months.forEach(element => {
    if (+element.id === +cel) {
      res = element.label;
    }
  });
  return res;
};
export const currentMonth = () => {
  var currentDate = moment();
  var currentMonth = currentDate.jMonth() + 1;
  return currentMonth;
};
export const renderStatusCheque = (status: string | number) => {
  switch (status) {
    case "useless":
      return "استفاده نشده";
    case "usable":
      return "استفاده شده";
    case "returned":
      return "برگشتی";
    default:
      break;
  }
};
export const sumByKey = (arr: any[], key: string) => {
  let result = 0;
  if (Array.isArray(arr) && arr.length > 0) {
    arr.forEach(ele => {
      if (ele[key]) {
        result += +ele[key];
      }
    });
  }
  return result;
};
export const renderPrice = (x: any, rial?: boolean) => {
  return typeof x !== "undefined"
    ? typeof x == "string" || typeof x == "number"
      ? `${x.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${
          rial ? "ریال" : ""
        }`
      : 0
    : 0;
};

export const sumDoc = (items: any[]) => {
  let total = 0;
  items.forEach((item: any) => {
    total += +item.item.creditor;
  });
  return total;
};
export const digitsToWords = (value: number) => {
  var delimiter, digit, i, parts, result, resultThree;
  let iThree: any = "";
  let three: any = "";
  let numbers: any = "";
  let newValue = "";
  if (!isFinite(value)) {
    return "";
  }

  if (typeof value !== "string") {
    newValue = value.toString();
  }

  parts = [
    "",
    "هزار",
    "میلیون",
    "میلیارد",
    "تریلیون",
    "کوادریلیون",
    "کویینتیلیون",
    "سکستیلیون",
  ];
  numbers = {
    0: [
      "",
      "صد",
      "دویست",
      "سیصد",
      "چهارصد",
      "پانصد",
      "ششصد",
      "هفتصد",
      "هشتصد",
      "نهصد",
    ],
    1: ["", "ده", "بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"],
    2: ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"],
    two: [
      "ده",
      "یازده",
      "دوازده",
      "سیزده",
      "چهارده",
      "پانزده",
      "شانزده",
      "هفده",
      "هجده",
      "نوزده",
    ],
    zero: "صفر",
  };
  delimiter = " و ";

  let valueParts = newValue
    .split("")
    .reverse()
    .join("")
    .replace(/\d{3}(?=\d)/g, "$&,")
    .split("")
    .reverse()
    .join("")
    .split(",")
    .map(function (str) {
      return Array(4 - str.length).join("0") + str;
    });

  result = (function () {
    var _results;
    _results = [];
    for (iThree in valueParts) {
      three = valueParts[iThree];

      resultThree = (function () {
        var _i, _len, _results1;
        _results1 = [];

        for (i = _i = 0, _len = three.length; _i < _len; i = ++_i) {
          digit = three[i];
          if (i === 1 && digit === "1") {
            _results1.push(numbers.two[three[2]]);
          } else if (
            (i !== 2 || three[1] !== "1") &&
            numbers[i][digit] !== ""
          ) {
            _results1.push(numbers[i][digit]);
          } else {
            continue;
          }
        }

        return _results1;
      })();

      resultThree = resultThree.join(delimiter);
      _results.push(resultThree + " " + parts[valueParts.length - iThree - 1]);
    }
    return _results;
  })();

  result = result.filter(function (x) {
    return x.trim() !== "";
  });

  result = result.join(delimiter).trim();
  if (result === "") {
    result = numbers.zero;
  }

  return result;
};
export const creatorOp = (state: any) => {
  if (state.creator) {
    return {
      creator_id: `${state?.creator?.firstname || ""} ${
        state?.creator?.lastname || ""
      }`,
    };
  }
  return { creator_id: "ثبت نشده" };
};
export const sortArrayDescending = (arr: any) => {
  return arr.sort(function (a: any, b: any) {
    return b.id - a.id;
  });
};
export const isImage = (file: string) => {
  const ext: string = file.split(".").pop()?.toLowerCase() || "";
  var imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];
  return imageExtensions.includes(ext);
};
export const downloadFile = (url: string, fileName: string) => {
  // Create an anchor element
  const link = document.createElement("a");

  // Set the href and download attributes
  link.href = url;
  link.download = fileName;

  // Append the link to the body
  document.body.appendChild(link);
  link.target = "_blank";
  // Trigger a click event on the link
  link.click();

  // Remove the link from the DOM
  document.body.removeChild(link);
};
export const allKeyIsThis = (arr: any[], key: string, value: string) => {
  let number = 0;
  arr.forEach(ele => {
    if (ele[key] === value) {
      number++;
    }
  });
  return number;
};
export const digitsToWord = (number: number) => {
  return `${digitsToWords(number).toString()} ریال`;
};
export const toGregorianDate = (jalaliDate: string) => {
  return moment
    .from(jalaliDate, "fa", "YYYY-MM-DD")
    .format("YYYY-MM-DD hh:mm:ss");
};
export const sumByIndex = (arr: any, index: number, key: string) => {
  let res = 0;
  if (index === 0) {
    return res;
  }
  Array(index + 1)
    .fill(1)
    .forEach((_, secondIndex) => {
      res += +arr[secondIndex][key];
    });
  return res;
};
export const renderNatureAccount = (value: string): string => {
  switch (value) {
    case "debtor":
      return "بدهکار";
    case "creditor":
      return "بستانکار";
    case "debtorcreditor":
      return "بد/بس";
    default:
      return "";
  }
};
export const isIdInArray = (id: number, arrayOfObjects: any[]): boolean => {
  return arrayOfObjects.some(obj => obj.account_id === id);
};

export const convertDate = (date: string) => {
  if (date) {
    return moment.from(date, "fa", "YYYY/MM/DD").format("YYYY-MM-DD hh:mm:ss");
  } else {
    return null;
  }
};
