const PubSub = require("../helpers/pub_sub.js");

const InstrumentInfoView = function (container) {
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function () {
  PubSub.subscribe("InstrumentFamilies:selected-family-ready", (evt) => {
    const instrument = evt.detail;
    this.render(instrument);
  });
};

InstrumentInfoView.prototype.render = function (instrument) {
  this.container.innerHTML = "";
  const instrumentTitle = document.createElement("h3");
  instrumentTitle.textContent = instrument.name;

  const instrumentDescription = document.createElement("p");
  instrumentDescription.textContent = instrument.description + ".";

  this.container.appendChild(instrumentTitle);
  this.container.appendChild(instrumentDescription);
};



module.exports = InstrumentInfoView;
