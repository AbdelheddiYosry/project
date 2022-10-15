var productphoto1 = document.querySelector("#productphoto1") 
console.log(productphoto1);
var smal1 = document.querySelectorAll(".smal1")
console.log(smal1);
// var productphoto1 = document.getElementById("productphoto1") 
// var smal1 = document.getElementsByclassName("smal1")

smal1[0].onclick = ()=>{
    productphoto1.src = smal1[0].src;
}
smal1[1].onclick = ()=>{
    productphoto1.src = smal1[1].src;
}
smal1[2].onclick = ()=>{
    productphoto1.src = smal1[2].src;
}
smal1[3].onclick = ()=>{
    productphoto1.src = smal1[3].src;
}