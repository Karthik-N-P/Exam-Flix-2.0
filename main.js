var v=document.querySelector('.videos')
var n=document.querySelector('.notes')
var vs=document.querySelector('.video-selection')
var ns=document.querySelector('.notes-selection')
var l=document.querySelector('.labs')
var ls=document.querySelector('.lab-selection')


function notes() {
    n.style.visibility="visible";
    v.style.visibility="hidden";
    ns.style.visibility="visible";
    vs.style.visibility="hidden";
    l.style.visibility="hidden";
    ls.style.visibility="hidden";
}
function videos() {
    v.style.visibility="visible";
    n.style.visibility="hidden";
    vs.style.visibility="visible";
    ns.style.visibility="hidden";
    l.style.visibility="hidden";
    ls.style.visibility="hidden";
  
}
function lb() {
    l.style.visibility="visible";
    ls.style.visibility="visible";
    v.style.visibility="hidden";
    n.style.visibility="hidden";
    vs.style.visibility="hidden";
    ns.style.visibility="hidden";

    
}
function skill(){
    alert("Skills will be added soon")
}





//generate random quote on page load
const text=document.getElementById("quote");
const author=document.getElementById("author");

const getNewQuote = async () =>  //async function to fetch data from API
{
 
    var url="https://type.fit/api/quotes";        //api url for quotes

    
    const response=await fetch(url); // fetch the data from api url and store it in response variable & await function can only be used inside async function
    console.log(typeof response);
    
    const allQuotes = await response.json(); //convert response to json and store it in quotes array

    
    const i = Math.floor(Math.random()*allQuotes.length);

    
    const quote=allQuotes[i].text;

    
    const auth=allQuotes[i].author;

    //function to dynamically display the quote and the author
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;

    
}
//call the function to generate random quote on page load
getNewQuote();

//code to move eyes of character with mouse movement
$(".move-area").mousemove(function(event) {
    var eye = $(".eye");
    console.log('eye', eye)
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });

  //animate function to add class intro to the class video 

  let video = document.querySelector(".navbar")
function animat(){
   
    if(video.className=="navbar"){
        video.className= "intro"
    }
    else if(video.className=="intro"){
        video.className="navbar"
    }
    else{
        video.className="intro"
    }

   

}

  
