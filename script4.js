/**
 * Exercício 04
 * Uma empresa está classificando os pedidos de venda de suas equipes para diferenciar a forma de bonificação. Caso o valor do pedido seja até 10.000,00 a classificação do pedido será bronze. Caso seja entre 10.000,00 e 50.000,00 a classificação será prata. Caso seja 100.000,00 a 500.000,00 a classificação será ouro. Acima de 500.000,00 a classificação será platinum. Escreva o programa que receba as informações de valor do pedido e imprima sua classificação.
 */
let valorVenda = 1005000.00;

if(valorVenda >= 10000.00 && valorVenda <= 50000.00){
    console.log(`Valor da venda: R$${valorVenda}. Bonificação PRATA.`);
}else if(valorVenda >= 100000.00 && valorVenda <= 500000.00){
    console.log(`Valor da venda: R$${valorVenda}. Bonificação OURO.`);
}else if(valorVenda > 500000.00){
    console.log(`Valor da venda: R$${valorVenda}. Bonificação PLATINUM.`);
};