function fibonacci(n) 
{
    if(n == 1||n == 2){return 1;}
    else
    {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}

// function fibona(end){ 
//     var num1 = 1,num2 = 1,num3; 
//     var arr = []; 
//     arr.push(num1);
//     arr.push(num2);
//     for(var i = 0;i<=end;i++){ 
//         num3 = num1 + num2; 
//         num1 = num2; 
//         num2 = num3; 
//         arr.push(num3); 
//     } 
//     return arr; 
// } 





// console.log(fib(500))

// module.exports = fibona
module.exports = fibonacci