export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date (campo.value);
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('Necessário ser maior de 18 anos para criar sua conta.') // não funciona, descobrir porquê
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataAtual >= dataMais18;
}