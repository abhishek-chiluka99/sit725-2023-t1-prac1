function changeText(){
    var min = 0
    var tArray = ['random', 'subject1','subject2']
    var max = tArray.length - 1 
    document.getElementById("heading").innerHTML = tArray[ Math.floor(Math.random() * (max-min+1) + min) ]
}