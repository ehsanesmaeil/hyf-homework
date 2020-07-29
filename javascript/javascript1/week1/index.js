
function agify(){
  var yearOfBirth = window.prompt("Please, enter your year of birth");
  var yearFuture = window.prompt("Which year in future?");
  var age = yearFuture - yearOfBirth;
  return "You will be " + age + " years old at 2050."
}

console.log(agify());

function dogAgify(){
  var dogYearOfBirth = window.prompt("Please, enter your dog's year of birth");
  var dogYearFuture = window.prompt("Which year in future?");
  var dogOrHuman = window.prompt("DO you like to calculate in dog year or human? (d or h) ")
      if (dogOrHuman !="d" || dogOrHuman !="h"  ){
          dogOrHuman = window.prompt("Please just enter d or h!) ")
      }
      if (dogOrHuman == "d"){
          return (dogYearFuture - dogYearOfBirth)*7;
      }else if (dogOrHuman == "h"){
          return dogYearFuture - dogYearOfBirth;
      }

  }
console.log(dogAgify())

function housePricing(){

  var width = window.prompt("What is the width in meter?");
  var depth = window.prompt("What is the depth in meter? ");
  var height = window.prompt("What is the hight in meter? ");
  var volumeInMeters = width*depth*height;
  var gardenSizeInM2 = window.prompt("What the size of garden in square meter?");
  var price = window.prompt("How much did you pay? ");
  var housePrice = volumeInMeters*2.5*1000 + gardenSizeInM2;

      if (price<= housePrice){
          return "It's a fair price!"
      } else{
          return "It's not logical to buy it!"
      }
  }

console.log(housePricing())



function startUpName() {
var firstWords = ["easy", "Try", "Awesome", "Bing", "SoSo", "mindy", "wow!"];
var secondWOrds = [ "US","StartUp","Face", "Medium","Done","Studio","Corporation"];

var startUpName = firstWords[Math.floor((Math.random() * firstWords.length) + 0)] + " " +secondWOrds[Math.floor((Math.random() * firstWords.length) + 0)];
return startUpName;

}

console.log(startUpName());
