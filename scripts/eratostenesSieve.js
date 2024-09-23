function sieve() {
    const limit = document.getElementById('limit').value;
    const primes = [];
    const marcados = new Array(limit + 1).fill(false);

    // Marque 0 e 1 como não primos
    marcados[0] = marcados[1] = true;

    // Percorra todos os números até a raiz quadrada do limite
    for (let i = 2; i * i <= limit; i++) {
        if (!marcados[i]) {
            // Se i não foi marcado, é primo
            for (let j = i * i; j <= limit; j += i) {
                marcados[j] = true; // Marque todos os múltiplos de i
            }
        }
    }

    // Adicione os números primos à lista
    for (let i = 2; i <= limit; i++) {
        if (!marcados[i]) {
            primes.push(i);
        }
    }

    // Apresente o resultado na página
    document.getElementById('sieveResult').textContent = primes.join(', ');
}