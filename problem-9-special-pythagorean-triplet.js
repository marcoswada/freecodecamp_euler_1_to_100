function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
 for (var a=1;a<n-2;a++) {
   for (var b=2;b<n-1;b++) {
     var c=n-a-b;
     if (a*a+b*b-c*c==0) return a*b*c;
   }
 }
 return true;
}
specialPythagoreanTriplet(1000);
