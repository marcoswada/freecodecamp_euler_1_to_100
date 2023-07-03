function digitFibonacci(n) {
    if (n==1) return 1;
    var fi=1;
    var fj=1;
    var f=1;
    var t=1;
    while (f/(10**(n-1))<1){
      f=fi+fj;
      fi=fj;
      fj=f;
      t++;
    }
    return t+1;
  }
  digitFibonacci(20);