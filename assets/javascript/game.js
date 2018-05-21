$(document).ready(function(){

    // We start by creating our variables for the game and linking DOM variables as well
    // I always prefere to start with the DOM first 
    var winsDom = $("#wins");
    var lossesDom = $("#losses");
    var totalDom = $("#total");
    var randomDom = $("#random");
    // These are the acctual game var
    var wins = 0;
    var losses = 0;
    var total = 0;
    // These are generating random numbers for crystals and random number to match
    var crystal1 = random(1,12);
    var crystal2 = random(1,12);
    var crystal3 = random(1,12);
    var crystal4 = random(1,12);
    var randm = random(19,120);


    // generating the random number on the page
    randomDom.html(randm);

    function random(min,max) {
        return Math.floor(Math.random() * (max-min+1) + min);
    };

    // setting images 
    for (var i= 1; i <= 4; i++) {
        $("#crystal").append('<div class="image" id="crystal' + i + '"></div>');
        $('<img src="assets/images/crystal' + i + '.jpeg">').prependTo("#crystal" + i);
    
    };

    // styling the images so they don't overlay each other
    $('#crystal').css('width', '400px');
	$('#crystal').css('height', '100px');
	$('img').css('float', 'left');
	$('img').css('height', '100');


    //Adding the click events for each crystal
    // Increasing the total for each crystal clicked
    // updating out total on the screen on every click

    $("#crystal1").on("click", function(){
        total += crystal1;
        totalDom.html(total);

        // adding the test function everytime so it compares the number to match with the total
        test();
      

    });

    $("#crystal2").on("click", function(){
        total += crystal2;
        totalDom.text(total);
        test();

    });

    $("#crystal3").on("click", function(){
        total += crystal3;
        totalDom.text(total);
        test();
    });

    $("#crystal4").on("click", function(){
        total += crystal4;
        totalDom.text(total);
        test();

    });

//  create the testing function that will test the wins and losses


    function test() {
        // In case of getting the right number 
        if (total === randm) {
            // Increamenting our wins
            wins++;
            // Wrinting it on our webpage
            winsDom.html("Wins: " + wins);
            // alerting the user 
            alert("You Matched it! BRAVO!!!");
            // executing our reset function to keep playing
            reset();
            // empty the Total on the page
            totalDom.empty();

            // In case of not matching the number
        } else if (total > randm) {
            // increamenting our losses
            losses++;
            // writing it to our page
            lossesDom.html("Losses: " + losses);
            // alerting the user
            alert("You Lost! Try Again!")
            // keep playing
            reset();
            totalDom.empty();
        };
    };

    // Create the rest function 

    function reset() {
        // reseting our variables with new number to match and random numbers for crystals
        crystal1 = random(1,12);
        crystal2 = random(1,12);
        crystal3 = random(1,12);
        crystal4 = random(1,12);
        randm = random(19,120);
        total = 0;
        randomDom.html(randm);
    };

});


