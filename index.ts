
function averageScore(...scores: number[]): number {
    
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}


console.log(averageScore(80, 90, 100, 70)); 
