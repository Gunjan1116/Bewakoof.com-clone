
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
    //deleteURL="http://localhost:3000/manproduct";
    getProductsFunction(url);
})

let get_women_btn =document.querySelector("#get-women-btn");
get_women_btn.addEventListener("click",(event)=>{
    let url="http://localhost:3000/Womensproduct";
    getProductsFunction(url);
})


async function getProductsFunction(url,data_perpage=8,page_number=1){
    try {
        let get_all_data=await fetch(`${url}?_limit=${data_perpage}&_page=${page_number}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(get_all_data.ok){
            let total_data_count=get_all_data.headers.get("x-total-count");
            let total_pages=Math.ceil(total_data_count/data_perpage);
            //alert("all products are fetched successfully");
            let all_data=await get_all_data.json();
            renderDataFunction(all_data,url);
            renderPaginationButtons(total_pages,url);
        }
    } catch (error) {
        alert(error);
    }
}


function renderDataFunction(all_data,url){
    document.querySelector("#display-address-container").innerHTML=null;
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


    let all_edit_btns=document.querySelectorAll(".edit");
    for(let edit_btn of all_edit_btns){
        edit_btn.addEventListener("click",(event)=>{
            let edit_id=Number(event.path[1].children[2].innerText);
            let editURL=`${url}/${edit_id}`;
            for(let edit_data of all_data){
                if(edit_data.id==edit_id){
                    display_container.innerHTML=
                    `<div class="outer-box">
                    <div id="edit_title" contentEditable="true">${edit_data.title}</div>
                    <div id="edit_img" contentEditable="true">${edit_data.img}</div>
                    <div id="edit_des" contentEditable="true">${edit_data.description}</div>
                    <div id="edit_price" contentEditable="true">${edit_data.price}</div>
                    <button class="save">SAVE</button>
                    </div></div>`; 
                }
            }

            let save_btn=document.querySelector(".save");
            save_btn.addEventListener("click",(eve)=>{
                let edit_title=document.querySelector("#edit_title").innerText;
                let edit_img=document.querySelector("#edit_img").innerText;
                let edit_des=document.querySelector("#edit_des").innerText;
                let edit_price=document.querySelector("#edit_price").innerText;

                EditRequestTitle(url,edit_id,edit_title);
                EditRequestImage(url,edit_id,edit_img);
                EditRequestDescription(url,edit_id,edit_des);
                EditRequestPrice(url,edit_id,edit_price);
            })

        })
    }
}

async function EditRequestTitle(url,id,edit_title){
	try {
		
		let toggle_request = await fetch(`${url}/${id}`,{
            method : "PATCH",
            headers : {
				"Content-Type" : "application/json"
            },
			body : JSON.stringify({["title"]:edit_title})
        })
		if(toggle_request.ok){

		}
	} catch (error) {
		alert("You are not allowed to Toggle it.");	
	}
}


async function EditRequestImage(url,id,edit_img){
	try {
		
		let toggle_request = await fetch(`${url}/${id}`,{
            method : "PATCH",
            headers : {
				"Content-Type" : "application/json"
            },
			body : JSON.stringify({["img"]:edit_img})
        })
		if(toggle_request.ok){

		}
	} catch (error) {
		alert("You are not allowed to Toggle it.");	
	}
}


async function EditRequestDescription(url,id,edit_des){
	try {
		
		let toggle_request = await fetch(`${url}/${id}`,{
            method : "PATCH",
            headers : {
				"Content-Type" : "application/json"
            },
			body : JSON.stringify({["description"]:edit_des})
        })
		if(toggle_request.ok){

		}
	} catch (error) {
		alert("You are not allowed to Toggle it.");	
	}
}


async function EditRequestPrice(url,id,edit_price){
	try {
		
		let toggle_request = await fetch(`${url}/${id}`,{
            method : "PATCH",
            headers : {
				"Content-Type" : "application/json"
            },
			body : JSON.stringify({["price"]:edit_price})
        })
		if(toggle_request.ok){

		}
	} catch (error) {
		alert("You are not allowed to Toggle it.");	
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



//Pagination part
let paginationWrapper=document.querySelector("#pagination-wrapper");
function renderPaginationButtons(total_pages,url){
    console.log(total_pages);
    paginationWrapper.innerHTML = `
      <div className="pagination-btn-list">
      ${CreatePagButton(total_pages).join(" ")}
      </div>
    `;

    //handle clicks of pagination buttons
    let paginationButtons=document.querySelectorAll(".pagination-btn");
    for(let paginationBtn of paginationButtons){
        paginationBtn.addEventListener("click",(event)=>{
            let page_number=event.target.dataset.id;
            getProductsFunction(url,data_perpage=8,page_number);
            getAddressFunction(url,data_perpage=4,page_number);
        })
    }
    

}

function CreatePagButton(total_page){
    let array=[];
    for(let page=1;page<=total_page;page++){
        array.push(getAsBtn(page,page))
    }
    return array;
}

function getAsBtn(text,dataId){
    return`<button class="pagination-btn" ${dataId ? `data-id=${dataId}`:''}">${text}</button>`;
}





//the whole fetch,render and delete parts of address data
let get_address_btn =document.querySelector("#get-address-btn");
get_address_btn.addEventListener("click",(event)=>{
    let url="http://localhost:3000/userAddressDetails";
    getAddressFunction(url);
})


async function getAddressFunction(url,data_perpage=4,page_number=1){
    try {
        let get_all_data=await fetch(`${url}?_limit=${data_perpage}&_page=${page_number}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(get_all_data.ok){
            let total_data_count=get_all_data.headers.get("x-total-count");
            let total_pages=Math.ceil(total_data_count/data_perpage);
            //alert("all products are fetched successfully");
            let all_data=await get_all_data.json();
          
            renderAddressDataFunction(all_data,url);
            renderPaginationButtons(total_pages,url);
        }
    } catch (error) {
        alert(error);
    }
}



function renderAddressDataFunction(all_data,url){
    document.querySelector("#display-container").innerHTML=null;
    let display_container=document.querySelector("#display-address-container");
    display_container.innerHTML=null;
    let newData=all_data.map((item)=>{
        return`<div class="address-box">
        <p class="ad-line">${item.id}</p>
        <p class="ad-line">Country:${item.country}</p>
        <p class="ad-line">FullName:${item.firstname}</p>
        <p class="ad-line">MobileNumber:${item.mobileNo}</p>
        <p class="ad-line">PinCode:${item.pinCode}</p>
        <p class="ad-line">City:${item.city}</p>
        <p class="ad-line">State:${item.state}</p>
        <p class="ad-line">FlatNumber:${item.flatNo}</p>
        <p class="ad-line">Area:${item.area}</p>
        <p class="ad-line">LandMark:${item.landmark}</p>
        <button class="delete box-btn">DELETE</button>
                </div>`;
    })
    display_container.innerHTML=newData.join("");

    //Delete a product part1
    let all_delete_btns=document.querySelectorAll(".delete");
    for(let delete_btn of all_delete_btns){
        delete_btn.addEventListener("click",(event)=>{
            let delete_id=Number(event.path[1].children[0].innerText);
            console.log(delete_id);
            deleteProductFunction(delete_id,url);
        })
    }

}
