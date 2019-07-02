let str = "I can walk in the park all day!";
console.log(str.substring(18,22));

let str1 = "JavaScript";
console.log(str1.substring(3,6));

let str2 = "Hello World";
console.log(str2.toUpperCase());

let str3 = "Hello Earthling";
console.log(str3.toLowerCase());

let str4 = "nice shoes";
console.log(str4.includes("l"));
console.log(str4.includes("n"));

let str5 = "nice shoes",
    str6 = `${str5.substring(0,1)}`;
console.log(`${str6}${str5}${str6}`);

let str7 = "nice shoes";
console.log(`${str7.substring(7,10)}
${str7}
${str7.substring(7,10)}`);

let str8 = "learning Javascript";
console.log(str8.toUpperCase().includes("Java"));

let str9 = "JavaScript",
    str10 = `${str9.substring(0,1)}`,
    str11 = `${str9.substring(9)}`,
    str12 = `${str9.substring(1,9)}`;
console.log(`${str11}${str12}${str10}`);