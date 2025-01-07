function getGrade (s1, s2, s3) {
    // Code here
    let result = (s1+s2+s3)/3;
    if(result < 60) return 'F';
      else if(result < 70) return 'D';
      else if(result < 80) return 'C';
      else if(result < 90) return 'B';
      else return 'A';
  }