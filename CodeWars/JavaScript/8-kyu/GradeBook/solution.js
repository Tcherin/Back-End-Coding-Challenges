function getGrade (s1, s2, s3) {
    const average = Math.floor((s1 + s2 + s3) / 3);
    if (average >= 90)
        return 'A'
    else if (average < 90 && average >= 80)
        return 'B'
    else if (average < 80 && average >= 70)
        return 'C'
    else if (average < 70 && average >= 60)
        return 'D'
    else
        return 'F'
  }

  console.log(getGrade(67, 92, 83))

// refactored

function getGrade(s1, s2, s3) {
    const average = Math.floor((s1 + s2 + s3) / 3);
  
    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
  
    return 'F';
  }
  
  console.log(getGrade(67, 92, 83));
  