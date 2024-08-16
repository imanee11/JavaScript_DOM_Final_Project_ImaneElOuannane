let nextBtns2 = document.querySelectorAll(".next2")
let previousBtns2 = document.querySelectorAll(".previous2")
let containers2 = document.querySelectorAll(".carousel-container2")


let currentIndex2 = 0

const slideImage2 = (index , myBtn) => {
    let carouselBtnAttribute2 = myBtn.getAttribute("carouselBtn")

    containers2.forEach(container => {
        if (container.id == carouselBtnAttribute2) {

            let slides2 = container.querySelectorAll(".slide2")
            let camera2 = container.querySelector(".carousel2")
            let slideWidth2 = slides2[0].clientWidth
            let indicators2 = container.querySelectorAll('.indicator')


            if (index < 0) {
                index = slides2.length - 1
            } else if (index >= slides2.length) {
                index = 0
            }

            indicators2.forEach(indicator => {
                indicator.classList.remove('activeIndicator')
            });
            indicators2[index].classList.add("activeIndicator")


            camera2.style.transform = `translateX(-${slideWidth2 * index}px)`
            currentIndex2 = index
        }
    })
}

nextBtns2.forEach(next => {
    next.addEventListener("click", (event) => { slideImage2(currentIndex2 + 1, event.target) })
    setInterval(() => {
        next.click()
    }, 3000);
});


previousBtns2.forEach(previous => {
    previous.addEventListener("click", (event) => { slideImage2(currentIndex2 - 1, event.target) })
});


containers2.forEach(container => {
    if (container.getAttribute("autoslide")) {
        let nextBtn2 = container.querySelector(".next")

        setInterval(() => {
            nextBtn2.click()
        }, 3000);
    }
});


containers2.forEach(container => {
    let slides2 = container.querySelectorAll(".slide2")
    let indicatorsGrp2 = document.createElement("div")
    indicatorsGrp2.classList.add("indicators-grp")
    container.appendChild(indicatorsGrp2)

    slides2.forEach(slide => {
        let indicator2 = document.createElement("div")
        indicator2.classList.add("indicator")
        indicatorsGrp2.appendChild(indicator2)
    });
    indicatorsGrp2.querySelector(".indicator").classList.add('activeIndicator')
});