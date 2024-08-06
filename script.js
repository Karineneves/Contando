function contar (){
    var inicio = document.getElementById ('txtin')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length==0 || passo.value.length == 0){
        window.alert (`[ERRO]Faltam dados`)
    }else{
        res.innerHTML = 'Contando:'

    var i = Number (inicio.value)
    var f = Number (fim.value)
    var p = Number(passo.value)
    if (i<f){
    for (var c=i; c <= f; c += p){
        //contagem crescente
        res.innerHTML += `${c} \u{1F449}`
    }
    }else{ (i>f)
        for (var c=i; c >= f; c -= p){
            //contagem regressiva
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
    }
}
