console.log("welcome spotify");
let songIndex=0;
let audioElement = new Audio('songs/2.mp3');
let masterplay=document.getElementById('masterPlay');
// let manoj=document.getElementById('manoj');
let myProgressbar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songMaster=document.getElementById('songMaster');
let songItem=Array.from(document.getElementsByClassName('songItem'));   
// let songGif=Array.from(document.getElementsByClassName('gifClass'));
let songGif=document.getElementsByClassName('songGif');
   
let songs =[
    {songName:"Love you Me Like You To00", filePath:"songs/1.mp3", coverPath:"covers/1.webp"},
    {songName:"Love you Me Like  dcd You To", filePath:"songs/2.mp3", coverPath:"covers/2.webp"},
    {songName:"song by manoj", filePath:"songs/3.mp3", coverPath:"covers/3.webp"},
    {songName:"Love you Me Like You To", filePath:"songs/1.mp3", coverPath:"covers/1.webp"},
    {songName:"Love you Me Like You To", filePath:"songs/1.mp3", coverPath:"covers/1.webp"},
    {songName:"Love you Me Like You To", filePath:"songs/1.mp3", coverPath:"covers/1.webp"},
    {songName:"Love you Me Like You To", filePath:"songs/1.mp3", coverPath:"covers/1.webp"},
    {songName:"Love you Me Like You To", filePath:"songs/1.mp3", coverPath:"covers/1.webp"}
]


songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    // element.getElementsByClassName("timeStamp")[0].innerText=songs[i].audioElement.duration;
    // element.getElementById("gif")[0].innerText=songs[i].songName;
})
//------------------------------------------------------------------------------------------------------------------------------
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;                       // to make opacity 1
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;                            // to make opacity 1
    }
})
//-----------------------------------------------------------------------------------------------------------------------------------
/*     Listen to events  */ 
audioElement.addEventListener('timeupdate',()=>{

    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value=progress;
})

myProgressbar.addEventListener('change',()=>{

    audioElement.currentTime= myProgressbar.value * audioElement.duration/100;

})

//--------------------------------------------------------------------------------------------------------------------------------------

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    

})}

//---------------------------------------------------------------------------------------------------------------------------------------

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        songMaster.innerText=songs[songIndex].songName;
        audioElement.src=`songs/${songIndex+1}.mp3`;
        //audioElement.currentTimes=0;
        if(audioElement.paused||audioElement.currentTime<=0){
            audioElement.play();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
            gif.style.opacity=1;
            console.log(audioElement.currentTime);
            audioElement.currentTime=1;
            console.log(audioElement.currentTime);
        }
           if (audioElement.currentTime>0){
                audioElement.pause();
                e.target.classList.remove('fa-pause-circle');
                e.target.classList.add('fa-play-circle');
                masterplay.classList.remove('fa-pause-circle');
                masterplay.classList.add('fa-play-circle');
                gif.style.opacity=0;
            }
        

         
     
    })
})


//---------------------------------------------------------------------------------------------



document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    songMaster.innerText=songs[songIndex].songName;

    audioElement.currentTime=0;
   
    audioElement.play();
    document.getElementById('gif').style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
     
    

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=9;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
   songMaster.innerText=songs[songIndex].songName;

    audioElement.currentTime=0;
   // document.getElementById('gif').style.opacity=1;
    audioElement.play();
    // gif.style.opacity=1;
    document.getElementById('gif').style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
  

})


   
    