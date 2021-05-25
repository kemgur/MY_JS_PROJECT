/*
Bitwise Operators(Bitsel Operatörler):
Bit operators work on 32 bits numbers. 
Any numeric operand in the operation is 
converted into a 32 bit number. 
The result is converted back to a JavaScript number.
(Bit operatörleri 32 bit sayılar üzerinde çalışır. 
İşlemdeki herhangi bir sayısal işlenen 32 bitlik bir sayıya dönüştürülür. 
Sonuç, bir JavaScript numarasına geri dönüştürülür.)

Operator	Description	  Example	   Same as  	    Result  	Decimal
  &	           AND	      x = 5 & 1	   0101 & 0001	    0001	    1
  |	           OR	      x = 5 | 1	   0101 | 0001	    0101	    5
  ~	           NOT	      x = ~ 5	   ~0101	        1010	    10
  ^	           XOR	      x = 5 ^ 1	   0101 ^ 0001	    0100	    4
  <<	   Left shift	  x = 5 << 1	0101 << 1	    1010	    10
  >>	  Right shift	  x = 5 >> 1	0101 >> 1	    0010	  2


  The examples above uses 4 bits unsigned examples. 
  But JavaScript uses 32-bit signed numbers.
  (Yukarıdaki örnekler 4 bitlik işaretsiz örnekler kullanır.
  Ancak JavaScript, 32 bitlik işaretli sayılar kullanır.)

Because of this, in JavaScript, ~ 5 will not return 10. It will return -6.
(Bu nedenle JavaScript'te ~ 5, 10 döndürmez. -6 döndürür.)

~00000000000000000000000000000101 will return 11111111111111111111111111111010

*/
