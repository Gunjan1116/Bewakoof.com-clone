
//ADDING/POST NEW MEN PRODUCT DATA TO SERVER

let men_add_btn=document.querySelector("#add-men");
men_add_btn.addEventListener("submit",(event)=>{
    event.preventDefault();
    let obj={};
    let all_men_input_tags=document.querySelectorAll(".M");
    for(let i=0;i<all_men_input_tags.length;i++){
        obj[all_men_input_tags[i].id]=all_men_input_tags[i].value;
    } 
    addMenProductFunction(obj);
})
async function addMenProductFunction(obj){
    try {
        let add_request=await fetch("http://localhost:3000/manproduct",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        if(add_request.ok){
            alert("New Product is Added Successfully");
        }else{
            alert(`there is a ${add_request.status} error`);
        }
    } catch (error) {
        alert(error);
    }
}




//ADDING/POST NEW WOMEN PRODUCT DATA TO SERVER

let women_add_btn=document.querySelector("#add-women");
women_add_btn.addEventListener("submit",(event)=>{
    event.preventDefault();
    let obj={};
    let all_women_input_tags=document.querySelectorAll(".F");
    for(let i=0;i<all_women_input_tags.length;i++){
        obj[all_women_input_tags[i].id]=all_women_input_tags[i].value;
    } 
    addWomenProductFunction(obj);
})
async function addWomenProductFunction(obj){
    try {
        let add_request=await fetch("http://localhost:3000/Womensproduct",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        if(add_request.ok){
            alert("New Product is Added Successfully");
        }else{
            alert(`there is a ${add_request.status} error`);
        }
    } catch (error) {
        alert(error);
    }
}

let deleteURL="";

//FETCH/GET ALL PRODUCTS

let get_men_btn =document.querySelector("#get-men-btn");
get_men_btn.addEventListener("click",(event)=>{
    let url="http://localhost:3000/manproduct";
    deleteURL="http://localhost:3000/manproduct";
    getProductsFunction(url);
})

let get_women_btn =document.querySelector("#get-women-btn");
get_women_btn.addEventListener("click",(event)=>{
    let url="http://localhost:3000/Womensproduct";
    getProductsFunction(url);
})


async function getProductsFunction(url){
    try {
        let get_all_data=await fetch(url,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(get_all_data.ok){
            alert("all products are fetched successfully");
            let all_data=await get_all_data.json();
            renderDataFunction(all_data,url);
        }
    } catch (error) {
        alert(error);
    }
}


function renderDataFunction(all_data,url){
    let display_container=document.querySelector("#display-container");
    display_container.innerHTML=null;
    let newData=all_data.map((item)=>{
        return`<div class="product-box">
                    <img class="image" src=${item.img} alt="">
                    <div class="content">
                        <h4 class="title">${item.title}</h4>
                        <p class="description">${item.description.substring(0,30)}...</p>
                        <p class="pro-id">${item.id}</p>
                        <p class="price">₹${item.price}</p>
                        <button class="edit box-btn">EDIT</button>
                        <button class="delete box-btn">DELETE</button>
                    </div>
                </div>`;
    })
    display_container.innerHTML=newData.join("");

    //Delete a product part1
    let all_delete_btns=document.querySelectorAll(".delete");
    for(let delete_btn of all_delete_btns){
        delete_btn.addEventListener("click",(event)=>{
            let delete_id=Number(event.path[1].children[2].innerText);
            deleteProductFunction(delete_id,url);
        })
    }

}

//Delete a Product part2
async function deleteProductFunction(delete_id,url){
    try {
        let delete_request=await fetch(`${url}/${delete_id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(delete_request.ok){
            alert("product removed successfully");
        }else{
            alert(`there is a ${delete_request.status} error`);
        }
    } catch (error) {
        alert(error);
    }
}
