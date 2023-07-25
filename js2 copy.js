function toggleLanguage() {
    var engParagraph = document.getElementById("eng");
    var hindiParagraph = document.getElementById("hindi");
    var engParagraph2 = document.getElementById("eng2");
    var hindiParagraph2 = document.getElementById("hindi2");
    var engParagraph3 = document.getElementById("eng3");
    var hindiParagraph3 = document.getElementById("hindi3");
    var engParagraph4 = document.getElementById("eng3");
    var hindiParagraph4 = document.getElementById("hindi3");

  
    if (engParagraph.style.display === "none") {
      engParagraph.style.display = "block";
      hindiParagraph.style.display = "none";
      engParagraph2.style.display = "block";
      hindiParagraph2.style.display = "none";
      engParagraph3.style.display = "block";
      hindiParagraph3.style.display = "none";
      engParagraph4.style.display = "block";
      hindiParagraph4.style.display = "none";
      
    } else {
      engParagraph.style.display = "none";
      hindiParagraph.style.display = "block";
      engParagraph2.style.display = "none";
      hindiParagraph2.style.display = "block";
      engParagraph3.style.display = "none";
      hindiParagraph3.style.display = "block";
      engParagraph4.style.display = "none";
      hindiParagraph4.style.display = "block";
    }
  }
  
  let isSpeaking = false;
  let speech;
  let textvoice;
  
  function voice(a) {
   if(a===1)
   {
        engParagraph = document.getElementById("eng");
        hindiParagraph = document.getElementById("hindi");
    }
   else if(a===2)
   {
    engParagraph = document.getElementById("eng2");
    // hindiParagraph = document.getElementById("hindi2");
    
   }
   else if(a===3)
   {
    engParagraph = document.getElementById("eng3");
    // hindiParagraph = document.getElementById("hindi3");
    
   }
   else if(a===4)
   {
    engParagraph = document.getElementById("eng4");
    // hindiParagraph = document.getElementById("hindi4");
    
   }


    if(engParagraph.style.display!=="none")
    {
        if(a===1)
    {
        textvoice = document.getElementById("eng").innerText;
        
    }
    else if(a===2)
    {
        textvoice = document.getElementById("eng2").innerText;
        
    }
    else if(a===3)
    {
        textvoice = document.getElementById("eng3").innerText;
        
    }
    else if(a===4)
    {
        textvoice = document.getElementById("eng4").innerText;
        
    }
       
        if (!isSpeaking) {

            if ('speechSynthesis' in window) {
                speech = new SpeechSynthesisUtterance(textvoice);
                speech.lang = 'en';
                speech.rate = 1.1;
                speech.volume = 2;
    
                speech.onend = function() {
                    isSpeaking = false;
                };
    
                window.speechSynthesis.speak(speech);
                isSpeaking = true;
            } else {
                console.log('Speech synthesis is not supported.');
                isSpeaking = true;
                
    
            }
        }
        else {
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
                isSpeaking = false;
            }
        }

    }
    else
    {
        textvoice = document.getElementById("hindi").innerText;
        if (!isSpeaking) {

            if ('speechSynthesis' in window) {
                speech = new SpeechSynthesisUtterance(textvoice);
                speech.lang = 'hi';
                speech.rate = 1.1;
                speech.volume = 2;
        
                speech.onend = function() {
                    isSpeaking = false;
                };
        
                window.speechSynthesis.speak(speech);
                isSpeaking = true;
            } else {
                console.log('Speech synthesis is not supported.');
                isSpeaking = true;
                
        
            }
        }
        else {
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
                isSpeaking = false;
            }
        }
    }

   

}

// }
  

//   var toggleButton = document.createElement("button");
//   toggleButton.innerHTML = "Switch Language";
//   toggleButton.addEventListener("click", toggleLanguage);
  
