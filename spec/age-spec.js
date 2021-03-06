import { Age } from './../src/age.js';
import { diff } from './../src/age.js';
import { postDecimalDigits } from './../src/age.js';

describe('Age', function() {
  var todayDate;
  var todayYear;

  beforeEach(function() {
    todayDate = new Date();
    todayYear = todayDate.getFullYear();
  });

  it('will take an age in years and convert it into seconds.', function() {
    const inputBirthYear = 2017;
    let inputLifeExpectancy = 78.74;
    let newUser = new Age(inputBirthYear, todayYear, inputLifeExpectancy);
    let output = newUser.ageYearsToSeconds();

    expect(output).toEqual(31536000);
  });

  it('will take two dates and determine the difference, in seconds, between the two.', function() {
    const inputBirthYear = 1985;
    let inputLifeExpectancy = 78.74;
    let newUser = new Age(inputBirthYear, todayYear, inputLifeExpectancy);

    let output = newUser.ageYearsToSeconds();

    expect(output).toEqual(1040688000);
  });

  it('will return the age of a human in Mercury years.', function() {
    const inputBirthYear = 1985;
    let inputLifeExpectancy = 78.74;
    let newUser = new Age(inputBirthYear, todayYear, inputLifeExpectancy);

    let output = newUser.ageEarthToMercury();

    expect(output).toEqual(7.92);
  });

  it('will return the age of a human in Venus years.', function() {
    const inputBirthYear = 1985;
    let inputLifeExpectancy = 78.74;
    let newUser = new Age(inputBirthYear, todayYear, inputLifeExpectancy);

    let output = newUser.ageEarthToVenus();

    expect(output).toEqual(20.46);
  });

  it('will return the age of a human in Mars years.', function() {
    const inputBirthYear = 1985;
    let inputLifeExpectancy = 78.74;
    let newUser = new Age(inputBirthYear, todayYear, inputLifeExpectancy);

    let output = newUser.ageEarthToMars();

    expect(output).toEqual(62.04);
  });

  it('will return the age of a human in Jupiter years.', function() {
    const inputBirthYear = 1985;
    let inputLifeExpectancy = 78.74;
    let newUser = new Age(inputBirthYear, todayYear, inputLifeExpectancy);

    let output = newUser.ageEarthToJupiter();

    expect(output).toEqual(391.38);
  });

  it('will return the number of years a person has left to live on on Earth given an average life expectancy.', function() {
    const inputBirthYear = 1985;
    let inputLifeExpectancy = 78.74;
    let newUser = new Age(inputBirthYear, todayYear, inputLifeExpectancy);

    let output = newUser.getRemainingLife();

    expect(output).toEqual(45.74);
  });

  it('will return the number of years a person has left to live on each planet.', function() {
    const inputBirthYear = 1985;
    let inputLifeExpectancy = 78.74;
    let newUser = new Age(inputBirthYear, todayYear, inputLifeExpectancy);

    let outputMercury = newUser.remainingLifeToMercury();
    let outputVenus = newUser.remainingLifeToVenus();
    let outputMars = newUser.remainingLifeToMars();
    let outputJupiter = newUser.remainingLifeToJupiter();

    expect(outputMercury).toEqual(10.98);
    expect(outputVenus).toEqual(28.36);
    expect(outputMars).toEqual(85.99);
    expect(outputJupiter).toEqual(542.48);
  });

  it('will return the difference between a persons age and the life expectancy if a person has lived beyond their life expectancy', function() {
    const inputBirthYear = 1939;
    let inputLifeExpectancy = 78.74;
    let newUser = new Age(inputBirthYear, todayYear, inputLifeExpectancy);

    let outputMercury = newUser.remainingLifeToMercury();
    let outputVenus = newUser.remainingLifeToVenus();
    let outputMars = newUser.remainingLifeToMars();
    let outputJupiter = newUser.remainingLifeToJupiter();

    expect(outputMercury).toEqual( -0.06);
    expect(outputVenus).toEqual(-0.16);
    expect(outputMars).toEqual(-0.49);
    expect(outputJupiter).toEqual(-3.08);
  });
});
