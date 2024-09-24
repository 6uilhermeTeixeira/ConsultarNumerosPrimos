function eratostenesSieve() {
    const limit = document.getElementById('limit').value;
    const primes = [];
    const marked = new Array(limit + 1).fill(false);
    let amount = 0;
    let percent = 0;
    

    // Marque 0 e 1 como não primos
    marked[0] = marked[1] = true;

    // Percorra todos os números até a raiz quadrada do limite
    for (let i = 2; i * i <= limit; i++) {
        if (!marked[i]) {
            // Se i não foi marcado, é primo
            for (let j = i * i; j <= limit; j += i) {
                marked[j] = true; // Marque todos os múltiplos de i
            }
        }
    }

    // Adicione os números primos à lista
    for (let i = 2; i <= limit; i++) {
        if (!marked[i]) {
            primes.push(i);
            amount++;
        }
    }

    percent = (amount * 100)/limit;

    // Apresente o resultado na página
    document.getElementById('sieveResult').textContent = primes.join(', ');
    document.getElementById('primeCount').textContent = `Existem ${amount} números primos entre 0 e ${limit} um total de ${percent}%`;
}