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
    // var value = "sid";
    // localStorage.setItem("name", "siddesh");
    // localStorage.setItem("name2", value);



// To Get The Data In Console->
    // var myData = localStorage.getItem("name2");
    // console.log(myData);



 //  To Remove An Item ->
    // localStorage.removeItem("name");
    // localStorage.removeItem("name2");



// To Clear LocalStorage ->

    // localStorage.clear();

// getItem;
// setItem;
// removeItem
// clear



// Array In LocalStorage->
    // var arr = [1, 2, 3, 4];

    // localStorage.setItem("myArr", arr);

    // var myData = localStorage.getItem("myArr");
    // console.log(myData);



     
var div = document.getElementById("div");
// Object In LocalStorage->

    var obj = {name:'siddesh'};

    localStorage.setItem("myObj", obj);

    var myData = localStorage.getItem("myObj");
    console.log(myData);

    div.append(myData);
