function toggle() {
    var trailer = document.querySelector('.trailer');
    var video = document.querySelector('video');
    trailer.classList.toggle('active')
    video.currentTime = 0;
    video.pause();
}

function tog() {
    var trailer2 = document.querySelector('.trailer2');
    var video = document.querySelector('video');
    trailer2.classList.toggle('active')
    video.currentTime = 0;
    video.pause();
}