/*Exercício 02
*   Verificar a idade do usuário e qual é a faixa etária.
*/

let idade = 30;

if(idade >=0 && idade <= 12){
    console.log(`Você tem ${idade} ano(s), logo você é uma CRIANÇA.`);
}else if(idade > 12 && idade <= 17){
    console.log(`Você têm ${idade} anos, logo você é um(a) ADOLESCENTE.`);
}else if(idade > 17 && idade <= 65){
    console.log(`Você têm ${idade} anos, logo você é um(a) ADULTO(A).`);
}else if(idade >= 66 && idade <= 110){
    console.log(`Você têm ${idade} anos, logo você é um(a) SÊNIOR.`);
}else{
    console.log(`Valor INVÁLIDO!`);
};