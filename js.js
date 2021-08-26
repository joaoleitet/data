const data = new Date();
const img = document.querySelector('img')
const h1 = document.querySelector('h1')
console.log(img)


function hora() {

    const hora = data.getHours()
    const minuto = data.getMinutes()

    if(hora >= 1 && hora <= 4) {
        img.src = 'img/wallpaperflare.com_wallpaper(4).jpg'
        h1.innerHTML = 'Madrugada'

    }
    if (hora >= 5 && hora <= 12) {
        img.src = 'img/wallpaperflare.com_wallpaper.jpg'
        h1.innerHTML = 'Manhã'
    }
    if (hora >= 13 && hora <= 16) {
        img.src = 'img/wallpaperflare.com_wallpaper(1).jpg'
        h1.innerHTML = 'Tarde'
    }
    if (hora >= 17 && hora <= 24) {
        img.src = 'img/wallpaperflare.com_wallpaper(2).jpg'
        h1.innerHTML = 'Noite'
    }

}

hora()