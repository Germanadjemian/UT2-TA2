function reverseString(s){
    let news;
    for(i=s.length; i!=0;i--){
        news+= s[i];
    }
    return news;
}
console.log(reverseString("Ujut"));

function reverseString2(str){
    const reversedString =
    str.split("").reduce((acc, char) => char + acc, "");
    console.log(reversedString);
    }

reverseString2("HOLA");
