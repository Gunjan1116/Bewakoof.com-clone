


async function forDisplay(){
    try {
        let res=await fetch("http://localhost:3000/manproduct");
        if(res.ok){
            let data=await res.json();
            console.log(data);
        }else{
            alert("there is some error");
        }
    } catch (error) {
        alert(error);
    }
}

forDisplay();


let men_add_product_btn=document.querySelector("#men-btn");
men_add_product_btn.addEventListener("submit",(event)=>{
    event.preventDefault();
    let obj={};
    let all_men_input_tags=document.querySelectorAll("#add-men");
    
})