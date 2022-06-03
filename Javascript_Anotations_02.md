## Lógica de Programação  

- Computador  
    - Maquina que extrai dado; **e dado é uma forma bruta de informação que precisa ser processado**. Esse dado pode ser nº ou letra, algo que não faça muito sentido sem o processamento.
- **Processamento** é a realização de operação no dado que entra em informação que pode ser usada/entendida pelo usuário
- Processamento de dados se da por: *Entrada (de dado) > Processamento (em info util) > Saida (da informação util ao usuário)*

### Lógica  

 - Aquilo que faz sentido. Um pensamento/linha de raciocinio que é desenvolvimente e precisa ter sentido para alguem
 - **Lógica Computacional**: É aquilo que voce consegue desenvolver para um computador processar.   

 ### Como escrever um Programa:   

 - Aplicar a lógica com objetivo de descrever o passo-a-passo pra resolver o problema em ordem de execução
 - *Aprender a criar formulas para resolver problemas*
 - Precisa entender de como criar a solução e desenvolver suas formulas 
 - Não é puramente exata, muito variada.  

 ### Lógica de Programação  

 - É a técnica de sequenciar pensamento, passos e f luxo de dado para atingir o objetivo de gerar informação
   - E a sequencia dos passos/instruções que o computador precisa seguir é conhecida como **algoritmo**   

### Algoritmo   

- Sequencia lógica e finita de instrução de resolução de problema
- *Nem todo algoritmo é programa de computador, mas todo programa de computador é um algoritmo*
- A linguagen de programação é a ferramente que viabiliza o funcionamento dos algoritmos   

#### Algoritmos para calcular a média de 3 números:   

1. Inicio:
2. Receber o primeiro numero: entrada1;
3. Receber o segundo numero: entrada2;
4. Receber o terceiro numero: entrada3;
5. Somar os numeros e dividir por 3: (entrada1 + entrada2 + entrada3) /3;
6. Exibir o resultado: print, echo, console.log ; 
7. Fim;   

