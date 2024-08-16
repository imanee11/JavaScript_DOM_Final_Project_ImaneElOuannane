let nextBtns3 = document.querySelectorAll(".next3")
let previousBtns3 = document.querySelectorAll(".previous3")
let containers3 = document.querySelectorAll(".carousel-container3")


let currentIndex3 = 0

const slideImage3 = (index , myBtn) => {
    let carouselBtnAttribute3 = myBtn.getAttribute("carouselBtn")

    containers3.forEach(container => {
        if (container.id == carouselBtnAttribute3) {

            let slides3 = container.querySelectorAll(".slide3")
            let camera3 = container.querySelector(".carousel3")
            let slideWidth3 = slides3[0].clientWidth
            let indicators3 = container.querySelectorAll('.indicator')


            if (index < 0) {
                index = slides3.length - 1
            } else if (index >= slides3.length) {
                index = 0
            }

            indicators3.forEach(indicator => {
                indicator.classList.remove('activeIndicator')
            });
            indicators3[index].classList.add("activeIndicator")


            camera3.style.transform = `translateX(-${slideWidth3 * index}px)`
            currentIndex3 = index
        }
    })
}

nextBtns3.forEach(next => {
    next.addEventListener("click", (event) => { slideImage3(currentIndex3 + 1, event.target) })
    setInterval(() => {
        next.click()
    }, 3000);
});


previousBtns3.forEach(previous => {
    previous.addEventListener("click", (event) => { slideImage3(currentIndex3 - 1, event.target) })
});


containers3.forEach(container => {
    if (container.getAttribute("autoslide")) {
        let nextBtn3 = container.querySelector(".next")

        setInterval(() => {
            nextBtn3.click()
        }, 3000);
    }
});


containers3.forEach(container => {
    let slides3 = container.querySelectorAll(".slide3")
    let indicatorsGrp3 = document.createElement("div")
    indicatorsGrp3.classList.add("indicators-grp")
    container.appendChild(indicatorsGrp3)

    slides3.forEach(slide => {
        let indicator3 = document.createElement("div")
        indicator3.classList.add("indicator")
        indicatorsGrp3.appendChild(indicator3)
    });
    indicatorsGrp3.querySelector(".indicator").classList.add('activeIndicator')
});