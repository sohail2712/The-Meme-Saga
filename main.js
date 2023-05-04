let button=document.querySelector('#gen')
let img=document.querySelector('.meme img')
let titles=document.querySelector('#load')
let authors=document.querySelector('.author')

const updateDetail = (url,title,author) => {
    img.setAttribute("src",url);
    titles.innerHTML=title;
    authors.innerHTML='Meme by : '+author;
}; 

const generateMeme = () =>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) =>  {
        updateDetail(data.url,data.title,data.author);

    });
};

button.addEventListener("click",generateMeme);

generateMeme();