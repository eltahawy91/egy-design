const closeBtn = document.querySelector("#closeBtn")
const navbarSupportedContent = document.querySelector("#navbarSupportedContent")


closeBtn.addEventListener("click", () => {
    navbarSupportedContent.classList.remove("show")
})





/*-- Gallery Jquery Script --*/

$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");

});

/*-- Carousel Script --*/
var myCarousel = document.querySelector('#carouselExampleCaptions')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 20000,
    wrap: false
})

//go to top

let goTop = document.getElementById("go-to")

window.onscroll = function () {
    if (document.documentElement.scrollTop >= 250) {
        goTop.style.right = "20px"
    } else {
        goTop.style.right = "-46px"
    }
}
goTop.addEventListener("click", () => {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    )
})


