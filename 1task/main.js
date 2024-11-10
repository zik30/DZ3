var minNumber = (a, b)=>{
    a=Number(prompt("Enter first number"));
    b=Number(prompt("Enter second number"));
    console.log(`Числа: ${a}, ${b}`)
    if(a===b) return ('Обе числа равны!')
    if(a<b) return a
    return b;
}
console.log(`Минимальное число: ${minNumber()}`)