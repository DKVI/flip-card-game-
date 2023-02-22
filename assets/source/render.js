import imgs from "./imgs.js";
var sources = imgs();

var cards = document.querySelectorAll ('.back-side');

console.log (cards)


var isRepeat = (array, item) => {
    var condition = false;
    var count = 0;
    array.forEach(element => {
        if (item === element) {
            count++;
        }
        if (count === 2) {
            condition = true;
        }
    });
    return condition;
}

var randomArray = () => {
    let result = [];
    
        for (var i = 0; i < cards.length; i++) {
            let cur = Math.floor(Math.random() * 6);
            while (isRepeat (result, cur)) {
                cur = Math.floor(Math.random() * 6);
            }
            result.push (cur)
        }
    return result;
}


var render = () => {
    var array = randomArray();
    console.log (array)
    array.forEach ((item, index) => {
        cards[index].style.backgroundImage = `url("${sources[item].link}")`;
        console.log (cards[index])
    })
}


render();


var resetBtn = document.querySelectorAll ('button.reset');
resetBtn.forEach (item => {
    item.onclick = () => {
        location.reload();
    }
})