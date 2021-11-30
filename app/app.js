async function getData() {
  let res = await fetch('/data.json')
  try {
      return await res.json()
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
      time.innerHTML=`<h1>${data[i].timeframes.daily.current}hr</h1><br> <!-- daily --> Yasterday - ${data[i].timeframes.daily.previous}hr <!-- daily --></div>`;
      i++;
      time.style.bottom="-5rem";
      time.style.bottom="none";
    });
  }else if(lin.innerText==="Weekly"){
    let i=0;
    times.forEach((time)=>{
      time.innerHTML=`<h1>${data[i].timeframes.weekly.current}hr</h1><br> <!-- weekly --> Last week - ${data[i].timeframes.weekly.previous}hr <!-- weekly --></div>`;
      i++;
      console.log(i);
      time.style.bottom="-5rem";
      time.style.bottom="none";
    }); 
  }else if(lin.innerText==="Monthly"){
    times.style.bottom="-5rem";
    let i=0;
    times.forEach((time)=>{
      time.innerHTML=`<h1>${data[i].timeframes.monthly.current}hr</h1><br> <!-- monthly --> Last month - ${data[i].timeframes.monthly.previous}hr <!-- daily --></div>`;
      i++; 
    });
  }
  }catch(error){
    console.log(error);
  }
}
