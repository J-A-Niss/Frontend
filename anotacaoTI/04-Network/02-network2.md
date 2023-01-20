# Estrutura e funcionamento das redes de computador    

- Entender como aplicações não só funcionam, mas como interagem umas com as outras, com o sistema da empresa e até externamente. Existem regras para essa comunicação, como qualquer outra, e no mundo da computação, essas regras são chamadas de **protocolos**    

## Protocolos   

- Conjunto definido de padrões que os computadores devem seguir para se comunicar.    

## Networking   

- nome dado à todo o conceito de como os computadores se comunicam entre si   

## TCP/IP - Modo de 5 camadas   

1. Camada Física
    - Os componentes físicos i.e: *cabos*. Estão incluídas as especificações dos cabos de rede e os conectores que unem os dispositivos, juntamente com as especificações que descrevem como os sinais são enviados através dessas conexões.     

2. Camada de junção de dados *(data link)*
    - Tambem chamada de camada de interface ou de acesso de rede; nesta são enviados os primeiros protocolos. Responsável por dfinir um padrão comun de interpretar os sinais enviados na primeira camada para que dispositivos possam se comunicar em rede. ***O mais comun é o ethernet***    

    - Ethernet - Define protocolo responsável por levar dados à um nó em uma mesma rede    

3. Rede (internet)
    - Nessa camada ocorre a comunicação de diferentes redes, por meio de roteadores e um conjunto de redes conectadas por meio de roteadores é uma ***internet***. Nessa camada o protocolo mais usado é o IP ou ***internet protocol***     

    - IP é o coração da internet e de todas as redes menores de computadores.   

    - Software de rede é dividido em usuário e servidor, na qual o usuário faz uma solicitação e o servidor responde através da rede. Um nó pode rodar varias aplicações; um pc com um browser aberto com um site de video rodando em uma aba e um programa de email na outra, por exemplo.    

4. Transporte
    - Enquanto a camada de rede transmite dados a nó individual, a de transporte organize o que vai pra onde. Nessa camada é onde o TCP (*transmission control protocol*) é usado, justamente para ordenar qual aplicação recebe o dado enviado pela camada de rede.    

5. Aplicação
    - Nessa camada os protocolos são específicos de cada aplicação, por exemplo navegar na web ou enviar emails.   

### [OSI](https://pt.wikipedia.org/wiki/Modelo_OSI)     

- A principal diferença entre o nosso modelo de cinco camadas e o modelo OSI de sete camadas é que o modelo OSI divide a camada de aplicação em três camadas no total.