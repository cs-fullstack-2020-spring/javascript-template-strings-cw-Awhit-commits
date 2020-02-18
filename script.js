//Defining variables
let myName;
let myId;
let myAddress;
let my_template_string;
var contestant;
var score;
let newTemplatestring
let homeTeam;
let awayTeam;
let homeScore;
let awayScore;
let homeWin;
let awayWin;

//Exercise 1

//Initializing variables that are being used in Exercise 1 
myName = "Kevin";
myId = "2112";
myAddress ="Memphis, TN";

//Recreating the sample output by using template literals
my_template_string = `My name is ${myName}.
My id is ${myId}.
My address is ${myAddress}.`

//Printing it in the console
console.log(my_template_string);

//Exercise 2

// //Initalizng the variables being used for Exercise 2
// contestant = "1_M_l337! !!";
// score = "9001";

// //No more concatenation
// newTemplatestring = `Congratulations ${contestant},
// your score is  ${score}.`;

// //Alerting the contestant of their score
// alert (newTemplatestring);



//Exercise 3

//Asking the user for the home and away team name
homeTeam = prompt("What is your home team name?");
awayTeam = prompt("What is your away team name?");

//Asking for the score of the respective teams
homeScore = parseInt(prompt("How many points did the " + homeTeam +" score."));
awayScore = parseInt(prompt("How many points did the " + awayTeam +" score."));

//Set the winning message according to which team won using template strings
homeWin = `Looks like the ${homeTeam} have defeated the ${awayTeam}!`
awayWin = `Looks like the ${awayTeam} have defeated the ${homeTeam}!`


//Setting conditions according to if the away team or the home team won
if (homeScore > awayScore) {
    alert(`${homeWin}
    Home/${homeTeam}: ${homeScore}
    Visitors/${awayTeam}: ${awayScore}`)

} else if(awayScore > homeScore) {
    alert(`${awayWin}
    Home/${homeTeam}: ${homeScore}
    Visitors/${awayTeam}: ${awayScore}`)
    
}
//If they tied as well, it will say it tied
else(
    alert(`It looks like we have a tied game folks. We're going into overtime!
    Home/${homeTeam}: ${homeScore}
    Visitors/${awayTeam}: ${awayScore}`)
)







