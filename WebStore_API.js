// each and every broswer will provide 5 to 10mb of storage to store text
// // there are two types of storages
// // // 1) local storage
// // // 2) session storage

// local storage :-
//   syntax:- localstorage.setitems("key","value");   -----> to store data
//            localstorage.getitems("key");           -----> to fetch data

var name="soundarya"
var height="5.1"
local storage.setitems("username",name);
local storage.setitems("height",height);
let storedname=localstorage.getitems("username");
let storedheight=localstorage.getitems("height");
console.log(storedname);
console.log(storedheight);

// 2) sesion storage 
//    syntax:- sessionStorage.setItems()
//             sessionStorage.getItems()
//             sessionStorage.removeItems()
//             sessionStorage.clear()



var name="lokesh"
var height="5.8"
var age=21
sessionStorage.setItem("username",name);
sessionStorage.setItem("userheight",height)
sessionStorage.setItem("userage",age)
let username=sessionStorage.getItem("username");
let userheight=sessionStorage.getItem("height")
let userage= sessionStorage.getItem("userage")
sessionStorage.removeItem("userheight")
console.log(username);
console.log(age);
console.log(height);


// // One -line Memory Trick

// // Stringfy before storing

// Your original data object
const userSession = {
  id: 101,
  username: "coder_blue",
  isLoggedIn: true
};

// Convert to string
const stringifiedData = JSON.stringify(userSession);

// Store it (Example: LocalStorage)
localStorage.setItem("user_session", stringifiedData);


// // parse after retrriveving
// Retrieve the string from storage
const retrievedString = localStorage.getItem("user_session");

// Convert back to a JavaScript object
const userData = JSON.parse(retrievedString);

// Access properties normally
console.log(userData.username); // Output: coder_blue
