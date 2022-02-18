// javaScript Area calculation
function getArea(radius){
    const p = 3.14;
    const area = p * radius * radius;
    return area;
}
function area() {
    const radius = document.getElementById("radius").value; 
    if (radius >=1 && radius<10){   
        document.getElementById("area").style = "color:#333;"
        document.getElementById("area").innerHTML = "مساحت  = " + getArea(radius);
    }
    else {
        document.getElementById("area").style = "color:red;"
        document.getElementById("area").innerHTML = "لطفا شعاع دایره را به درستی وارد نمایید";
    } 
}
// javaScript Calculate the environment
function getEnvironment(radius){
    const p = 3.14;
    const environment = 2 * p * radius;
    return environment;
}
function environment() {
    const radius = document.getElementById("radius").value;
    if (radius >=1 && radius<10){
        ocument.getElementById("area").style = "color:#333;"
        document.getElementById("environment").innerHTML = "محیط  = " +  getEnvironment(radius);
    }
    else {
        document.getElementById("environment").style = "color:red;"
        document.getElementById("environment").innerHTML = "لطفا شعاع دایره را به درستی وارد نمایید";
    } 
}
// javaScript Tax Calculation
function getTax(fee) {
    const tax = 0.09;
    const maliat = fee * tax;
    return maliat;
}
function levy() {
    var fee = document.getElementById("fee").value;
    const tax = getTax(fee);
    const total = Number(fee)+tax;
    document.getElementById("totalPrice").innerHTML = " مبلغ با مالیات = " + total + " تومان";
    document.getElementById("tax").innerHTML = " مالیات بر اساس مبلغ وارد شده = " + tax + " تومان";
}

