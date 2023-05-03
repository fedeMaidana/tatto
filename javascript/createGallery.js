fetch('json/images.json')
    .then(response => response.json())
    .then(data => {
        const gallery = document.querySelector('.gallery')

        data.forEach((card, index) => {

            const divCard = document.createElement('div')
            divCard.classList.add('product')
            divCard.classList.add('all')
            divCard.classList.add(`${card.categorie}`)

            const image =  document.createElement('img')
            image.setAttribute('data-src', `./images/${card.image}`)
            image.alt = `${card.description}`

            divCard.appendChild(image)

            gallery.appendChild(divCard)
        });
});