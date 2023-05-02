function lazyLoadImage(){
    let images = document.querySelectorAll('img[data-src]')

    images.forEach(function(img){
        if(img.getBoundingClientRect().top < window.innerHeight){
            img.src = img.getAttribute('data-src')
            img.removeAttribute('data-src')
        }
    })

    if(images.length === 0) document.removeEventListener('scroll', lazyLoadImage)
}

document.addEventListener('DOMContentLoaded', lazyLoadImage)

document.addEventListener('scroll', lazyLoadImage)