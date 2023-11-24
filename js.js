"use strict";

window.addEventListener("DOMContentLoaded", start);

let  allMembers = [];
let globalObject ={filterBy: "*"};

const Member = {
    league: "",
    name: "",
    number: "",
    picture_name: "",
    isLeader: null
};
function start() {
  console.log("ready");
  triggerButtons();
  get()
}

function triggerButtons(){

  document.querySelectorAll(".filter").forEach((each) =>{each.addEventListener("click", selectFilter);}); 
  

}
//--------------------filtering--------------------------
function selectFilter(event){
  const filter = event.target.dataset.filter;
  setFilter(filter);
}

 function setFilter(filter){
    globalObject.filterBy = filter;
    console.log(filter);
    buildList();
}
function filterList(filteredList){

  if (globalObject.filterBy !== "*") {
      filteredList = allMembers.filter(function whichMember(member){ //its a differnet way with closure
          if (member.league === globalObject.filterBy ){
              return true;
          }else{
              return false;
          }
      })
  }

  return filteredList;
 
}

function get(){
  fetch("https://cphrollerderby-d0de.restdb.io/rest/members", {
       method:"get",
       headers: {
        "Content-Type" : "application/json; charset-utf-8",
        "x-apikey": "656097d944427a88de396c6f",
        "cache-control" : "no-cache"
       }
   })
    .then(e => e.json())
    .then( prepareObjects);
}

function prepareObjects( jsonData ) {
  allMembers = jsonData.map( preapareObject ); 
  buildList();
}
function preapareObject( jsonObject ) {
  const member = Object.create(Member);
    member.league = jsonObject.league;
    member.name = jsonObject.name;
    member.number = jsonObject.number;
    member.isLeader = jsonObject.isLeader;
    member.picture_name = jsonObject.picture_name;
  return member;
}


function buildList() {
  const currentList = filterList(allMembers);
  displayList(currentList);
}


function displayList(members) {
  document.querySelector("#list").innerHTML = "";
  members.forEach(displayMember);  
}

function displayMember(member) {
  const clone = document.querySelector("template").content.cloneNode(true);

  clone.querySelector("#image").src = `pictures/${member.picture_name}.jpg`;
  console.log(member.picture_name)
  clone.querySelector("[data-field=name]").textContent = member.name;
  clone.querySelector("[data-field=number]").textContent = "#" + member.number;
  
  document.querySelector("#list").appendChild(clone);

}







