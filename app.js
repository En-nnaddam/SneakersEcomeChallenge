const headerMenu = document.querySelector('.header__menu')
const headerNavigationClose = document.querySelector('.header__navigation__close')
const poster = document.querySelector(".product__poster")
const productInfoBuy = document.querySelector(".product__infos__buy")
const minus = productInfoBuy.querySelector('.minus')
const plus = productInfoBuy.querySelector('.plus')
const productImageField = document.querySelector(".product__images__field")
const images = productImageField.querySelectorAll('img')
const imageCloselyField = document.getElementById("image-closely-field")
const closelyPoster = imageCloselyField.querySelector(".product__poster > img.poster")
const closelyImages = imageCloselyField.querySelectorAll(".product__images__field > img")
var currentIndex = 0;

headerMenu.addEventListener('click', openMenu)
headerNavigationClose.addEventListener('click', closeMenu)
minus.addEventListener('click', minusQuantity)
plus.addEventListener('click', plusQuantity)
poster.addEventListener('click', watchImageClosely)

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        setIndex(index)
        removeActiveClassFromArray(images)
        setPoster(image, poster)
    })
})

closelyImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        setIndex(index)
        removeActiveClassFromArray(closelyImages)
        setPoster(image, closelyPoster)
    })
})

function minusQuantity() {
    const productQuantity = document.getElementById('product__quantity')
    quantity = parseInt(productQuantity.value, 10)

    if (quantity - 1 < 0) return

    productQuantity.value = quantity - 1
}

function plusQuantity() {
    const productQuantity = document.getElementById('product__quantity')
    quantity = parseInt(productQuantity.value, 10)

    productQuantity.value = quantity + 1
}

function openMenu() {
    const headerNavigation = document.querySelector('.header__navigation')

    headerNavigation.classList.add('active')
}

function closeMenu() {
    const headerNavigation = document.querySelector('.header__navigation')

    headerNavigation.classList.remove('active')
}

function setIndex(index) {
    currentIndex = index
}

function removeActiveClass(target) {
    target.classList.remove("active")
}

function removeActiveClassFromArray(elements) {
    elements.forEach(element => removeActiveClass(element))
}

function setPoster(image, poster) {
    image.classList.add('active')
    const extension = image.src.split('.')[1]
    let arr = image.src.split('-')
    arr = arr.slice(0, arr.length - 1)
    const source = `${arr.join('-')}.${extension}`

    poster.src = source
}

function watchImageClosely() {
    const imageCloselyField = document.getElementById('image-closely-field')

    const closeIcon = document.getElementById("image-closely-field__close")
    const previousIcon = document.getElementById("image-closely-field__previous")
    const nextIcon = document.getElementById("image-closely-field__next")

    closeIcon.addEventListener('click', closeImageClosely)
    previousIcon.addEventListener('click', previousImage)
    nextIcon.addEventListener('click', nextImage)

    imageCloselyField.style.display = "flex"
}

function closeImageClosely() {
    const imageCloselyField = document.getElementById('image-closely-field')
    imageCloselyField.style.display = "none"
}

function previousImage() {
    if (currentIndex - 1 >= 0)
        setIndex(currentIndex - 1)
    setPoster(closelyImages[currentIndex], closelyPoster)
}

function nextImage() {
    if (currentIndex + 1 < closelyImages.length)
        setIndex(currentIndex + 1)
    setPoster(closelyImages[currentIndex], closelyPoster)
}