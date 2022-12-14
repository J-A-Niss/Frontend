# O computador moderno

- O computador moderno apesar de mudar de forma não muda estruturalmente, ou seja, entender o processo de como os componentes se comunicam e se comportam é crucial pra compreender como funciona o computador no geral, tendo o Comp. Mod. 3 formas mais populares:

1. Desktop   

- O computador moderno, chamado Desktop por ser colocado em cima da mesa e tende a ser o mais .    

### Port(Porta)    

- Porta é um ponto de conexão usado para conectar dispositivos que extende a funcionalidade do dispositivo, como por exemplo, um teclado.   

## Motherboard (Placa Mãe)    

- Componente crucial, usado para não só montar todos outros componentes, mas tambem para que os componenetes possam se comunicar entre si; funcionando como o corpo E o sistema circulatório do computador.

## PSU - Power Source Unit (Fonte de alimentação)   

- Usado para converter a energia recebida da tomada em uma forma que o computador possa usar 

## CPU - Central Processing Unit (Processador)   

- Compenente responsável por realizar toda calculação e processamento de dado do computador; funciona de fato como o cérebro do computador. 
- Se comunica muito intimamente com a **RAM**
- A CPU tem um relógio interno que a cronometra e a mantem em sincronia, esse relógio é ligado a um fio chamado *clock wire* ou fio de clock; quando dados são enviados ou recebidos, esse fio recebe voltagen que o "liga" e avisa a CPU que a CPU pode começar a fazer calcúlos, isso é chamado de *ciclo de clock*. Se houver muito dado a ser processado serão necessarios muito ciclos.     

##### Clock Speed(velocidade de clock)    

- É o maior numero de ciclos de clock que a CPU suporta fazer em conjunto, em um determinado período de tempo; por exemplo: uma cpu com 3.4 *gigahertz*, ou *ghz* equivale a 3.4 **bilhões** de ciclos por segundo. Isso indica só o limite máximo, mas não significa que alcance essa quantidade de ciclo sempre. O método de superar esse limite é por meio do **Overclocking**   

##### [OverClocking](https://www.digitaltrends.com/computing/how-to-overclock-your-cpu/)   

- Quando o overclock é feito, algumas coisas acontecem:    

1. O Chip esquenta e usa mais energia ao ponto que a eficiência piora, isso pode ser problemática quando se usa cooler padrão que possui capacidade de resfriamento limitada, limitando portanto a potencial do overclock em si.
2. Voce atua fora do limite da CPU o que pode diminuir seu tempo de vida util devido as altas temperaturas e voltagens apesar de alguns overclocks não impactarem a CPU de modo significativo
3. Tambem deve se considerar a qualidade da placa-mãe em si ja que o overclock aumenta o consumo de energia elétrica, deve se averiguar se a placa-mãe tem *módulos de regulação de voltagem* **(VRMs)** suficientes. Poucos ou de má-qualidade podem fazer a placa-mãe esquentar a temperaturas prejudiciais.
4. *Overclock valida garantias de fornecedores, tanto por produtos de CPUs quanto de placa-mãe.*    

- Antes de realizar um overclock, primeiro deve se averiguar se a CPU é capaz, normalmente os fornecedores disponibilizam no site, mas em via de regra todas da AMD são capazes, e as da Intel só as que terminam em *K* ou *X*    

- Tambem precisa averiguar se a placa-mãe suporta, sendo que o importante é o chipset. Placa-mãe AMD de 2017 com o prefixo *B* ou *X* oficialmente suportam; placa-mãe Intel só as com prefixo *Z*. Não é estritamente *impossível* realizar overclock com uma placa-mãe que não suporta oficialmente, mas as opções são muito mais limitadas    

- As condições aceitáveis dependen do modelo e do quanto voce esta disposto a arriscar, por um bom tempo, 85°C era considerado o mais quente que uma CPU podia alcançar, hoje em dia CPUs podem alcancar até 95°C    

- ***Tambem é importante manter o PC limpo de poeira para não arriscar mais danos.***


#### Cache 

- Memória de acesso rápido embutida e usada pela CPU com o objetivo de reduzir o tempo médio de acesso aos dados armazenados na memória. Cache é uma memória de pouco espaço, porém muito mais rápida e armazena as informações que são usadas com mais frequência pela CPU. Possui 3 níveis, **L1, L2 E L3** sendo o L1 o menor e mais rapido   

- Quando a CPU precisa de informação ela busca no Cache, se encontra é um *hit*, se não encontra é um *miss* e a CPU precisa então buscar a informação na memória principal   

- Como a cache possui capacidade de armazenamento extremamente limitada os novos dados que chegam da memória principal precisam ocupar o lugar de dados já presentes na cache provocando assim a evasão de dados menos recentes. A forma utilizada para selecionar o elemento a ser retirado é conhecida como política de troca (replacement policy). Uma política de troca muito popular é a LRU (least recently used) “elemento menos usado recentemente”.
 
#### Registradores   

- Permite armazenar dados com as quais a CPU trabalha. Se a nossa CPU quisesse adicionar dois números, um número seria armazenado no *registrador A* o outro no *registrador B* e o resultado armazenado no *registrador C*

## RAM - Random Access Memory   

- É a memoria de curto prazo do computador, usado para guardar dados de modo temporário.    

## HD - Hard Drive   

- Usado para salvar todo tipo de dado de modo permanente.    

## Machine Language (Lingua de Máquina)    

- Computadores só conseguem se comunicar em binário com 1s e 0s, e para que o usuário consiga se comunicar com o computador, são criados e utilizados **programas e softwares**.    

## Programas & Software    

### Programas    

- Conjunto de instruções que descrevem uma tarefa a ser realizada por um computador, como por exemplo, processar um texto por meio de um editor de texto, *Microsoft Office* por exemplo.
    

### Software *(suporte lógico)*    

- Sequência de instruções a serem seguidas e/ou executadas, na manipulação, redirecionamento ou modificação de um dado (informação) ou acontecimento.    

- Composto por diversas funções, bibliotecas e módulos que geram um programa executável no fim do processo de desenvolvimento que, quando executado, recebe algum tipo de “entrada” de dados *(input)*, processa as informações segundo uma série de algoritmos ou sequências de instruções lógicas e retorna uma saída *(output)*, como resultado deste processamento.     

## EDB - External Data Bus (barramento de dados externo/barramento de endereço)   

- Fios conectores que interconectam as peças do computadores; quando tensão é transmitida pelo fio o fio é ligado representando 1, quando não há tensão e o fio é considerado desligado, representa 0. **Um fio transmite um bit, ou seja, ou um 1 ou um 0.**   

- Tem EDBs de 8, 16, 32 e 64 bits   

- A RAM não envia dados pelo EDB por conter muito dado na RAM    

### MCC - Memory Controller Chip   

- Ponte entre a CPU e RAM que conecta as informações; A CPU conversa com o MCC e diz: Ei, preciso das instruções para a terceira etapa, o MCC encontra as instruções para essa etapa na RAM, pega os dados os envia por meio do EDB.   

### Address Bus (barramento de endereço)   

- Um outro conector que conecta a CPU ao MCC e envia só a localização dos dados, não os dados em si.    

```
CPU >--address-bus--> LOCALIZAÇÃO DO DADO >--address-bus--> MCC >--procura--> RAM >--dado-encontrado--> MCC >--external-data-bus--> CPU
```   

- *CPU envia localização do dado pelo ADDRESS BUS ao MCC, na qual o MCC procura o dado na RAM e envia o dado pelo EDB*