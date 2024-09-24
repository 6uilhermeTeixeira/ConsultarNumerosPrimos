function factorPrime() {
    const number = parseInt(document.getElementById('number').value);
    let isPrime = true;

    // 0 e 1 não são primos
    if (number <= 1) {
        isPrime = false;
    } else {
        // Verifica se o número é divisível por algum número entre 2 e sua raiz quadrada
        for (let i = 2; i * i <= number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    // Exibe o resultado
    const factorResult = document.getElementById('factorResult');
    if (isPrime) {
        factorResult.textContent = `${number} é um número primo.`;
    } else {
        factorResult.textContent = `${number} é um número composto.`;
    }
}