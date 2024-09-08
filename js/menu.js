const menuIcon = document.querySelector('.menu-icon');
if(menuIcon){
    const headerMenu = document.querySelector('.menu-list');
    menuIcon.addEventListener("click", function (e){
        console.log("Нажата кнопка")
        // document.body.classList.toggle('_lock');
        headerMenu.classList.toggle('_active');
        menuIcon.classList.toggle('_active');;
    });
}