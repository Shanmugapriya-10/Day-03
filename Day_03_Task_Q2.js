//2. Use the rest countries API URL ->https://restcountries.com/v3.1/all 
//and display all the country flags in the console.

//Step 01: Create a xml-http object
//It is used to interact with the server via API
var request = new XMLHttpRequest();
//Step 02: Open a request
//Which API and Which HTTP method.
request.open("GET","https://restcountries.com/v3.1/all")
//Step 03: Kikstart a request
request.send();
//step 04: 
//once the data successfully received from the server
//server status code is 200
//data coming from the server is of type string
//convert string to Object
request.onload = function() {
var res = JSON.parse(request.response);
console.log("response", res);
console.log("flags", res[0].flags);

var Flagsarray = [];
for (i=0; i<res.length; i++)
{
    Flagsarray.push(res[i].flags);
}
console.log("Flagsarray", Flagsarray);
}