const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll", chechBoxes)

chechBoxes()

function chechBoxes(){
    const triggerBottom = ((window.innerHeight / 6) * 5)
    //console.log(window.innerHeight / 6) * 4

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}