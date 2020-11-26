(function() {
    "use strict";

    const circles = document.querySelectorAll(".circle");
    const infoBoxes = document.querySelectorAll(".boxes");
    // console.log(circles);

    // .1 animate the circles for 0 to number 2
    // gsap.to(circles[0], 1, { delay: 2, opacity: 1, ease: Power2.easeOut });
    // gsap.to(circles[1], 1, { delay: 2, opacity: 1, ease: Power2.easeOut });
    // gsap.to(circles[2], 2, { delay: 2, opacity: 1, ease: Power2.easeOut });


    // 3. define the two show and hide
    function showInfo(e) {
        // 5. console.log("showInfo Called")
        // 6. console.log(e.currentTarget.dataset.box);
        const boxNum = e.currentTarget.dataset.box;
        gsap.to(infoBoxes[boxNum], 1, { autoAlpha: 1 })

    }
    // 4. define the two show and hide
    function hideInfo(e) {
        // console.log("hideInfo Called")
        const boxNum = e.currentTarget.dataset.box;
        gsap.to(infoBoxes[boxNum], 1, { autoAlpha: 0 })
    }


    // 2. create a for loop forEach
    circles.forEach(circle => {
        // add event listners to each circle => mousedown and up
        circle.addEventListener("mousedown", showInfo);
        circle.addEventListener("mouseup", hideInfo);
    })

})();