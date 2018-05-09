function anagrams(str){
    var result = [];

    if(!str){
        return result;
    }

    if(str.length === 0){
        return result;
    }

    if(str.length === 1){
        result.push(str);
        return result;
    }

    if(str.length === 2){
        return [str[0] + str[1],str[1] + str[0]];
    }

    if(str.length === 3){
        var split = [];
        for(var i = 0;i < 2;i++){
           for(var j = 0;j < str.length - 1;j++)
           split.push(str[i] + anagrams(drop(str,i))[j])
        }
        return split;
    }


}

function drop(str,n){
    var result = "";
    for (i = 0;i < str.length;i++){
        if(i == n){
            
        }
    }

}