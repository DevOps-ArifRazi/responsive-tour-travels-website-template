let listVideo = document.querySelectorAll(".video");
let mainVideo = document.querySelector(".main-video video");
let title = document.querySelector(".main-video .title");

listVideo.forEach(videoo =>{
    videoo.onclick =() =>{
        listVideo.forEach(video => video.classList.remove("active"));
        videoo.classList.add("active");
        if(videoo.classList.contains("active")){
            let src = videoo.children[0].getAttribute("src");
            mainVideo.src = src;
            let text = videoo.children[1].innerHTML;
            title.innerHTML = text;
        }
    }

});