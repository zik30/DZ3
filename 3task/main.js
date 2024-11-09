var calculator = (a = parseInt(prompt('Введите первое число: ')), b= prompt('Введите арифметическое действие'), c= parseInt(prompt('Введите второе число: '))) =>{
    console.log(a, b, c)
    if(b === "+") return a + c
    if(b === "-") return a-c
    if(b === "*") return a*c
    if(b === "/"){
        if(c === 0) return alert('На ноль делить нельзя!')
        return a/c
    }
}
// var num1 = parseInt(prompt('Введите первое число: '))
// var func = prompt('Введите арифметическое действие')
// var num2 = parseInt(prompt('Введите второе число: '))
console.log(calculator())