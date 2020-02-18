`use strict`;

var yName = prompt("What is your name ?");
console.log("What is your name ?", yName);
alert(`Welcome! ${yName}  ` );

///////////////////////////////////////////////////////////////////////////////////////////////////////////
var ques1 = prompt("Do you think that I like animals ?");
switch (ques1.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("No your are wrong , I hate all kind af animels except hourses.");
        //console.log("Do you think that I like animals ?", ques1);
        break;
    case 'no':
    case 'n':
        alert("You are right!");
        //console.log("Do you think that I like animals ?", ques1);
        break;
    default:
        alert("please, try again! answer with yes or no to see the answer.");
        //console.log("Do you think that I like animals ?", ques1);
        break;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
var ques2 = prompt("Do you think that I like healthy food?");
switch (ques2.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("Pravo!");
        //console.log("Do you think that I like healthy food?", ques2);
        break;
    case 'no':
    case 'n':
        alert("Uhh, I like it so much");
        //console.log("Do you think that I like healthy food?", ques2);
        break;
    default:
        alert("please, try again! answer with yes or no to see the answer.");
        //console.log("Do you think that I like healthy food?", ques2);
        break;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
var ques3 = prompt("Do you think that I like coffee ?");

switch (ques3.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("Pravo!, I like it a lot");
        //console.log("Do you think that I like coffee ?", ques3);
        break;
    case 'no':
    case 'n':
        alert("You are wrong! , I am a coffee addict");
        //console.log("Do you think that I like coffee ?", ques3);
        break;
    default:
        alert("please, try again! answer with yes or no to see the answer.");
        //console.log("Do you think that I like coffee ?", ques3);
        break;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
var ques4 = prompt("Do you think that I like draw ? ");

switch (ques4.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("Yes, you know me a lot");
        //console.log("Do you think that I like draw ? ", ques4);
        break;
    case 'no':
    case 'n':
        alert("Sorry you are fail");
        //console.log("Do you think that I like draw ? ", ques4);
        break;
    default:
        alert("please, try again! answer with yes or no to see the answer.");
        //console.log("Do you think that I like draw ? ", ques4);
        break;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
var ques5 = prompt("Do you think that I like cars?");
switch (ques5.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("No. I dont mind.");
        //console.log("Do you think that I like cars?", ques5);
        break;
    case 'no':
    case 'n':
        alert("good!");
        //console.log("Do you think that I like cars?", ques5);
        break;
    default:
        alert("please, try again! answer with yes or no to see the answer.");
        //console.log("Do you think that I like cars?", ques5);
        break;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

alert(`Thank you ${yName}`);