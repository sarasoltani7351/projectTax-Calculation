function area() {
    // Get the value of the input field with id="numb"
    let r = document.getElementById("Radius").value;
    let p = 3.14;
    // If x is Not a Number or less than one or greater than 10
    let A;
    A = (p * r * r);
    document.getElementById("demo1").innerHTML =  "مساحت  = " + A ;
}
function Environment() {
    // Get the value of the input field with id="numb"
    let r = document.getElementById("Radius").value;
    let p = 3.14;
    // If x is Not a Number or less than one or greater than 10
    let E;
    E = 2 * p * r;
    document.getElementById("demo").innerHTML = "محیط  = " + E;
}
function levy(){
    var Am= document.getElementById("Amount").value;
    const L = 0.09;
    var M;
    M = Am * L;
    var total;
    total = Number(Am) + M;
    document.getElementById("demo4").innerHTML = " مبلغ با مالیات = " + total + " تومان" ;
    document.getElementById("demo3").innerHTML = " مالیات بر اساس مبلغ وارد شده = " + M + " تومان" ;
}
    