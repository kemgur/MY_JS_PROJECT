//DESTRUCTURING (seklini bozmak)
//OBJECT DESTRUCTURING
/**
 Destructuring Assignment is a JavaScript expression that 
 allows to unpack values from arrays, or properties from objects, into distinct variables data can be extracted from arrays, objects, nested objects and assigning to variables. In Destructuring Assignment on the left-hand side defined that which value should be unpacked from the sourced variable.
In general way implementation of the extraction of the array is
 as shown below:
Example:
Destructuring Assignment, dizilerden veya nesnelerden 
özelliklerden farklı değişkenlere veri paketini açmaya
 izin veren bir JavaScript ifadesidir. Veriler dizilerden,
  nesnelerden, iç içe yerleştirilmiş nesnelerden ve 
  değişkenlere atamadan çıkarılabilir. Sol taraftaki 
  Destructuring Assignment'ta, kaynaklı değişkenden 
  hangi değerin paketinden çıkarılması gerektiğini tanımladı.
Genel olarak dizinin çıkarımının uygulanması aşağıda
 gösterildiği gibidir:
Misal:

<script>
var names = ["alpha", "beta", "gamma", "delta"];
  
var firstName = names[0];
var secondName = names[1];
  
console.log(firstName);//"alpha"
console.log(secondName);//"beta"
</script>
Output:

alpha
beta
 */
var user ={
    name = 'Sam',
    location='Dallas',
    email ='sam@gmail.com'
}
var name1 = user.name;
var location1 = user.location;
var email1 = user.email;

console.log(name1);
console.log(location1);
console.log(email1);

//I can use destructuring to make this code shorter
/*
The benefit of object destructuring is to make the code shorter
We can direkly reach the object without. notation
Keys must match to the original keys
*/
var {name, location, email}=user;//Destructuring use object
console.log(name);//Reaching the object without . notation
console.log(location);
console.log(email);

//2. I can destructe function
function getUser(){
    return{
    name2:'Sam',
    location2 : 'New York',
    email2 : 'sam@hotmail.com'
}
}
var {name2,location2, email2}=getUser();
console.log(name2);//"Sam"
console.log(location2);//"New York"
console.log(email2);//"sam@hotmail.com"

//Desctruring Arrays
var user1 =['Tim', 'New Jersey', 'tim@gmail.com']
//without destructuring
var userName = user1[0]; 
var userState = user1[1]; 
var userEmail = user1[2]; 

console.log(userName);//"Tim"
console.log(userState);//"New Jersey"
console.log(userEmail);//"tim@gmail.com"

//with destructuring
var[userName1, userState1, userEmail1]=user1;
console.log(userName1);//"Tim"
console.log(userState1);//"New Jersey"
console.log(userEmail1);//"tim@gmail.com"

/**
 NOTE:
 Object destruring and array destructuring is used to make code shorter
 In object destructuring , we must use original KEYs
 otherwise we get undefined.
 (Nesne bozma ve dizi yok etme, kodu kısaltmak için kullanılır
 Nesne yok etmede orijinal ANAHTARLAR kullanmalıyız
 aksi takdirde tanımsız kalırız)
 */