### Funcionalidades Gerais  
 - Criar algoritmos e programas para executar no navegador: client side
 - Manipular o DOM: elementos(qualquer tag html), eventos(ações do usuário), estilos(do css)
 - Javascript tambem é base de Node.js
      - Node.js: framework de JS para backend que tambem tem runtime (uma engine que faz JS poder ser executado do lado do servidor e computadores)
 - Mongo.db/GraphQL: banco de dados JS
 - React / Vue.js / Angular: Frameworks JS para desenvolvimento web/mobile
      - React Native: framework especifico para dev. mobile
 - Receber/manipular dados, tomar decisões baseados em lógica computacional, fazer loop & interações (***precisa de uma condição de saída, do contrario, quebra tudo***)   

 ### Executar JS
 - Console de browsers
 - Editores como Sublime e VSC
 - JS Fiddle https://jsfiddle.net/   

 #### Instalação Node.js
 - Pra executar scripts JS precisa utilizar o node.js
 - Instalação https://nodejs.org/pt-br/download/package-manager/   

 ##### Windows necessita tambem da instalação do chocolatey
   - Executar no Powershell como admin   

 ##### Após instalação
 - Rodar novo terminal: node -v   

 ### Variáveis
 - Possuem papel importante por permitir que reserve memória no computador/servidor para que se trabalhe no código de modo mais intuitivo, criando algoritmo mais completo.
 - Primeiro se determina o nome da variavel e o que vai receber, por exemplo "*var a = 10*"
 - var (variavel/variable) 
 - const (constant - *essa variavel não muda, o valor é imutável*)
 - let (substitui a *var*, mas a *var* ainda é usada)
 - string (**tipo variavel para conjunto de caracteres**, marcada por aspas simples ou dupla [' ou "] por exemplo *'texto qualquer'*)
 - tipagem: numero ou string
 - array (armazenam um conjunto de *coisas/valores*)   

 ## Estrutura   

 - *tag* (*condição*) {*execução*}
 - *tag* *([expressão inicial]; [condição]; [incremento];)* *{execução}*

### Operadores
#### Aritmeticos: Retornam o resultado de uma operação  

 - Soma +
 - Subtração -
 - Multiplicar * 
 - Dividir /
 - Módulo % (é o resto da divisão dos dois primeiros)  


 #### Comparadores matematicos: teste lógico, retorno booleano (true/false)  

 - |< menor que
 - |> maior que
 - |<= menor ou igual
 - |>= maior ou igual  

 #### Comparadores lógicos: teste lógico, retorno booleano (true/false)  

 - == igualdade entre sentenças (só valor)
 - != diferença entre sentenças (só valor)
 - === ig. entre sent. (valor & tipo)
 - !== diff. entre. sent. (valor & tipo)    

 ## Condicionais   

 - Estruturas que permitem direcionar o fluxo do codigo dependendo das variaveis que foram usadas
 - Tambem tem alternativas caso alguma condição não seja atendida do modo esperado, oferencendo uma saida do codigo para que ou o *usuário ache outro caminho* ou não *trave o sistema*
 ### = é considerado atribuidor de valor; de modo que se *"a = b"* *a* terá valor de *b*   
 
 #### Comparadores de lógica e junção de lógica  

 - !    not 
 - &&   and
 - ||   or  

 #### Condições lógicas são convertidas em números binérios
 - 1 == true
 - 0 == false   

 #### Operador lógico de atribuição  

 - Tem capacidade de atribuir valor a variável a partir de condição lógica, economizando *IFs*  

    - Exemplo: 
        - var meuCarro = cor == "preto" ? "preto" : "branco";   

 ### IF  
 - if (...){}  

 ### Else (alternativa de if)   
 - else (...){}    
 - por exemplo:
      *if (cor == "preto") {meuCarro = "preto";} else {meuCarro = "cinza"}*  (se o carro for preto, virará cinza)  

      *if (cor == "preto") {meuCarro = "preto";} else if {meuCarro = "amarelo";}* (vai fazendo o teste lógico até devolver o valor)  

      *if (cor == "preto") {meuCarro = "preto";} else if {meuCarro = "amarelo";} else if {meuCarro = "verde"} else {meuCarro = "vermelho";}* (neste caso o else da uma condição de encerramento)  
      
 - Neste caso, o processador trabalha da seguinte forma: Se uma condição não é verdadeira, vai pra proxima, até que encontre uma verdadeira.   

 - **Muitos IFs pesam no codigo**  

### Switch  

*switch (cor) {case "branco" : meuCarro = "branco" ; break ; case "azul" : meuCarro = "azul" ; break ;  default : console.log("Não temos a cor desejada")}*   

 - *case == caso*, ou seja, *caso* meu carro seja *"branco"*, ele sera *"branco"* e o *default* funciona como um escapa, como o *else* para o *if else* 
 - no caso do *case* ele não para quando encontra uma condição verdadeira, precisando de *break;*
 - o exemplo mais classico disso é atendimente de telemarketing: *" Para X aperte 1, para Y aperte 2, para Z aperte 3, para nenhuma dessas opções aperte 4"*   

#### Média   

var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 7.5;
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if( media >= 7 ) {console.log("Aprovado")} else {console.log("Reprovado")}  

### Laços de repetição  

 - Necessita cond. de entrada e de saída, **se não tiver saída pode crashar a maquina.**  

 - var km;
 - var revisao = 10;

for ( km = 0; km <= revisao; km++ ) { console.log ( "apenas" + km + "kms então pode rodar" ) }   
                                        <!-- Liga a string com sinal de + para mostrar a mensagem-->
#### Calculo de media de varios alunos   
<!-- Nesse caso se trabalha com uma array [ ] dentro de outra array [ ] -->   

var alunos = [
     [6, 7, 8, 9,],
     [5, 8, 9, 4,],
     [4, 5, 2, 3,], 
] 

var nota = 0;
for (var i = 0; i < alunos.length; i++ ) { 
      nota = 0 
      notasAluno = alunos[i]
      console.log ("Aluno: " + parseInt (i+1) );
      console.log ("Notas: " + notasAluno);


      for ( c = 0; c < notasAluno.length; c++ ){nota += notasAluno[c];} 

      media = nota / 4;

      if(media >= 7){resultado = "aprovado"}else{resultado = "reprovado"}

      console.log("Media: " + media + " - " + resultado);
}
 - O primeiro laço percorre os alunos
 - O segundo percorre as notas
 - i usado como indice de aluno; se o i = 0 vai constar o aluno1
 - Contagem no java começa do 0   

 #### While   

- *"while"* condição persistir, executar *_______*
while([condição]) {[execução]}   
<!-- trabalhando com incremento  -->
var contador = 0;
while( contador < 10) {contador++}   

var hora = 24;
while (hora > 0) {console.log(hora); hora--; }  

console.log("total de horas: " + hora);  

#### Do  

- *do { execução } while (condição)*

 #### https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators   

 # Exercicio:   

 #### 1.Descrever um algoritmo pra resolver o "*problema da travessia*"

 - ***Um HOMEN precisa atravessar um rio com seu lobo, sua cabra e um maço alfafa em seu barco, no barco só cabe ele e mais um de seus pertences; não podendo deixar o lobo sozinho com a cabra nem a cabra sozinha com a alfafa***   

     1. | HOMEN | Lobo | Cabra | Alfafa | ***RIO*** | 

     2.  | Lobo | Alfafa | ***RIO*** | HOMEN | Cabra | *Homen leva a cabra* 

     3.  | HOMEN | Lobo | Alfafa | ***RIO*** | Cabra | *Homen volta sozinho*

     4.  | Alfafa | ***RIO*** | Cabra | HOMEN | Lobo | *Homen traz lobo*

     5.  | Cabra | HOMEN | Alfafa | ***RIO*** | Lobo | *Homen volta com a cabra*

     6.  | Cabra | ***RIO*** | Lobo | HOMEN | Alfafa | *Homen traz a alfafa, deixa a cabra*

     7.  | HOMEN | Cabra | ***RIO*** | Lobo | Alfafa | *Homen volta sozinho*

     8.  | ***RIO*** | HOMEN | Cabra | Lobo | Alfafa | *Homen traz cabra*


 #### 2.JS:Exibir média de 3 numeros com entradas pelo formulário HTML e enviar link no *git* ou *fiddle*

 - https://jsfiddle.net/aboyqwx0/3/   


