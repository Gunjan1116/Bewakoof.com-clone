
let Renderdiv = document.getElementById("cartdiv")
let bag = []





async function getdata() {
    let newdata = await fetch("http://localhost:3000/manproduct");
    let product = await newdata.json();

    return product
}

getdata().then((data) => {
    display(data)
})


function display(data) {
    let responsedata = data.map((item) => {

        return `
        <div class="parentcart">
 
    <img src="${item.img}" alt="">
  
  
    <h4><strong>${item.title}</strong></h4>
    <p>₹${item.price}</p>
     <p>${item.description}</p>
     <button id="cart">add to cart</button>
  
</div>
       
        `


    })
    Renderdiv.innerHTML = responsedata.join("")
}



// price wise sorting data satrt here
async function sortHTL() {

    try {

        let sortData = await getdata();
        sortData.sort((a, b) => {
            return b.price - a.price;
        })
        return sortData;
    } catch (error) {
        console.log("something wrong in APi");
    }
    // console.log(sortData)
}

sortHTL().then((data) =>
    bag = data
);


function handleSort() {
    let pricesortdata = document.getElementById("Size").value;

    if (pricesortdata == "LTH") {
        bag.sort((a, b) => a.price - b.price)


    } else if (pricesortdata == "HTL") {
        bag.sort((a, b) => b.price - a.price)

    } else if (pricesortdata == "Price") {
        location.reload();
    }
    display(bag)


}

// Price wise sorting data end here

async function getdata1() {
    let newdata = await fetch("http://localhost:3000/manproduct");
    let product = await newdata.json();

    return product
}



getdata1().then((data) => {
    bag = data
    
    let filterproduct = document.getElementById("Category")
    filterproduct.addEventListener("change",function(){
        let filtername = document.getElementById("Category").value

        let fdata = bag.filter((ele)=>{
           
            return ele.title === filtername
        })
        display(fdata)
    })
    

})










