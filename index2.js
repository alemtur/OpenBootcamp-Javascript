function fibonacci(num) {
    let fibo = [];
    let cont = 0;
    for (let i = 0; i < num; i++) {
        if (fibo == "" | cont < 2) {
            fibo.push(1);
            cont++;            
        } else {            
            fibo.push(fibo[i-2] + fibo[i-1]);            
        }                
    }
    return fibo;
}
console.log(fibonacci(1));