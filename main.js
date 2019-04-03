function confrim(answer) {
    let result = '';
    if (answer){
        alert("good")
    } else {alert("next time")}
    return result;
}

// function processConfirm(answer) {
//     let result = "";
//     if (answer) {
//         result = "Excellent. We'll play a nice game of chess.";
//     } else {
//         result = "Maybe later then.";
//     }
//     return result;
// }
//
// let confirmAnswer = confirm("Shall we play a game?");
// let theAnswer = processConfirm(confirmAnswer);
// alert(theAnswer);

let confirm1 = confirm("choi tiep khong?")
let answer = confrim(confirm1);
alert(answer);