export default function calculator(value: string) {

    const conta = value.split('') 
    // Substituir 'x' por '*'
    for (let i = 0; i < conta.length; i++) {
        if (conta[i] === 'x') {
            conta[i] = '*'
        }
    }

    // Verificar se o último caractere da conta é divisão, adição, subtração ou multiplicação.
    if (conta[conta.length - 1] === '/' || conta[conta.length - 1] === '+' || conta[conta.length - 1] === '-' || conta[conta.length - 1] === 'x') {
        alert('Conta inválida')
        return "0"
    }

    // eval: ele calcula a conta
    return eval(conta.join(''))

}

