// function addName(){

//     var friend = document.getElementById("name").value;
//     var div = document.getElementById("div");
//     var p = document.createElement("p");
//     p.innerText = friend;

//     div.append(p);
//     document.getElementById("name").value = " "
// }


// localStorage ->


// To Store The Data->
var value = "sid";
localStorage.setItem("name", "siddesh");
localStorage.setItem("name2", value);



// To Get The Data In Console->
var myData = localStorage.getItem("name2");
 console.log(myData);