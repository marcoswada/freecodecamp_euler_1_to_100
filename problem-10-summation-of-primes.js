var primes = [null,2,3,5,7];
var isPrime;
function nthPrime(n) {
  if (primes.length >= n) return primes[n];
  while (primes.length<=n) {
    var p=primes[primes.length-1]+2;
    isPrime = false;
    while(!isPrime) {
      var i=1;
      var isPrime=true;
      while (nthPrime(i)<=Math.sqrt(p) && isPrime) {
        if (p % nthPrime(i)==0) isPrime=false;
        i++;
      }
      if (isPrime) {primes.push(p);}
      p+=2;
    }
  }
  return primes[n];
}

function primeSummation(n) {
    var ret=0;
    for (var i=0; i<n; i++)
        ret+=nthPrime(i+1);
    return ret;
  }
  
  primeSummation(2000000);