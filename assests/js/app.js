const displayTiem = () =>{
    const date = new Date();
    let hour = date.getHours();
    const miniute = date.getMinutes();
    const second = date.getSeconds();
    const sesson = document.getElementById('sesson');
  
     if(hour>=12){
      sesson.innerHTML='PM' ;
     }else{
      sesson.innerHTML='AM' ;
     }
     if(hour>12){
      hour = hour-12;
  
     }
  
    document.getElementById('hours').innerHTML= hour;
    document.getElementById('minute').innerHTML= miniute;
    document.getElementById('seconds').innerHTML= second;
    
  
  
  }
  setInterval(displayTiem,10)
  
  const countDownDate = new Date("march 23, 2023 0:0:0").getTime();

  const x = setInterval(function() {
  
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);