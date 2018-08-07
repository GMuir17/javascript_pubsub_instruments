const InstrumentFamilies = require("./data/instrument_families.js");
const SelectView = require("./views/select_view.js");
const InstrumentInfoView = require("./views/instrument_info_view.js");


document.addEventListener('DOMContentLoaded', () => {

  const selectElement = document.querySelector("select#instrument-families");
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const containerElement = document.querySelector("#instruments");
  const instrumentInfoView = new InstrumentInfoView(containerElement);
  instrumentInfoView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();

});
