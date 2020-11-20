function sides(literals, ...expressions) {
    let A = expressions[0];
    let P = expressions[1];
    var answers = [];
    var s1 = (P+Math.sqrt(Math.pow(P, 2)-16*A))/4;
    var s2 = (P-Math.sqrt(Math.pow(P, 2)-16*A))/4;
    
    answers.push(s1);
    answers.push(s2);
    
    return answers.sort();
}

/**
 * Expected Output:
 * 10
 * 14
 */