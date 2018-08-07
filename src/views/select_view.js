const PubSub = require("../helpers/pub_sub.js");

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {


  PubSub.subscribe("InstrumentFamilies:family-names", (evt) => {
    const instrumentFamilies = evt.detail;
    this.populateDropDown(instrumentFamilies);
  });


  this.element.addEventListener("change", (evt) => {
    const selectedInstrumentFamily = evt.target.value;
    PubSub.publish("SelectView:change", selectedInstrumentFamily);
  });
};

SelectView.prototype.populateDropDown = function (instrumentFamilies) {
  instrumentFamilies.forEach(family => {
    const option = document.createElement("option");
    option.textContent = family.name;
    this.element.appendChild(option);
  });
};




module.exports = SelectView;
