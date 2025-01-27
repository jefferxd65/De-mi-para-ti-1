const nou = document.querySelector('#nou');

nou.addEventListener('mouseover', function (){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nou.style.setProperty('top',randomY+'%');
    nou.style.setProperty('left',randomX+'%')
    nou.style.setProperty('transform','translate(-${randomX}%,-${randomY}%)');
})