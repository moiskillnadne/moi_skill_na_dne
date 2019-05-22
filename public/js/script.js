const cards = document.querySelectorAll('.card')

for (var i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', rotate);
    card.addEventListener('mouseout', stock);

}

function rotate(e){
    const cardItem = this.querySelector('.card-item');
    const y = e.offsetY;
    const x = e.offsetX;
    const halfHeight = cardItem.offsetHeight/2;
    const halfWidth = cardItem.offsetWidth/2;
    cardItem.style.transform = 'rotateX('+-(y - halfHeight)/5+'deg) rotateY('+(x - halfWidth)/5 +'deg)'
}

function stock(e) {
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotateX(0deg) rotateY(0deg)'
}
