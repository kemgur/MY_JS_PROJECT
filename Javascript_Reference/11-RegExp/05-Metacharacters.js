/*
Metacharacters:
Metacharacters are characters with a special meaning:
(Meta karakterler, özel bir anlamı olan karakterlerdir)

Metacharacter	Description
.	    Find a single character, except newline or line terminator
        (. Satırsonu veya satır sonlandırıcı dışında tek bir karakter bulun)

\w	    Find a word character(Bir kelime karakteri bulun)

\W	    Find a non-word character(Sözcük olmayan bir karakter bulun)

\d	    Find a digit(Bir rakam bulun)

\D	    Find a non-digit character(Rakam olmayan bir karakter bulun)

\s	    Find a whitespace character(Bir boşluk karakteri bulun)

\S	    Find a non-whitespace character(S Boşluk olmayan bir karakter bulun)     

\b	    Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
         (Bir kelimenin başında / sonunda bir eşleşme bulun, şöyle başlar: \ bHI, şöyle biter: HI \ b)

\B	    Find a match, but not at the beginning/end of a word
        (Bir eşleşme bulun, ancak bir kelimenin başında / sonunda değil)

\0	    Find a NULL character(NULL karakter bul)

\n	    Find a new line character (Yeni bir satır karakteri bulun)

\f	    Find a form feed character (Bir form besleme karakteri bulun)

\r	    Find a carriage return character (Bir satır başı karakteri bul)

\t	    Find a tab character (Bir sekme karakteri bul)

\v	    Find a vertical tab character (Dikey bir sekme karakteri bulun)

\xxx	Find the character specified by an octal number xxx 
        (Sekizlik bir sayı ile belirtilen karakteri bul xxx)

\xdd	Find the character specified by a hexadecimal number dd
        Onaltılık bir sayı ile belirtilen karakteri bul dd()

\udddd	Find the Unicode character specified by a hexadecimal number dddd
        (Onaltılık bir sayı ile belirtilen Unicode karakterini bul dddd)
        

*/