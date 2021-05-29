const form = document.querySelector('#search');
const d = document.querySelector('#box');
form.addEventListener('submit',async function(e){
    e.preventDefault();
    console.log('SEARCHING...')
    const que = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${que}`);
    console.log(res);
    printImg(res.data)
})

const printImg = (shows) => {
    for(let s of shows){
        if(s.show.image){
            const img = document.createElement('IMG');
            img.src = s.show.image.medium;
            d.append(img);
        }
    }
}