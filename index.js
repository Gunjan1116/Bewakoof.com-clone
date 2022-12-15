var blink = document.getElementById('blink');
    setInterval(function () {
        blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
    }, 1000);



// ------------------------ slides show logic code template

// let slideIndex = 0;
// let timeoutId = null;
// const slides = document.getElementsByClassName("mySlides");
// const dots = document.getElementsByClassName("dot");

// showSlides();
// function currentSlide(index) {
//     slideIndex = index;
//     showSlides();
// }
// function plusSlides(step) {

//     if (step < 0) {
//         slideIndex -= 2;

//         if (slideIndex < 0) {
//             slideIndex = slides.length - 1;
//         }
//     }

//     showSlides();
// }
// function showSlides() {
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//         dots[i].classList.remove('active');
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].classList.add('active');
//     if (timeoutId) {
//         clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(showSlides, 3000); // Change image every 5 seconds
// }

// -----------------------------------------------------------------
let dumy3 = [
    { img: "https://images.bewakoof.com/uploads/grid/app/b2g1-1x1-common-1670505865.jpg" },
    { img: "https://images.bewakoof.com/uploads/grid/app/oof-sale-endstom-1x1-common-1671025899.gif" },
    { img: "https://images.bewakoof.com/uploads/grid/app/revised-buy3-banner-1670840080.jpg" },
    { img: "https://images.bewakoof.com/uploads/grid/app/winter-looks-common-1670589179.jpg" },

]

dumy3.forEach((elem) => {
    let div = document.createElement("div");
    div.setAttribute("class", "item");
    let img = document.createElement("img");
    img.setAttribute("src", elem.img);

    // let h3 = document.createElement("p")
    // h3.innerText = "Upto 30% Off + Free Fragrance"
    // h3.setAttribute("class", "pink")

    // let h1 = document.createElement("p")
    // h1.innerText = "Worth Rs.299 On All Fragrances"
    // h1.setAttribute("class", "grey")

    div.append(img);
    document.querySelector(".owl-carousel").append(div);
});




// ....------------------------...........................................................

let arr1=[
    {img:"https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-bestseller-1669138226.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/Thumbnail-New-Arrivals-Common-1668508339.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Common-1668508338.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/me-shirt-thumbnail-1668508337.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/image-1668598708.png"}
]


arr1.forEach((elem)=>{
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", elem.img);
    div.append(img);
    document.querySelector("#card").append(div);
})



let arr2=[
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tees-1668765004.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-e-1670938024.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-1-1670504700.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-d-1670923576.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1670504700.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-7-1670503951.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-fullsleevetees-1668773243.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-c-1670923575.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-4-1670504697.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-6-1670504698.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-5-1670504699.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-boyfriend-tees-1668773241.jpg"}
]


arr2.forEach((elem) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", elem.img);

    div.append(img);
    document.querySelector("#card2").append(div);
})


let arr3=[
    {img:"https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-monochrome-new-1670846089.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/sample-mid-size-1669722540.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/plus-size-common-1669022425.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-BF-women-1670846089.jpg"}
]

arr3.forEach((elem) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", elem.img);

    div.append(img);
    document.querySelector("#card3").append(div);
})


let arr4=[
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-MobileCovers-1668754848.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-Shoes-1668754848.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-Bags-1668754847.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-Books-1668754847.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-Sliders-1668754849.jpg"},
    {img:"https://images.bewakoof.com/uploads/grid/app/category-box-new-Caps-1668754848.jpg"},

]


arr4.forEach((elem)=>{
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", elem.img);

    div.append(img);
    document.querySelector("#card4").append(div);
})