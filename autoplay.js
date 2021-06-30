window.onload = () =>
{
    let videos = document.getElementsByClassName("video-autoplay");
    for (const video of videos) {
        const img = video.parentElement.getElementsByClassName("project-img")[0];
        const symbol = video.parentElement.getElementsByClassName("video-autoplay-symbol")[0];
        
        
        let func = () => 
        {
            let height;
            //Hide image and get it's height, and hide play-symbol
            if(img)
            {
                height = img.height;
                img.style.display = "none";
            }
            if(symbol)
            {
                symbol.style.display = "none";
            }
            
            //Show video
            video.style.display = "block";
            
            if(img)
            video.height = height;
            
            video.setAttribute("playsinline", "");
            video.setAttribute("muted", "");
            video.play();
        }
        video.parentElement.onmouseover = func;
        video.parentElement.ontouchmove = func;
        video.parentElement.onmouseout = () => 
        {
            if(img)
            {
                img.style.display = "block";
                video.style.display = "none";
            }
            if(symbol)
            {
                symbol.style.display = "inline";
            }
            video.pause();
        }
    }
}