//   var container = document.getElementsByClassName("container")[0];
//   container.appendChild(toggleButton);
  
    
    let text = document.getElementById('text');
    let a4 = document.getElementById('a4');
    let a3 = document.getElementById('a3');
  

    let leaf = document.getElementById('leaf');
    let hill1 = document.getElementById( 'hill1');
    let hill4 = document.getElementById( 'hill4');
    let hill5 = document.getElementById('hill5');
    let hill2 = document.getElementById('hill2');
    let hill3 = document.getElementById('hill3');
    let tree = document.getElementById('tree');
    let cloud = document.getElementById('cloud');
    

    
    let x2 = document.getElementById('x2');
    let x1 = document.getElementById('x1');
    let x3 = document.getElementById('x3');

    let xx3 = document.getElementById('xx3');
    let xx2 = document.getElementById('xx2');
    let xx1 = document.getElementById('xx1');

    let sec2 = document.getElementById('secpara');
    

    window.addEventListener('DOMContentLoaded', (event) => {
        const audio = document.getElementById('myAudio');
        audio.play();
      });
        window.addEventListener(
            'scroll', () => {
                let value = window.scrollY;


               
                sec2.style.marginTop = value * -0.6 + 'px' 

                x1.style.marginBottom = value * 1.5 + 'px' 
                   
                x2.style.marginBottom = value * 1.5 + 'px'
                
                x3.style.marginBottom = value * 1.5 + 'px'

                x1.style.left = value * 0.1 + 'px'    
                x2.style.right = value * 0.1 + 'px'
                
                x3.style.left = value * 0.1 + 'px'
                a1.style.marginTop= value* -0.8+'px'
                a2.style.marginTop= value* -1.6+'px'
                a3.style.marginTop= value* -1.3+'px'
                a4.style.marginTop= value* -1.0+'px'
                a1.style.transform= value* 0.6+'px'
                a2.style.transform= value* 1.0+'px'
                // a3.style.transform= value* 1.1+'px'
                // a4.style.transform= value* 1.1+'px'
                if(value<150)
                {
                    text.style.marginTop = value * 5.5 + 'px'
                }

                leaf.style.top   = value * 0.5 + 'px';
                leaf.style.left  = value * 0.9 + 'px';
                hill2.style.left = value * -4.05 + 'px';
                hill5.style.left = value * 3.05 + 'px';
                hill3.style.top = value * -0.06  + 'px';
                hill3.style.left = value * 3.05 + 'px';
                hill4.style.left = value * -1.05 + 'px';
                hill1.style.top = value * -0.5 + 'px';
                hill2.style.left = value * 1.05 + 'px';
                // hill3.style.top = value * -0.1 + 'px';
                tree.style.right = value * 0.2 + 'px';
                hill4.style.left = value * -1.05 + 'px';
                tree.style.right = value * 0.2 + 'px';
                //
                hill2.style.transform = value * -1.1 + 'px';
                hill5.style.transform= value * -1.05 + 'px';
                hill3.style.transform = value * -0.06  + 'px';

               

                 // x3.style.top=value* 12+'px';
                // x2.style.top=value* 12+'px';
                // x1.style.top=value* 2+'px';
                                xx3.style.marginBottom = value * - 1.5 + 'px'
                                xx2.style.marginBottom = value * -1.5 + 'px'
                                xx1.style.marginBottom = value * 1.5 + 'px'
                                // let box= document.getElementById('box');  
                                // box.style.marginBottom = value * 1.6 + 'px' 
                                // sec2.style.marginTop = value * -4.5 + 'px'    
                
            }



        );

//         // Get all the slide elements
// const slides = document.querySelectorAll('.slide');
// // Set the index of the currently displayed slide
// let currentSlide = 0;

// // Function to show the next slide
// function showNextSlide() {
//   // Hide the current slide
//   slides[currentSlide].style.transform = 'translateX(-100%)';
//   // Update the index for the next slide
//   currentSlide = (currentSlide + 1) % slides.length;
//   // Show the next slide
//   slides[currentSlide].style.transform = 'translateX(0)';
// }

// // Set an interval to automatically show the next slide every 3 seconds
// setInterval(showNextSlide, 3000);
