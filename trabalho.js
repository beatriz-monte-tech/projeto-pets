export function geradorDeTagsDeIdentificacao(nome) {
    return String(nome).toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
    const idadeMinima = 1;
    const portePermitido = 'M';

    return idade >= idadeMinima && porte === portePermitido;
}

export function calcularConsumoDeRacao(nome, idade, peso) {
    // nome e idade não influenciam no cálculo por enquanto
    const consumoPorKg = 300;
    return peso * consumoPorKg;
}

export function decidirTipoDeAtividadePorPorte(porte) {
    const mapa = {
        pequeno: 'brincar dentro de casa',
        medio: 'passear no quarteirão',
        grande: 'correr no parque'
    };
    return mapa[porte?.toLowerCase()] || 'atividade não definida';
}

export async function buscarDadoAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Pipoca')
        }, 100);
    });
}