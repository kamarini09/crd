"use strict";



// const endpoint = "https://petlatkea.dk/2021/hogwarts/students.json";


window.addEventListener("DOMContentLoaded", start);

let  allMembers = [];
let globalObject ={filterBy: "*"};

const Member = {
    league: "",
    name: "",
    number: "",
    image: "",
    isSkater: null,
    isLeader: null
};
function start() {
  console.log("ready");
  triggerButtons();
  loadJSON();
}

//--------------------MODEL--------------------------
// function loadJSON() {
//   fetch(endpoint)
//     .then((response) => response.json())
//     .then((jsonData) => {
//       // when loaded, prepare objects
//       prepareObjects(jsonData);
//     });
// }


 //--------------------------------VIEW--------------------------------
 
 function buildList() {
  const currentList = filterList(allMembers);
  displayList(currentList);
  

}
 function displayList(members) {
  
//   // clear the list
 document.querySelector("#member ").innerHTML = "";

   members.forEach(displayMember);
// // build a new list
  
}

function displayMember(member) {
  // create clone
  const clone = document.querySelector("template#member").content.cloneNode(true);

  // set clone data
  // clone.querySelector("#image").src = student.image;
  console.log(member.name)
  console.log(member.number)

  clone.querySelector("[data-field=name]").textContent = member.name;
  
  clone.querySelector("[data-field=number]").textContent = member.number;

 
   
 

  
  // if(member.league === "team-a"){
  //   clone.querySelector("#single-member").classList.add("team-a");

  // }else if(member.house === "team-b"){
  //   clone.querySelector("#single-member").classList.add("team-b");
  // }else if(member.house === "junior"){
  //   clone.querySelector("#single-member").classList.add("junior");

  // }else{
  //   clone.querySelector("#single-member").classList.add("official");
  // }

  
  
  document.querySelector(".team-a span").textContent = allMembers.filter(member => member.league==="team-a").length;
  document.querySelector(".team-b span").textContent = allMembers.filter(member => member.league==="team-b").length;
  document.querySelector(".junior span").textContent = allMembers.filter(member => member.league==="junior").length;
  document.querySelector(".official span").textContent = allMembers.filter(member => member.league==="official").length;
 




  
  // append clone to list
  document.querySelector("#filter tbody").appendChild(clone);
  
}


//------------------------CONTROLER-----------------------------------

//-----------------------cleaning data--------------------------------

    








  
 
//--------------------triggerButtons--------------------------


function triggerButtons(){

  document.querySelectorAll(".filter").forEach((each) =>{each.addEventListener("click", selectFilter);}); 
  

}
//--------------------filtering--------------------------
function selectFilter(event){
  const filter = event.target.dataset.filter;
 //filterList(filter);
 setFilter(filter);
}

 function setFilter(filter){
    globalObject.filterBy = filter;
    buildList();
}
function filterList(filteredList){

  if (globalObject.filterBy !== "*") {
      filteredList = allMembers.filter(function whichAnimal(member){ //its a differnet way with closure
          if (member.league === globalObject.filterBy ){
              return true;
          }else{
              return false;
          }
      })
  }

  return filteredList;
 
}

 
  

  
async function loadJSON() {
  console.log("im in loadJson")

  const response = await fetch("members.json");
  const jsonData = await response.json();
  
  // when loaded, prepare data objects
  prepareObjects( jsonData );
  console.log("im in loadJson")
}

function prepareObjects( jsonData ) {
  allMembers = jsonData.map( preapareObject ); //it can be done with foEach but it needs a different syntax
  // displayList(allMembers);
   buildList();
}
function preapareObject( jsonObject ) {
  const member = Object.create(Member);
    member.league = jsonObject.league;
    member.name = jsonObject.name;
    member.number = jsonObject.number;
    member.isLeader = jsonObject.isLeader;
    member.isSkater = jsonObject.isSkater;
  return member;
}








