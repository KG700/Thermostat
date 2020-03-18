// let Thermostat = function(){
//   this.temperture = 20;
// };
'use strict';

class Thermostat {
  constructor(){
    this.DEFAULT_TEMPERTURE = 20;
    this.temperture = this.DEFAULT_TEMPERTURE;
    this.isSavingModeOn = true;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.MINIMUM_TEMPERTURE = 10;
    this.MAXIMUM_TEMPERTURE_SAVING_MODE_ON = 25;
    this.MAXIMUM_TEMPERTURE_SAVING_MODE_OFF = 32;
  };
};

Thermostat.prototype.getCurrentTemperture = function(){
  return this.temperture;
};

Thermostat.prototype.up = function() {
  if (this.temperture == this.isMaximumTemperture()) { return; };
  this.temperture += 1;
};

Thermostat.prototype.down = function () {
  if (this.temperture == this.MINIMUM_TEMPERTURE) { return; };
  this.temperture -= 1;
};

Thermostat.prototype.savingModeSwitch = function () {
  this.isSavingModeOn = !this.isSavingModeOn
  // this._updateMaximumTemperture();
};

Thermostat.prototype.reset = function () {
  this.temperture = this.DEFAULT_TEMPERTURE;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperture < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  } else if (this.temperture < this.MAXIMUM_TEMPERTURE_SAVING_MODE_ON) {
    return 'medium-usage';
  } else return 'high-usage';
};

Thermostat.prototype.isMaximumTemperture = function(){
  if (this.isSavingModeOn) {
    return this.MAXIMUM_TEMPERTURE_SAVING_MODE_ON;
  } else {
    return this.MAXIMUM_TEMPERTURE_SAVING_MODE_OFF;
  };
};

// Thermostat.prototype._updateMaximumTemperture = function () {
//   this.isSavingModeOn ? this.maximumTemperture = 25 : this.maximumTemperture = 32;
// };
