var cards = document.querySelectorAll ('.card-container');
var cardsContent = document.querySelectorAll ('.back-side');
var resetBtn = document.querySelector ('button.reset')
var overlay = document.querySelector ('.overlay');

console.log (cardsContent)
var App = {
    handleEvent() {
        Array.from (cards).forEach ((card, index) => {
            card.onclick = () => {
                card.classList.add ('active');
                cardsContent[index].classList.add ('active');
                this.checkEvent ();
                setTimeout(() => {
                    this.checkResult();
                }, 500);
            }
        })
    },


    getParent (element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches (selector)) {
                return element.parentElement;
            }
            else {
                element = element.parentElement;
            }
        }
    },

    checkResult () {
        var element = document.querySelectorAll ('.card-container')
        console.log (element);
        if (element.length === 0) {
            overlay.classList.add ('active');
            resetBtn.style.display = "none";
        }
    }, 

    checkEvent () {
        var count = 0;
        cardsContent.forEach ((item, index) => {
            var list = document.querySelectorAll ('.back-side.active')
            if (list.length == 2) {
                if (list[0].style.backgroundImage === list[1].style.backgroundImage) {
                    setTimeout(() => {
                        list[0].parentElement.remove();
                        list[1].parentElement.remove();
                    }, 500);
                }
                else {
                    setTimeout(() => {
                        list[0].classList.remove ('active');
                        list[1].classList.remove ('active');
                        this.getParent (list[0], '.card-container').classList.remove ('active');
                        this.getParent (list[1], '.card-container').classList.remove ('active');
                    }, 500);
                }
            }
        })
    },

    start() {
        this.handleEvent ();
    }
}


App.start ();
