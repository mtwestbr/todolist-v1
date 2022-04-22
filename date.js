//jshint esversion:6

// module.exports.getDate = getDate;
// module.exports.getDay = getDay;


// function getDate() {
//   var today = new Date();
//   var options = {
//     weekday: "long",
//     day: "numeric",
//     month: "long"
//   };
//   return today.toLocaleDateString("en-US", options);
// }

// module.exports.getDate function () {
exports.getDate = function () {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return today.toLocaleDateString("en-US", options);
}

exports.getDay = function () {
  const today = new Date();
  const options = {
    weekday: "long"
  };
  return today.toLocaleDateString("en-US", options);
}
