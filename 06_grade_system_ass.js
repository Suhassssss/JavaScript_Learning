let index = 0;
function gradeSystem(score) {
    index++
    console.log(`============== ${index} ===============`);
    if (score >= 1 && score < 35) {
        console.log(`  score: ${score}`);
        console.log("  You are Failed");
    } else if (score >= 35 && score < 60) {
        console.log(`  score: ${score}`);
        console.log("  You are Passed and GRADE is 'C'");
    } else if (score >= 60 && score < 75) {
        console.log(`  score: ${score}`);
        console.log("  You are Passed and GRADE is 'B'");
    } else if (score >= 75 && score < 90) {
        console.log(`  score: ${score}`);
        console.log("  You are Passed and GRADE is 'A'");
    } else if (score >= 90 && score <= 100) {
        console.log(`  score: ${score}`);
        console.log("  You are Passed and GRADE is 'A+'");
    } else if (score < 0 || score > 100) {
        console.log(`  score: ${score}`);
        console.log("  Invalid score");
    } else if (score === null) {
        console.log(`  score: ${score}`);
        console.log("  Invalid Input null");
    } else if (score === undefined) {
        console.log(`  score: ${score}`);
        console.log("  Invalid Input undefined");
    } else if(score != NaN) {
        console.log(`  score: ${score}`);
        console.log("  Ivalid Input string");
    }
}

gradeSystem(66);
gradeSystem(13);
gradeSystem('" "');
gradeSystem(98);
gradeSystem('"Fifty Five"');
gradeSystem(35);
gradeSystem(75);
gradeSystem(null);
gradeSystem(undefined);
gradeSystem(-20);
gradeSystem(55);
gradeSystem(82);




// console.log(`Que.1`);
// let index=0;
// function gradeSystem(score) {
//     index++;
//     console.log(`  ========-${index}-========`);
//     console.log(`  Your Score: ${score}`);
//     if (score<35 && score>=0) {
//         console.log("  You are Failed");
//     }else if (score>=35 && score<60) {
//         console.log("  Passed and GRADE is 'C'");
//     }else if (score>=60 && score<75) {
//         console.log("  Passed and GRADE is 'B'");
//     }else if (score>=75 && score<90) {
//         console.log("  Passed and GRADE is 'A'");
//     }else if (score>=90 && score<=100) {
//         console.log("  Passed and GRADE is 'A+'");
//     }else if (score<0 || score>100) {
//         console.log("  Invalid Score");
//     }else if (score != NaN || score != null || score != undefined) {
//         console.log("  Invalid Input");   
//     }
//     console.log(" ");
// }
// gradeSystem(66);
// gradeSystem(13);
// gradeSystem("");
// gradeSystem(98);
// gradeSystem("Fifty Five");
// gradeSystem(35);
// gradeSystem(75);
// gradeSystem(null);
// gradeSystem(undefined);
// gradeSystem(-20);
// gradeSystem(55);
// gradeSystem(82);