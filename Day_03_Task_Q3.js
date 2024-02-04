//3. Use the same restcountries API and print all countries names, regions, sub-region and populations.

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();

request.onload = function() {
var res = JSON.parse(request.response);

var Flagsarray = [];
for (i=0; i<res.length; i++)
{
    let obj = { 
        countriesnames: res[i].name.common,
        regions: res[i].region, 
        subregion: res[i].subregion,
        populations: res[i].population

    } 
    Flagsarray.push(obj);
    obj = {};
}
console.log("Flagsarray", Flagsarray);
}