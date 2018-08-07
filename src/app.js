const InstrumentFamily = require("./data/instrument_families.js");
const SelectView = require("./views/select_view.js");


document.addEventListener('DOMContentLoaded', () => {

  const instrumentFamily = new InstrumentFamily();
  instrumentFamily.bindEvents();

  const selectElement = document.querySelector("#instrument-families");
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

});
