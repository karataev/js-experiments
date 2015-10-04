

var json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};

//var familyName = json.name.family;
//var birthDay = json.birth.day;
//var {familyName} = json.name;
//var {birthDay} = json.birth;
var {name: {family: familyName}, birth: {day: birthDay}} = json;

console.log(familyName);
console.log(birthDay);

