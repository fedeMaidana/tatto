fetch('json/images.json')
    .then(response => response.json())
    .then(data => {
        const loadMoreButton = document.querySelector('#load-more-images')
        const gallery = document.querySelector('.gallery')

        let counter = 0
        let maxHeight = 750

        function loadMoreImages() {
            for(let i = counter; i < counter + 8 && i < data.length; i++){
                const card = data[i]

                const image =  document.createElement('img')
                image.setAttribute('data-src', `./images/${card.image}`)
                image.alt = `${card.description}`

                const divCard = document.createElement('div')
                divCard.classList.add('product')
                divCard.classList.add('all')
                divCard.classList.add(`${card.categorie}`)

                divCard.appendChild(image)

                gallery.appendChild(divCard)

                gallery.style.maxHeight = `${maxHeight}px`
            }

            maxHeight += 750
            counter += 8

            if(counter >= data.length) loadMoreButton.style.display = 'none'

        }

        loadMoreImages()

        loadMoreButton.addEventListener('click', loadMoreImages)
});