var min = (a = prompt('Введите первое число:'), b=prompt('Введите второе число:')) =>{
    console.log("Числа: "+ a + ", "+ b)
    if (a > b) return b;
    if (a < b) return a;
    else return alert('Введите числа!')
}
console.log(`Минимальное число: ${min()}`)