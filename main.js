const navhamber = document.getElementById('navber')
function onToggleMenu(nav){
    nav.name = nav.name === 'menu' ? 'close' : 'menu'
    navhamber.classList.toggle('left-[0%]')
}
