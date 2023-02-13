const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;

for (let i = 0; i < numero.length; i++) {
  soma += numero[i];
  console.log(soma);
}

console.log('----------------------');

const media = soma / numero.length;

console.log(`Média é ${media}`);
