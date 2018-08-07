const InstrumentFamilies = require("./data/instrument_families.js");
const SelectView = require("./views/select_view.js");


document.addEventListener('DOMContentLoaded', () => {

  const selectElement = document.querySelector("select#instrument-families");
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();
  
});
