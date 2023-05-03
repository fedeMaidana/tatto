const categories = document.querySelectorAll('.categories li')
const products = document.getElementsByClassName('product')

categories[0].style.backgroundColor = 'rgb(247 85 154)'

categories.forEach(category => {

    category.addEventListener('click', () => {

        categories.forEach(function(c){
            c.style.backgroundColor = ''
        })

        category.style.backgroundColor = 'rgb(247 85 154)'

        const categoryId = category.getAttribute('id')

        if(categoryId === 'all'){
            for (const product of products) {
                product.style.display = 'flex'
            }
        }else{
            for (const product of products) {
                if(product.classList.contains(categoryId)) {
                    product.style.display = 'flex'
                }else{
                    product.style.display = 'none'
                }
            }
        }
    })
})