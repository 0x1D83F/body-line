const processElement = document.getElementById('process');
const processButton = document.querySelector('.menu_link_video');
const processButtonBurger = document.querySelector('.menu_link_video_burger');




function handlerVideo(e){
    e.preventDefault();
    processElement.scrollIntoView({
        block: "start",
        behavior: "smooth"
    })
}



processButton.addEventListener('click', handlerVideo)
processButtonBurger.addEventListener('click', function(e){
    e.preventDefault();
    handlerVideo(e);
    setTimeout(() => burger(), 700 )
})