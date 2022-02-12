//Crete function for area,envairoment,levy like this:
// function getArea(radius) {
//     return 3.14 * radius * radius;
// }

// function getEnvairoment(radius) {
//     return 2 * 3.14 * radius;
// }

// function getTax(fee) {
//     const tax = 0.09;
//     return fee * tax;
// }

function area() {
    //what is this comment?
        // Get the value of the input field with id="numb"
    let r = document.getElementById("Radius").value; // use clear naming like: area & use const instead let for constant value
    let p = 3.14;// use clear naming & use const instead let for constant value
    //what is this comment?
        // If x is Not a Number or less than one or greater than 10
    let A;//use clear naming like : area
    A = (p * r * r); // use getArea function : const area = getArea(radius);
    document.getElementById("demo1").innerHTML = "مساحت  = " + A;
}
//use camelCase naming , please read this page : https://www.w3schools.com/js/js_conventions.asp
function Environment() {
    //what is this comment?
        // Get the value of the input field with id="numb"
    let r = document.getElementById("Radius").value;// use clear naming like: area & use const instead let for constant value
    let p = 3.14;// use clear naming & use const instead let for constant value
    //what is this comment?
        // If x is Not a Number or less than one or greater than 10
    let E;//use clear naming like : area
    E = 2 * p * r;// use getEnvairoment function : const envairoment = getEnvairoment(radius);
    document.getElementById("demo").innerHTML = "محیط  = " + E;
}
function levy() {
    var Am = document.getElementById("Amount").value;// use clear naming like : fee
    const L = 0.09;// use clear naming 
    var M;// use clear naming & use getTax function like : const tax = getTax(fee);
    M = Am * L;
    // you can use declare and define in same line of code for example : const total = Number(fee) + tax;
    var total;
    total = Number(Am) + M;
    document.getElementById("demo4").innerHTML = " مبلغ با مالیات = " + total + " تومان";
    document.getElementById("demo3").innerHTML = " مالیات بر اساس مبلغ وارد شده = " + M + " تومان";
}
