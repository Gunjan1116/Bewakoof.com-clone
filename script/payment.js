let sel=document.querySelector("#pay");
let met=document.querySelector("#addBody");
let b=document.querySelector("#btn");
b.addEventListener("click",async ()=>{
    
    try {
        let cardNo=document.querySelector("#first").value;
        let expiry=document.querySelector("#second").value;
        let cvv=document.querySelector("#third").value;
        let cardName=document.querySelector("#fouth").value;
        let obj={
            "CardNumber":cardNo,
            "Expiry Date":expiry,
            "CVV":cvv,
            "CardName":cardName
        }; 
        let res=await fetch("http://localhost:3000/UserCardDetails",{
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(obj)
        })
        if(res.ok){
            let out=await res.json();
            //console.log(out);
            alert("Payment is Successfull!!")
            window.location.href="../index.html"
        }
    } catch (error) {
        console.log(error)
    }
   
})
sel.addEventListener("change",()=>{
    let data=sel.value;
    if(data==""||data=="card"){
        met.innerHTML="";
        met.innerHTML=`
        <input id="first" placeholder="Card Number"/><br/>
        <input id="second" placeholder="Valid through(MM/YY)"/><br/>
        <input id="third" placeholder="CVV"/><br/>
        <input id="fouth" placeholder="Name On Card"/><br/>
        <p>This transaction you make is totally secure. <br/>We don't save your CVV number<p/>
        <button id="btn">Pay</button>
        `
    }
})