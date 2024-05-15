
function palindrom(str){
    for (let i = str.length - 1; i >= 0; i--) {
        if(str[i] != str[str.length - i - 1]){
            return false;
        }
    };
    return true;
}

console.log(palindrom("oo d oo"));
