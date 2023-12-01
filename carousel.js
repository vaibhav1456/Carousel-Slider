let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

function moveToNext() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}

function moveToPrev() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
}

function startAutoPlay() {
    let intervalId = setInterval(function() {
        moveToNext();
    }, 2000); 
}

next.addEventListener('click', function(){
    moveToNext();
});

prev.addEventListener('click', function(){
    moveToPrev();
});

startAutoPlay();
