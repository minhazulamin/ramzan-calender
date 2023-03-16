const quistionAns = [
  'Some quistion ans:',
  'what is ramdan?',
  'রমজান শব্দটি একটি আরবি শব্দ। যার অর্থ হল শুস্কতা। তবে অভ্যন্তরীণ ভাবে রমজানের অর্থ হয় আত্মত্যাগ বা নিজেকে সংযম করা।',

  'History of Ramadan?',

  'রমজান মাস হচ্ছে সেই মাস যে মাসে কুরআন নাজিল হয়েছিল; মানবজাতির জন্য কোরান একটি হেদায়েত এবং হেদায়েতের সুস্পষ্ট প্রমাণ এবং মানদণ্ড [সঠিক ও ভুলের]। তোমাদের মধ্যে যদি কেউ বেঁচে থাকে তবে এই মাসে রোজা রাখ এবং আর যে লোক অসুস্থ কিংবা মুসাফির অবস্থায় থাকবে সে অন্য দিনে গণনা পূরণ করবে।',

  'Importance of Ramadan?',

  'রমজান আধ্যাত্মিক প্রতিবিম্ব, স্ব-উন্নতি এবং তীব্র ভক্তি ও উপাসনার সময়। মুসলমানরা ইসলামের শিক্ষার অনুসরণে আরও বেশি প্রচেষ্টা চালানোর আশাবাদী। সিয়াম ( সাওম) ভোর শুরু হয় এবং সূর্যাস্তের শেষে শেষ হয়। এই সময়ে খাওয়া এবং পান করা থেকে বিরত থাকার পাশাপাশি, মুসলমানরা যৌন সম্পর্ক এবং পাপী কথাবার্তা এবং আচরণ থেকে বিরত থাকে। ',

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