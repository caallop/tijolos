function calcular(event) {
event.preventDefault()
    let altura = document.getElementById("altura").value
    let largura = document.getElementById("largura").value
    let tmtijolo = 0.0252
    let area, tijolo
    area = altura * largura
tijolo = area / tmtijolo
alert(`voce precisara de: ${tijolo.toFixed(1)} tijolos`)
}