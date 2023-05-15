 const memes = () =>{
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((data) => data.json())
    .then((data_val) =>{
        const u_data = data_val.url;
        document.getElementById('img').src = u_data;

    })
 }
 memes()

 function share() {
    if(navigator.share !== undefined){
        navigator.share({
            title: "Memes Generator",
            text: "Memes Generator",
            url: "u_data",
        })
        .then(() => console.log("SUCCESS"))
        .catch((error) => console.log('ERROR',error))
    }
 }
 const nextFun = () => {
    memes();
 }