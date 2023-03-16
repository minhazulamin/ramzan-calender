const images = [
  
 'assests/images/0.jpg',
 'assests/images/2.jpg',
 'assests/images/1.jpg',
 'assests/images/4.jpg',
 'assests/images/5.jpg',
 'assests/images/7.jpg',
 'assests/images/3.jpg',
 'assests/images/8.jpg',
 'assests/images/9.jpg',
 'assests/images/10.jpg'
  
]

let imgIndex = 0;
const imagess = document.getElementById('images');
setInterval( () =>{
  if(imgIndex === images.length){
    imgIndex = 0
  }
  const  imgUrl = images[imgIndex]
  imagess.setAttribute('src', imgUrl )
  imgIndex++;
},3000)

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