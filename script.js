function contar () {
    let inicio = document.getElementById('txti');
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[Erro] Insira dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Será considerado PASSO 1')
            p = 1
        }
        if (i < f) {
            //Crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f90f}`
            }
        } else {
            //Regressiva
            for(let c = i; c >= f; c -= p)
            res.innerHTML += `${c} \u{1f90f}`
        }

        
        res.innerHTML += `\u{1f6a9}`
    }
}