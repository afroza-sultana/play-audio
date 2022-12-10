for(let i = 0; i<3; i++){
    document.querySelectorAll(".my-btn")[i].addEventListener("click", function(){
        const text = this.innerHTML;
        //console.log(text)
        audioPlay(text);
        playAnimation(text);
    });
}

function audioPlay(text){
    switch(text){
        case "a": 
        var audio = new Audio('audio/a.mp3');
        audio.play();
        break;
        case "b": 
        var audio = new Audio('audio/b.mp3');
        audio.play();
        break;
        case "c": 
        var audio = new Audio('audio/c.mp3');
        audio.play();
        break;
    }
   }

   function playAnimation (text){
    let selectedButton = document.querySelector("." + text);
    selectedButton.classList.add("anim");

    setTimeout(function(){
        selectedButton.classList.remove("anim"); 
    } , 1000);
   }