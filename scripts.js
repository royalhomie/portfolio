// ===ANIMATED TEXT==========
const typed = new Typed(".typing", {
    strings: ["Frontend Developer", "Backend Developer", "Graphic Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const write = new Typed(".Animate", {
    strings: ["Frontend Developer", "Backend Developer", "Graphic Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// ===== TAWK====

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/66d62abc50c10f7a00a33683/1i6q9e34r';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

// ==== SCRIPTS FOR THANK YOU REVIEW

document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();
        feedbackForm.reset();
        thankYouMessage.classList.remove('hidden'); 
        setTimeout(() => {
            thankYouMessage.classList.add('hidden');
        }, 5000); 
    });
});


//=====TO PREVENT TEXT COPYING============


    // document.addEventListener('contextmenu', function(e) {
    //     e.preventDefault();
    // });

    // ======SCRIPTS FOR PROJECT IMAGE EFFECTS

    document.addEventListener('DOMContentLoaded', () => {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        const imageNameDiv = document.getElementById('image-name');
    
        portfolioItems.forEach(item => {
            const img = item.querySelector('img');
            
            item.addEventListener('mouseover', () => {
                const imgName = img.getAttribute('alt');
                if (imgName) {
                    imageNameDiv.textContent = imgName;
                    imageNameDiv.style.display = 'block';
                    const rect = img.getBoundingClientRect();
                    imageNameDiv.style.top = `${rect.bottom + window.scrollY}px`;
                    imageNameDiv.style.left = `${rect.left + window.scrollX}px`;
                }
            });
    
            item.addEventListener('mouseout', () => {
                imageNameDiv.style.display = 'none';
            });
        });
    });

    // QUOTE SCRIPTS

    document.addEventListener("DOMContentLoaded", function () {
      const quotes = [
        "Code is like humor. When you have to explain it, it’s bad. – Cory House",
        "First, solve the problem. Then, write the code. – John Johnson",
        "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
        "In order to be irreplaceable, one must always be different. – Coco Chanel",
        "Java is to JavaScript what car is to Carpet. – Chris Heilmann",
        "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. – Dan Salomon",
        "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. – Antoine de Saint-Exupery",
        "Before software can be reusable it first has to be usable. – Ralph Johnson",
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Learning never exhausts the mind. – Leonardo da Vinci",
      ];

      const quoteElement = document.getElementById("daily-quote");
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteElement.textContent = quotes[randomIndex];
    });
