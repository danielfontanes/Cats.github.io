const source = "https://thatcopy.pw/catapi/restId/"




for (let i = 1; i < 58 +1; i++) {
    const peticion = fetch(source+i)
    peticion.then(resp =>{
        resp.json().then(data => {
            gato = (data)
            var img = document.createElement("img");
            img.setAttribute('src', gato.webpurl);
            img.setAttribute('alt', 'cat image');
            img.setAttribute('class', 'cat');
            gallery = document.getElementById('gallery')
            gallery.append(img)
    
        })
        .catch(console.warn)
    })
    
}



