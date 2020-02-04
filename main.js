/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function isItLong(string){
  if (string.length > 20){
    return "That's a long string!"
  }
}
function isItMedium(string){
  if (string.length >= 10 && string.length <= 20){
    return "That's a regular sized string!"
  }
}
function isItShort(string){
  if (string.length < 10){
    return "That's a small string!"
  } else{
    return "That's not a small string!"
  }
}
function howLongIsMyString(string){
  if (string.length > 20){
    return "That's a long string!"
  }else
  if (string.length >= 10 && string.length <= 20){
    return "That's a regular sized string!"
  }else
  if (string.length < 10){
    return "That's a small string!"
  }
}
function instructorHeight(name){
  if (name == 'Colin'){
    return 62
  }else
  if (name === 'Mesuara'){
    return 67
  }else{
    return "I don't know that instructor!"
  }
}



/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}