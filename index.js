let arr = [];
function Product(n,c,i,p,g){
    this.name = n;
    this.category = c;
    this.url = i;
    this.price = p;
    this.gender = g;
}

function submita(e) {
    // console.log(2222)
    e.preventDefault();
   
    let arr = JSON.parse(localStorage.getItem("Products")) || [];

    let form = document.getElementById("form");
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let url = document.getElementById("image").value;
    let price = document.getElementById("price").value;
    let gender = document.getElementById("gender").value;

     let a = new Product(name, category, url, price, gender);
    arr.push(a);
    localStorage.setItem("Products", JSON.stringify(arr));

    console.log(a);

}