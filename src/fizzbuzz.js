function fizzBuzz(n) {

    const divisible = (num, divisor) => num % divisor === 0;
    
    for (let i = 1; i <= n; i++) {        
        let message = ""
        if (divisible(i, 3)) {
            message += "Fizz";
        }
        if (divisible(i, 5)) {
            message += "Buzz";
        }        
        console.log(message || i);
    }
}

fizzBuzz(15);