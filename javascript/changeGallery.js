const categories = document.querySelectorAll('.categories li')
const products = document.querySelectorAll('.gallery .product')

categories.forEach(category => {
    category.addEventListener('click', () => {
        const categoryId = category.getAttribute('id')

        if(categoryId === 'all'){
            products.forEach(product => {
                product.style.display = 'flex'
            })
        }else{
            products.forEach(product => {
                if(product.classList.contains(categoryId)) {
                    product.style.display = 'flex'
                }else{
                    product.style.display = 'none'
                }
            })
        }
    })
})