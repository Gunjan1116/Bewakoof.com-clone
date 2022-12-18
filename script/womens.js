
let Renderdiv = document.getElementById("cartdiv")
let count=0;

let bag = []
let arr = JSON.parse(localStorage.getItem("cartData")) || []


async function getdata() {
    let newdata = await fetch("http://localhost:3000/Womensproduct");
    let product = await newdata.json();

    return product
}

getdata().then((data) => {
    display(data)
    bag = data;
})


function display(data) {
  count=0
    let responsedata = data.map((item) => {
   count++
  // console.log(item.id)
        return `
        <div class="parentcart">
       
  <figure><img src="${item.img}" alt=""></figure>
   
    <p id="fashiontrend"> FashionTrend</p>
    <h4><strong>${item.title}</strong></h4>
    <p><b>₹${item.price}</b></p>
     <p class="description">${item.description}</p>
     <button data-id=${item.id} class="cart"> <b>  Add to Cart  </b> </button>
  
</div>
       
        `
        
    })
     
  Renderdiv.innerHTML = responsedata.join("")
  document.getElementById("count").innerText = `(${count})`

  let btn = document.querySelectorAll(".cart");
  // console.log(btn)
  for(let elem of btn){
    elem.addEventListener("click",async ()=>{
      // console.log(elem.dataset.id)
      let id=elem.dataset.id;
      try {
        let res=await fetch(`http://localhost:3000/Womensproduct/${id}`,{
          method:"GET",
          headers:{
            "Content-Type": "application/json"
          }

        })
        let out = await res.json();
        arr.push(out)
       localStorage.setItem("cartData",JSON.stringify(arr))
       alert("Product added in cart section")
      } catch (error) {
     alert("something went wrong")   
      }
    })
  }



}

// Sort functionality Start here ************************************
async function sortHTL() {
 
  try {
   
   let sortData = await getdata(); 
   
   sortData.sort((a,b)=>{
    
    return b.price - a.price;
   })
  return  sortData;
  } catch (error) {
    console.log("something wrong in APi"); 
  }
  
  }
  
  sortHTL().then((data) =>
    bag = data
   );


   function handleSort(){
    
      let pricesortdata = document.getElementById("Size").value;
  
      if(pricesortdata=="LTH"){
       bag.sort((a,b)=>a.price-b.price)
  
       
      }else if(pricesortdata=="HTL"){
          bag.sort((a,b)=>b.price-a.price)  
      }else if(pricesortdata == "Price"){
        location.reload();
      }
      display(bag)
  }

  // Sort functionality End here ************************************


  async function getdata1() {
    let newdata = await fetch("http://localhost:3000/Womensproduct");
    let product = await newdata.json();
    return product
}

getdata1().then((data) => {
    bag = data
    let filterproduct = document.getElementById("Category")
    filterproduct.addEventListener("change",function(){
        let filtername =filterproduct.value
       if(filtername=="Category"){
        location.reload();
        return;
       }
        let fdata = bag.filter((ele)=>{
           
            return ele.title === filtername
        })
        display(fdata)
       
    })
    
    // ------------------------------- Search functionality -------------------------------//

// document.getElementById("search").addEventListener("input",()=>{
  
//   let searchdata = document.getElementById("search").value

//   let newData = bag.filter(function(elem){
//       return elem.title.toLowerCase().includes(searchdata.toLowerCase())
//   })
//  display(newData)
 
// })  
    
 })

// ------------------------------add to cart function----------------------//

