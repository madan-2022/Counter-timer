const second=1000;
const minute=60*second;
const hour=60*minute;
const day=24*hour;

const dday=document.querySelector(".day");
const dhour=document.querySelector(".hour");
const dminute=document.querySelector(".minute");
const dsecond=document.querySelector(".second");

const countertimer=()=>{
    setInterval(()=>{
        const today=new Date().getTime();
    const targetdate=new Date("06/11/2023").getTime();
    const diff=targetdate-today;
    const currday=Math.floor(diff/day);
    const currhour=Math.floor((diff%day)/hour);
    const currmin=Math.floor(((diff%day)%hour)/minute);
    const currsec=Math.floor((((diff%day)%minute)%minute)/second);
    
    dday.innerText=currday+"Day";
    dhour.innerText=currhour+"Hour";
    dminute.innerText=currmin+"Minute";
    dsecond.innerText=currsec+"Second";
    
    
    
    },1000)

}
countertimer();
