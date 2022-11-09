class hashTableArr {
 constructor() {
  this.storage = {};
 }

 set(key, value) {
  if (!this.storage[key]) this.storage[key] = { value: value };
 }
}

const repeated = (str) => {
 let arr = [],
  repeated,
  splitted = str.split(" ");
 for (let i = 0; i < splitted.length; i++) {
  arr.includes(splitted[i]) ? (repeated = splitted[i]) : arr.push(splitted[i]);
  if (repeated) return repeated;
 }
 return "No Repetition";
};
console.log(repeated("I am ASAC learning programming at ASAC"));

module.exports = { hashTableArr, repeated }; 
