const qtdCaracteres = document.getElementById('qtdCaracteres')
const cBox = document.getElementsByName('cBox')
const resultado = document.getElementById('txtArea')


document.getElementById('btnGerar').addEventListener('click', () => {
    if (qtdCaracteres.value > 0 && qtdCaracteres.value != '') {
        resultado.innerHTML = geraStringAleatoria(qtdCaracteres.value)
    } else {
        alert('Digite a quantidade de caracteres desejada!');
    }
})

function geraStringAleatoria(tamanho) {
    let arrNumeros = '0123456789'
    let arrLetrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'
    let arrLetrasMaisculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let caracteresEspeciais = '!@#$%&?'
    let stringAleatoria = '';
    let caracteres = ''

    for (let i = 0; i < cBox.length; i++) {
        if (cBox[i].checked) {
            switch (cBox[i].value) {
                case "arrNumeros":
                    caracteres += arrNumeros
                    break;

                case "arrLetrasMinusculas":
                    caracteres += arrLetrasMinusculas
                    break;

                case "arrLetrasMaisculas":
                    caracteres += arrLetrasMaisculas
                    break;

                case "caracteresEspeciais":
                    caracteres += caracteresEspeciais
                    break;
            }
        }
    }

    if (caracteres != '') {
        for (let i = 0; i < tamanho; i++) {
            stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return stringAleatoria;
    } else {
        alert('Marque algumas das opções!')
    }
}