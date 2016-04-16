function test(){

    console.log("bbbb");
}

var images = [
    "Images/landscape-mountains-nature-lake.jpg",
    "Images/Rocky.Mountain.National.Park.original.3521.jpg",
    "Images/mountains_hd.jpg",
    "Images/396.jpg",
    "Images/448.jpg",
    "Images/Amazing-Pictures-Of-Mountains.jpg",
    "Images/winter.jpg"

    
];

var prevb = document.getElementById('b1');
var nextb = document.getElementById('b2');

var next = 0;
var prev = 6;

document.getElementById("imgs").src = images[next];

nextb.addEventListener('click', function () { //$("#b1").addEventListener... jQuery
   
    
     next++;
     if (next == 7) {
           next = 0;
        }

     document.getElementById("imgs").src = images[next];
     console.log(next);
     prev = next-1;
    
     
    
    
    
});

prevb.addEventListener('click', function () {


    
    if (prev < 0) {
        prev = 6;
        
    }
       

    document.getElementById("imgs").src = images[prev];
    console.log(prev);
    next = prev;
    prev--;
    
    
});