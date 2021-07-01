var a=["image1.jpg", "image2.jpg", "image3.jpg"]
var b=["Neil Ahuja", "Dharmenda Ahuja", "Aabha Ahuja"]

var k=0
function nextimage(){
    k=k+1;
    if(k==3){
        k=0
    }
    document.getElementById("img").src=a[k]
    document.getElementById("text1").innerHTML=b[k]

}