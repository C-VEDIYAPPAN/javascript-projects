let memeImg =document.querySelector("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme");

//API URl
let url = "https://meme-api.com/gimme/";
//array of subreddits of your choice

let subreddits = ["catmemes","wholesomemes","dogmemes","me_irl"];

//function to get a random meme
let getMeme = () => {
    //Choose a random subreddit from the subreddits array
    let randomSubreddit =
      subreddits[Math.floor(Math.random() * subreddits.length)];
    //Fetch data from the api
    fetch(url + randomSubreddit)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        let memeImg = new Image();
         //display meme image and title only after the image load
        memeImg.onload = () => {
           meme.src = data.url;
           title.innerHTML = data.title;
        };
        memeImg.src = data.url;
      });
};
//call the getMeme() on button click and on window load
getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme)