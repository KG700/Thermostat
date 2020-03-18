'use strict';

describe('Thermostat', () => {

  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat;
  });

  it('starts at 20 degrees', () => {
    expect(thermostat.temperture).toEqual(20);
  });

  describe('up', () => {
    it('exists', () => {
      expect(thermostat.up).not.toBeUndefined();
    });
    it('increases the temperature', () => {
      thermostat.up();
      expect(thermostat.temperture).toBeGreaterThan(20);
    });
  });

  describe('getCurrentTemperture', () => {
    it('exists', () => {
      expect(thermostat.getCurrentTemperture).not.toBeUndefined();
    });
    it('starts at 20', () => {
      expect(thermostat.getCurrentTemperture()).toEqual(20);
    });
  });

  describe('down', () => {
    it('exists', () => {
      expect(thermostat.down).not.toBeUndefined();
    });
    it('decreases the temperature', () => {
      thermostat.down();
      expect(thermostat.temperture).toBeLessThan(20);
    });
    it("doesn't go below 10 degrees", () => {
      for(let i = 0; i <= 15; i++) {
        thermostat.down();
      };
      expect(thermostat.temperture).toEqual(10);
    });
  });

  describe('SavingModeSwitch', () => {
    // it('exists', () => {
    //   expect(thermostat.isSavingMode).not.toBeUndefined();
    // });
    it('is on the maximum temperature is 25 degrees', () => {
      thermostat.savingModeSwitch();
      thermostat.savingModeSwitch();
      for (let i = 0; i <= 40; i++){
        thermostat.up();
      };
      expect(thermostat.temperture).toEqual(25);
    });
    it('is off the maximum temperature is 32 degrees', () => {
      thermostat.savingModeSwitch();
      for (let i = 0; i <= 40; i++){
        thermostat.up();
      };
      expect(thermostat.temperture).toEqual(32);
    });
    it('is on by default', () => {
      expect(thermostat.isSavingModeOn).toBe(true);
    });
  });

  describe('reset', () => {
    it('resets temperture to 20', () => {
      thermostat.up()
      thermostat.reset();
      expect(thermostat.temperture).toEqual(20);
    });
  });

  describe('energyUsage', () => {
    it('exists', () => {
      expect(thermostat.energyUsage).not.toBeUndefined();
    });
    it('returns low-usage when temperature is less than 18', () => {
      for (let i = 0; i < 5; i++){
        thermostat.down();
      };
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
    it('returns medium-usage when temperture is less 25', () => {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
    it('returns high-usage when the temperture is greater than or equal to 25', () => {
      thermostat.savingModeSwitch();
      for (let i = 0; i < 10; i++){
        thermostat.up();
      };
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});
