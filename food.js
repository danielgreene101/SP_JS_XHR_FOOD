
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        var placeToGo = document.getElementById('foods');
        var result = JSON.parse(xhttp.responseText).dog_brands;
//        console.log('here', result);
        for (var i = 0; i < result.length; i++){
            var brand = document.createElement("li");
            brand.innerHTML = result[i].name;
            placeToGo.appendChild(brand);
            var tp = result.types;
            console.log('here', tp);
            var foodtype = document.createElement("li");
            foodtype.innerHTML = tp[i].type;
            placeToGo.appendChild(foodtype);
        }
        
    }
};
xhttp.open("GET", "products.JSON", true);
xhttp.send();



//var xhttp2 = new XMLHttpRequest();
//xhttp2.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//        JSON.parse(xhttp2.responseText)
//        let responses = xhttp2.responseText;
//        let foods = responses;
//        document.getElementById('cat').innerHTML += foods;
//    }
//};
//
//xhttp2.open("GET", "cat.JSON", true);
//xhttp2.send();
