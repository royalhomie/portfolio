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