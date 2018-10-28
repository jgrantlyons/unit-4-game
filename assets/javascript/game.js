//score
let actualWins = 0;
let actualLosses = 0;

//function to update score (not working)
// function updateScore(wins, losses) {
//     let wins = actualWins;
//     let losses = actualLosses;
//     document.getElementById("score").innerHTML = "wins: " + wins + "<br>losses: " + losses;
// }


//function to set goal
function getGoal(min, max) {
    min = Math.ceil(20);
    max = Math.floor(119);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

//function to pick random value for crystals
function getCrystalValue(min, max) {
    min = Math.ceil(2);
    max = Math.floor(11);
    return Math.floor(Math.random() * (max - min + 1) + min)
}



let count = [];
let numCount
tally = 0;

function getSum() {
for(let i=0; i <count.length; i++){
    let num = parseInt(count[i]);
    tally = tally+num;
}




    // parseInt(count[count.length])
    // tally = tally + count[count.length];

}
function start() {
    let goal = getGoal();
    let crystalValue = getCrystalValue();
    let blue = $('#blue');
    let purple = $('#purple');
    let rainbow = $('#rainbow');
    let white = $('#white');
    blue.attr("value", getCrystalValue());
    purple.attr("value", getCrystalValue());
    rainbow.attr("value", getCrystalValue());
    white.attr("value", getCrystalValue());

    $("#playButton").text("Restart");
    $("#goal").text(goal);
    $("#score").append("<div id=wins>Wins: " + actualWins + "</div><br><div id=losses>Losses: " + actualLosses)
    $("#tally").text(tally);
    
    

    $("#blue").click(function(){
        tally=0;
        let picDataValue = blue.attr("value");
        count.push(picDataValue);
        getSum();
        $("#tally").text(tally)
    })

    $("#rainbow").click(function(){
        tally=0;
        let picDataValue = rainbow.attr("value");
        count.push(picDataValue);
        getSum();
        $("#tally").text(tally);
    })

    $("#purple").click(function(){
        tally=0;
        let picDataValue = purple.attr("value");
        count.push(picDataValue);
        getSum();
        $("#tally").text(tally);
    })

    $("#white").click(function(){
        tally=0;
        let picDataValue = white.attr("value");
        count.push(picDataValue);
        getSum();
        $("#tally").text(tally);
    })

    if(tally===goal){
        actualWins++;
        $("#score").textContent("<div id=wins>Wins: " + actualWins + "</div><br><div id=losses>Losses: " + actualLosses);
    
    }else if(tally>goal){
        actualLosses++;
        $("#score").textContent("<div id=wins>Wins: " + actualWins + "</div><br><div id=losses>Losses: " + actualLosses)
        alert("you lose!")
    }



}



$('#playButton').click(function () { start() })


// var chrys = getCrystalValue();




// var tester = $('#blue').attr("value", chrys);
// console.log("data: ", tester.attr);

// document.getElementById("blue").setAttribute("value", getCrystalValue())


// let purple = document.getElementById("purple")
// let rainbow = document.getElementById("rainbow")
// let white = document.getElementById("white")

// function start() {
//     blue.setAttribute("value", "getCrystalValue()")
// // purple.attr(value, getCrystalValue())
// // rainbow.attr(value, getCrystalValue())
// // white.attr(value, getCrystalValue())
// console.log(blue.value)












// }
// start();