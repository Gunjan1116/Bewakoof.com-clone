
let Renderdiv = document.getElementById("cartdiv")

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
        //     console.log(item)
      
    })
  //   console.log(responsedata)
  Renderdiv.innerHTML = responsedata.join("")
  
}

