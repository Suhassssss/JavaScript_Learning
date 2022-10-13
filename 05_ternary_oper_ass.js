var tcsEligibilityCheck = function(grad_score, hsc_score, ssc_score, candidate_name){
    var result = grad_score>=70 || hsc_score>=80 || ssc_score>=90
    ? `Congrats ${candidate_name} You are eligible for TCS interview`
    : "Unfortunately you are not eligible for interview"
    console.log(result);
}
tcsEligibilityCheck(80,86,90,"Mohit Sharma");
tcsEligibilityCheck(69,65,55,"Anil Pende");