function tabuada () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 0; c <= 10; c++) {
            let item = document.createElement('option') // Criando um option pelo JavaScript para o <select> no HTML.
            item.text = `${n} x ${c} = ${n*c}` //operção aritmétrica com duas variávels dentro do Placeholder. O texto do objeto Item recebeu a expressão da tabuada.
            item.value = `tab${c}` //Criando um value para cada item do option. Essa opção em outras linguagens servem para saber qual dos options foi selecionado dentro do select. 
            tab.appendChild(item) // Para exibir no select o resultado da tabuada foi passado o parâmetro appendChild e dentro dele o conteúdo a ser exibido. E essa foi a forma de adicionar o option criado no objeto Item ao select que recebe modificações por tab
        }
    }
}