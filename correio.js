async function pesquisar() {
    var cep = parseInt(document.getElementById("cep").value)
    if (typeof (cep) == "number") {
        const url = `https://viacep.com.br/ws/${cep}/json/`
        const dados = await fetch(url)
        const endereco = await dados.json()
        var log = document.getElementById("log-json")
        log.innerHTML = endereco.logradouro
        var bairro = document.getElementById("bairro-json")
        bairro.innerHTML = endereco.bairro
        var uf = document.getElementById("uf-json")
        uf.innerHTML = endereco.uf
        var ibge = document.getElementById("ibge-json")
        ibge.innerHTML = endereco.ibge
        var ddd = document.getElementById("ddd-json")
        ddd.innerHTML = endereco.ddd
        var siafi = document.getElementById("siafi-json")
        siafi.innerHTML = endereco.siafi
    } else {
        alert("Digite seu cep corretamente com apenas números")
    }
}
