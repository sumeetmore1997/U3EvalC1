
let dataarr =JSON.parse(localStorage.getItem("products")) 
console.log("dataarr:",dataarr);

dataarr.map(function (ele,index){

let box=document.createElement("div")
box.setAttribute("id","prod_box")
let image=document.createElement("img")
image.src=ele.Image
let type=document.createElement("p")
type.innerText=ele.Type
let desc=document.createElement("p")
desc.innerText=ele.Desc
let price=document.createElement("p")
price.innerText=ele.Price

let btn=document.createElement("button")
btn.innerHTML="Remove Product"
btn.setAttribute("id", "remove_product")
btn.addEventListener("click",function(){
    removeproduct(ele,index)
});

box.append(image, type, desc, price, btn)
document.querySelector("#all_products").append(box)
})

function removeproduct(ele,index){

    console.log(ele,index)
    dataarr.splice(index, 1)
    console.log(dataarr)

    localStorage.setItem("products", JSON.stringify(dataarr));
    window.location.reload();
}