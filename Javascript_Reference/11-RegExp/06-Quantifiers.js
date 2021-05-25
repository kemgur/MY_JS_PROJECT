/*
Quantifiers(Niceleyiciler)

Quantifier:	Description:
n+	        Matches any string that contains at least one n
            (En az bir n içeren herhangi bir dizeyle eşleşir)

n*	        Matches any string that contains zero or more occurrences of n
            (n'nin sıfır veya daha fazla oluşumunu içeren herhangi bir dizeyle eşleşir)

n?	        Matches any string that contains zero or one occurrences of n
            (N'nin sıfır veya bir oluşumunu içeren herhangi bir dizeyle eşleşir)

n{X}	    Matches any string that contains a sequence of X n's
            (Bir dizi X n içeren herhangi bir dizeyle eşleşir)

n{X,Y}	    Matches any string that contains a sequence of X to Y n's
            (X'den Y n'ye kadar olan bir dizi içeren herhangi bir dizeyle eşleşir)

n{X,}	    Matches any string that contains a sequence of at least X n's
            (En az Xn dizisi içeren herhangi bir dizeyle eşleşir)

n$	        Matches any string with n at the end of it
            (Sonunda n olan herhangi bir dizeyle eşleşir)

^n	        Matches any string with n at the beginning of it
            (Başında n olan herhangi bir dizeyle eşleşir)

?=n	        Matches any string that is followed by a specific string n
            (Belirli bir dizenin izlediği herhangi bir dizeyle eşleşir n)

?!n	        Matches any string that is not followed by a specific string n
            ( Sonrasında belirli bir dizge olmayan herhangi bir dizeyle eşleşir n)

*/