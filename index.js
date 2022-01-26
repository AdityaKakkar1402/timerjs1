const birthDay="14 Feb 2022";

 daysid=document.getElementById('days');
 hoursid=document.getElementById('hours');
 minid=document.getElementById('min');
 secid=document.getElementById('sec');



function countDown(){
    const birth= new Date(birthDay);
    const curDate= new Date();
    const sec=(birth-curDate)/1000;
    const days=Math.floor(sec/(3600*24));
    const hours=Math.floor(sec/3600)%24;
    const mins=Math.floor(sec/60)%60;
    const secs=Math.floor(sec)%60
    
    daysid.innerHTML=days;
    hoursid.innerHTML=hours;
    minid.innerHTML=mins;
    secid.innerHTML=secs;


    console.log(days,hours,mins,secs);
}

setInterval(countDown, 1000)