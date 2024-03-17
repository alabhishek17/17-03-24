
function showditails(){
    async function oppo(){
            let response=await fetch("https://openapi.programming-hero.com/api/phones?search=oppo");
            let result= await response.json();
            // console.log(result);
            return result;
        }
        // oppo();

        result.data.forEach(element => {
            console.log(element);
    
        });
      
    

}

// async function oppo(){
//     let response=await fetch("https://openapi.programming-hero.com/api/phones?search=oppo");
//     let result= await response.json();
//     console.log(result);
// }
// oppo();



document.getElementById("search").addEventListener("click",showditails());