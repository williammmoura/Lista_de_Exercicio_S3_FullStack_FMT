/*Exercício 03
*   PONTE.
*   A secretaria de obras de uma prefeitura local está reformando uma das pontes da cidade após alguns desgastes naturais. Após vários testes, o trânsito local foi liberado com algumas condições específicas: Nenhum carro que pese mais de 1.500kg e tenha mais de 5 metros de comprimento poderá passar pela ponte. Faça um programa que leia as informações e alerte se o carro pode ou não passar pela ponte.
*/

let pesoVeiculo = 1501;
let comprimentoVeiculo = 5.1;

if (pesoVeiculo > 0 && pesoVeiculo <= 1500 && comprimentoVeiculo > 0 && comprimentoVeiculo <= 5){
    console.log(`Seu veiculo pesa ${pesoVeiculo}kg e comprimento de ${comprimentoVeiculo}m. SIGA EM FRENTE.`);
}else{
    console.log(`Seu veiculo pesa ${pesoVeiculo}kg e comprimento de ${comprimentoVeiculo}m. NÃO PODERÁ TRAFEGAR NA PONTE.`);
};