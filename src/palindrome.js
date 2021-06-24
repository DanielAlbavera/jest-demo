function palindrome(string) {
    const lower = string.replace(/ /g,"").toLowerCase();
    const reverse = lower.split("").reverse().join("");
    console.log(lower);
    console.log(reverse);    
    return lower === reverse;
}

console.log(palindrome("Anita lava la tina"));