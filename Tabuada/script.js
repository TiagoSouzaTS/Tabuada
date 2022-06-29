function clicar () {
p2 = document.getElementById("p1")
numero = document.getElementById("numero")
n1 = Number(numero.value)
n2 = 0
p2.innerHTML = ''
if (numero.value == ''){
    alert("Por favor, digite um número!")
} else{
    while (n2 <= 10) {
        var res = n1 * n2
        p2.innerHTML += (`<p>${n1} x ${n2} = ${res}</p>`)
        n2++
                
        }
}
    
}