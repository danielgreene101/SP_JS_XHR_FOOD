
function bark(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        let response = xhttp.responseText;
        let food = response;
        document.getElementById('foods').innerHTML += food;
    }
};
xhttp.open("GET", "products.JSON", true);
xhttp.send();
}


function meow (){
var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        let responses = xhttp2.responseText;
        let foods = responses;
        document.getElementById('cat').innerHTML += foods;
    }
};

xhttp2.open("GET", "cat.JSON", true);
xhttp2.send();
}

meow();
bark();