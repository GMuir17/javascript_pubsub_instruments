const PubSub = require("../helpers/pub_sub.js");

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  this.element.addEventListener("change", (event) => {
    const selectedInstrumentFamily = event.target.name;
    console.log(selectedInstrumentFamily);
  });
};






module.exports = SelectView;
