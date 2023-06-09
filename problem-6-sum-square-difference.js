function sumSquareDifference(n) {
    var sum=0;
    var sum2=0;
    for (var i=1;i<=n;i++) {
      sum+=i*i;
      sum2+=i;
    }
    return (sum2**2)-sum;
  }
  
  sumSquareDifference(100);