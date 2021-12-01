document.getElementById("five").addEventListener("click", expandBlob);

function expandBlob() {
  var blob = document.getElementById("yellowblob");
        var currWidth = blob.clientWidth;
        var currHeight = blob.clientHeight;
        if(currWidth == 442){
        } else{
            blob.style.width = (currWidth + 50) + "px";
            blob.style.height = (currHeight + 50) + "px";
        } 
}


    