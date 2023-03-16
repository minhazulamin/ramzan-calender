const quistionAns = [
  'Some quistion ans:',
  'what is ramdan?',
  'Do you remember how we used to look up the list of holidays in the calendar or school diary, the first thing when the school reopens after the summer break? The thrill of counting the number of holidays and looking at whether the holidays fall on weekdays was the greatest pastime. We may not have celebrated all the festivals of India listed in the calendar, but this essay on Ramadan for kids will be beneficial to know how it is celebrated.',

  'History of Ramadan?',

  'This essay on Ramadan in English will help kids to know more about Ramadan. Ramadan is mainly celebrated by Muslims all over the world between the months of April and May. According to the Islamic Calendar, Ramadan is the ninth month, which is considered to be holy.',

  'Importance of Ramadan?',

  'Ramadan is a special time of the year for Muslims, which is allocated for praying and forgiving. The true essence of Ramadan lies in the fact that people pray for forgiveness of all their past sins by practising self-control through fasting and purifying themselves by doing good deeds. ',

  'When is Ramadan?',
  'Ramadan is the ninth month of the Islamic calendar, and it usually falls between march and april. This year, Ramadan is observed between 23 march 2023 and 21 april 2023.'
]
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

let textIndex = 0;
const texts = document.getElementById('text');
setInterval( () =>{
  if(textIndex === quistionAns.length){
    textIndex = 0
  }
  const  text = quistionAns[textIndex]
  console.log(text)
  texts.innerHTML = text;
  textIndex++;
},2000)

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