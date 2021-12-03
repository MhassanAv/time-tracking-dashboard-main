// app 
let c="";
let v="";
let y="";
function checkDay(z,d){
if(d[z].timeframes.daily.current !== 1){
  c="s";
}
if(d[z].timeframes.daily.previous !== 1){
  v="s";
}}
function checkWeek(z,d){
  if(d[z].timeframes.weekly.current !== 1){
    c="s";
  }
  if(d[z].timeframes.weekly.previous !== 1){
    v="s";
  }}
  function checkMonth(z,d){
    if(d[z].timeframes.monthly.current !== 1){
      c="s";
    }
    if(d[z].timeframes.monthly.previous !== 1){
      v="s";
    }}
async function getData() {
  let res = await fetch('data.json');
  try {
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}
async function p(id) {
  let data = await getData();
  try{
  let lin = document.body.querySelector(id);
  let links = document.querySelectorAll('li');
  let times = document.querySelectorAll("#time");
  console.log(data);
  if(lin.classList.contains("active")){
    return;
  }else{
    for(let link of links){
      link.classList.remove("active");
    }
    lin.classList.toggle("active");
  }
  if(lin.innerText==="Daily"){
    let i=0;
    times.forEach((time)=>{
      checkDay(i,data);
      time.innerHTML=`<h1>${data[i].timeframes.daily.current}hr${c}</h1><br> <!-- daily --> <p>Yasterday - ${data[i].timeframes.daily.previous}hr${v}</p> <!-- daily --></div>`;
      i++;
      c="";
      v="";
    });
  }else if(lin.innerText==="Weekly"){
    let i=0;
    y="weekly";
    times.forEach((time)=>{
      checkWeek(i,data);
      time.innerHTML=`<h1>${data[i].timeframes.weekly.current}hr${c}</h1><br> <!-- weekly --> <p>Last week - ${data[i].timeframes.weekly.previous}hr${v}</p> <!-- weekly --></div>`;
      i++;
      console.log(i);
      c="";
      v="";
    }); 
  }else if(lin.innerText==="Monthly"){
    let i=0;
    times.forEach((time)=>{
      checkMonth(i,data);
      time.innerHTML=`<h1>${data[i].timeframes.monthly.current}hr${c}</h1><br> <!-- monthly --> <p>Last month - ${data[i].timeframes.monthly.previous}hr${v}</p> <!-- daily --></div>`;
      i++;
      c="";
      v="";
    });
  }
  }catch(error){
    console.log(error);
  }
}
