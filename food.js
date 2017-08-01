
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        var placeToGo = document.getElementById('foods');
        var result = JSON.parse(xhttp.responseText).dog_brands;
//        console.log('here', result);
        for (var i = 0; i < result.length; i++){
            var brand = document.createElement("h3");
            brand.innerHTML = result[i].name;
            placeToGo.appendChild(brand);
            
            var tp = result[i].types;
            tp.forEach(function(element) {
            var foodtype = document.createElement("li");
            foodtype.innerHTML = element.type;
                console.log("volumes", element.volumes)
            placeToGo.appendChild(foodtype);
            
                
//            for (var t = 0; t < result.length; t++){
//                console.log('result', result.length);
//            var vol = tp[t].volumes;
//                console.log('vol', vol);
                
                
                
//                for (var g = 0; g < result.length; g++){
//                var down = vol[g].name;
//                console.log('down', down);
//                var up = vol[g].price;
//                    console.log('up', up);
////                console.log('down', down);
               
                    
            
                 element.volumes.forEach(function(element){
//                    console.log("element", element);
                var volume = document.createElement('p');
                volume.innerHTML += element.name + ' ' + element.price;
                placeToGo.appendChild(volume);
                })
            }
            
                
            
            )
        }
        
    }
};
xhttp.open("GET", "products.JSON", true);
xhttp.send();



var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
        var placeToGo = document.getElementById('cat');
        var result = JSON.parse(xhttp2.responseText).cat_brands;
//        console.log('here', result);
        for (var i = 0; i < result.length; i++){
            var brand = document.createElement("h3");
            brand.innerHTML = result[i].name;
            placeToGo.appendChild(brand);
            
            var tp = result[i].Breeds;
            tp.forEach(function(element) {
            var foodtype = document.createElement("li");
            foodtype.innerHTML = element.Breed;
            placeToGo.appendChild(foodtype);
            
                
//            for (var t = 0; t < result.length; t++){
//            var vol = tp[t].volumes;
////                console.log('vol', vol);
//                
//                
//                for (var g = 0; g < vol.length; g++){
//                var down = vol[g].type;
////                console.log('down', down);
//                var up = vol[g].price;
////                    console.log('up', up);
////                console.log('down', down);
//                var side = vol[g].size;
                element.volumes.forEach(function(element){
                    
                var volume = document.createElement('p');
                volume.innerHTML += element.type + ' ' + element.size + ' ' + element.price;
                placeToGo.appendChild(volume);
                })
                })
                       }
            }
                
            

        
        

};

xhttp2.open("GET", "cat.JSON", true);
xhttp2.send();
