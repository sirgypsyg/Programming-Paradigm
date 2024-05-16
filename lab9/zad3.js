text = {
    check: function(txt, word){
        return RegExp('\\b'+ word +'\\b').test(txt);
    },

    getCount: function(txt){
        return txt.length
    },

    getWordsCount: function(txt){
        return txt.split(" ").length;
    },

    setCapitalize: function(str) {
        str = str.split(" ");
    
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }
    
        return str.join(" ");
    },

    setMix: function(str){
        res = "";
        
        i = 0;
        flag = false;
        while (i < str.length){
            flag === true ? res+=str[i].toUpperCase() : res+=str[i];
            flag = !flag;
            ++i;
        }
        return res;
    },

    generateRandom: function(lng){
        let str = ""
        for (let i = 0; i < lng; i++) {
            str+= String.fromCharCode(Math.floor(Math.random() * (122-97 + 1) + 97))
        }
        return str;
    }
}

console.log(text.check("test owe slowo", "owe"));
console.log(text.getCount("blabla"))
console.log(text.getWordsCount("blabla blabla blabla blabla"))
console.log(text.setCapitalize("blabla blabla blabla blabla"))
console.log(text.setMix("blabla blabla blabla blabla"))
console.log(text.generateRandom(10))


