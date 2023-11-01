const arrow = document.getElementById('arrow')

window.onscroll = function() {
    if(window.scrollY < 800) arrow.style.display = 'none'
    else arrow.style.display = 'block'
};