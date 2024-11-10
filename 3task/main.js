var calculator = (a =prompt('Введите первое число: '), b= prompt('Введите арифметическое действие'), c= prompt('Введите второе число: ')) =>{
    console.log(a, b, c)
    a=Number(a)
    c=Number(c)

    if(b === "+") return a + c
    if(b === "-") return a-c
    if(b === "*") return a*c
    if(b === "/"){
        if(c === 0) return alert('На ноль делить нельзя!')
        return a/c
    }
}

console.log(calculator())