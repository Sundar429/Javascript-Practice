//text file

const buttonText=document.querySelector("#btn-txt");

const outputText=document.querySelector("#txt-output")

buttonText.addEventListener("click",getText);

async function getText(){
    const response = await fetch("data.txt");
    const textData= await response.text();
    outputText.innerHTML=textData;
   
}


//Json File
const buttonJson=document.querySelector("#btn-json");

const outputJson=document.querySelector("#json-output");

buttonJson.addEventListener("click",getJson);
async function getJson(){
   const response= await fetch("FreeTestData.json")
   const filejsonData= await response.json()
  

   outputJson.innerHTML=filejsonData;
}

//Api

const buttonApi=document.querySelector("#btn-api");

const outputApi=document.querySelector("#api-output");
buttonApi.addEventListener("click",getApi);

async function getApi(){
    const response= await fetch("https://jsonplaceholder.typicode.com/posts");

    const jsonData= await response.json();
    console.log(jsonData);

    let output=""

    jsonData.forEach((post) => {

        output+=`<div class='post'>
        <h4>${post.title}</h4>
        <p> ${post.body}</p>
        </div>`;
        
    });
outputApi.innerHTML=output;

}