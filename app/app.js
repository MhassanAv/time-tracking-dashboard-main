// app 
/*let c;
let y;
function check(z,d){
if(d[z].timeframes.weekly.current!==1){
  c="s";
}else if(d[z].timeframes.weekly.previous!==1){
  y="s";
}}*/
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
      /*check(i,data);*/
      time.innerHTML=`<h1>${data[i].timeframes.daily.current}hr</h1><br> <!-- daily --> <p>Yasterday - ${data[i].timeframes.daily.previous}hr</p> <!-- daily --></div>`;
      i++;
    });
  }else if(lin.innerText==="Weekly"){
    let i=0;
    times.forEach((time)=>{
      /*check(i,data);*/
      time.innerHTML=`<h1>${data[i].timeframes.weekly.current}hr</h1><br> <!-- weekly --> <p>Last week - ${data[i].timeframes.weekly.previous}hr</p> <!-- weekly --></div>`;
      i++;
      console.log(i);

    }); 
  }else if(lin.innerText==="Monthly"){
    let i=0;
    times.forEach((time)=>{
      /*check(i,data);*/
      time.innerHTML=`<h1>${data[i].timeframes.monthly.current}hr</h1><br> <!-- monthly --> <p>Last month - ${data[i].timeframes.monthly.previous}hr</p> <!-- daily --></div>`;
      i++; 
    });
  }
  }catch(error){
    console.log(error);
  }
}
