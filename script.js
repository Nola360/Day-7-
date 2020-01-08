// WINDOW METHODS / OBJECTS / PROPERTIES

// console.log(123);

// // ALERT - displays alert box in DOM
// window.alert('Hello World');

// // PROMPT - displays input box on window (DOM)
// const input = prompt();
// alert(input);

// //CONFIRM - when deleting something 
// if (confirm('Are you sure')) {
//   console.log('Yes');
// } else {
//   console.log('No')
// }

//PROPERTIES 

let val;


//Outer Height & width
val = window.outerHeight;
console.log(val);
val = window.outerWidth;
console.log(val);

//SCROLL POINTS - where you are when scrolling

val = window.scrollY;
console.log(val);
val = window.scrollX;
console.log(val);


//LOCATION OBJECT - 
val = window.location;
console.log(val);
val = window.location.hostname;
console.log(val);
val = window.location.href;
console.log(val);
val = window.location.port;
console.log(val);
val = window.location.search;
console.log(val);


// Redirect
// window.location.href = 'http://google.com';

// Reload
// window.location.reload();
// console.log(val);

//HISTORY OBJECT

// window.history.go();
val = window.history.length;
console.log(val);

//NAVIGATOR OBJECT - BROWSER BASED

val = window.navigator;
console.log(val);

val = window.navigator.geolocation;
console.log(val);

val = window.navigator.vendor;
console.log(val);

val = window.navigator.productSub;
console.log(val);