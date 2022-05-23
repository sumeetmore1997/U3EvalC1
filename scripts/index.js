//store the products array in localstorage as "products"
let arr =JSON.parse(localStorage.getItem("products")) || [];

function Product(t,d,p,i){

    this.Type=t;
    this.Desc=d;
    this.Price=p;
    this.Image=i;
}

function addProduct(event){

    event.preventDefault()

    let form = document.getElementById("products")
    let Type = form.type.value;
    let Desc = form.desc.value;
    let Price = form.price.value;
    let Image = form.image.value;

    let p1 = new Product(Type, Desc, Price, Image)
    arr.push(p1)
    console.log(arr)

    localStorage.setItem("products",JSON.stringify(arr))
}
