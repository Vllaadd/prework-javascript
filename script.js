    function growBox(){
        var x = document.getElementById("box").style.height = "250px";
    }
    function turnBlue(){
        document.getElementById("box").style.backgroundColor = "blue";
    }
    function fadeBox(){
        document.getElementById("box").style.opacity = "20%";
    }
    function resetBox(){
        document.getElementById("box").style.backgroundColor = "orange";
        document.getElementById("box").style.height = "150px";
        document.getElementById("box").style.opacity = "100%";
    }