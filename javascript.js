
let searchBtn= document.getElementById("search");
let mainbtn=document.getElementById("main-one");
let mainbtn2=document.getElementById("main-two");
let searchVal=document.getElementById("searchVal");

// function Searchditails(){

//     function creatphoneCard(result){
//    //card creating
//    let cardDetail="";
//    let card=document.createElement("div");
//    card.classList.add("card");
//    card.innerHTML=`
     
//    cardDetail+=<div>
//      <img src"${element.imge}" alt"iphone"/>
//      <h3>${element.phone_name}</h3>

//    </div>

//    `
//     }
//     creatphoneCard();
//     let val="samsung"

//     //feach api 1st-step
//     async function oppo(){
//             let response=await fetch(`https://openapi.programming-hero.com/api/phones?search=${val}`);
//             let result= await response.json();
//             // console.log(result);

//             result.data.forEach(element => {
//                 // console.log(element);
                 
//                 async function data1(){
//                     let response=await fetch(`https://openapi.programming-hero.com/api/phones?search=${element.slug}`);
//                     let result1=await response.json();
//                     console.log(result);
//                     let card=creatphoneCard(result1);
//                 }
//                 data1();
//             });
            
//         }
//         oppo();

        
      
// }

async function Searchditails(){
     
    mainbtn.innerHTML = "";  //after clicke the search disply will empty insitaly
    // to get api
    
    let response=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchVal.value}`)
    let result= await response.json();
    //   console.log(result);
    //use the api data with foreach loop
    let addData = "";
    result.data.forEach(element => {
        // console.log(element);
        // div created
      addData += ` <div class="jsCard> 
      <img src="${element.image}" alt"phone" />
      <h3>${element.phone_name}</h3>
      <p>There are many variations of passages of available, but the majority have suffered</p>
      <button>show more</button>
      </div>`
    });
    mainbtn2.innerHTML=addData;
}



searchBtn.addEventListener("click",Searchditails);