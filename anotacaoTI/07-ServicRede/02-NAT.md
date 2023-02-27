# Serviço NAT - Network Address Translation   

- Tradução de endereço de rede é considerado uma técnica ao invés de um padrão definido, e essencialmente pega um IP e "traduz"(e por "traduz" entenda, **muda**) para outro. Isso é feito por razões de segurança como tambem preservação do finito espaço de IPV4. Isso se da a partir de um gateway, geralmente um roteador ou um firewall, que reescreve o IP fonte de um datagrama IP enviado, mantendo o IP original para reescreve-lo na resposta. ***Isso basicamente faz o sinal do IP aparentar sair do ROTEADOR que enviou o sinal, e não do computador que o enviou, "escondendo" o IP do computador enviador do computador recebedor, isso é chamado de Mascaramento de IP.***   

```
1. PC Enviador manda o datagrama ao roteador, que mascara o IP do PC com seu proprio e 'guarda' o IP original
2. Roteador envia o datagrama com o IP mascarado ao receptor
3. Receptor responde o datagrama ao roteador, não sabendo que na verdade é do PC enviador
4. Roteador pega a resposta, desmascara o IP e a transmite ao enviador

- Nisso o recebedor não sabe que recebeu do enviador, achando que recebeu do roteador.
```  

- *Um-pra-vários*
    - Ocorre no caso que varios computadores em LAN usando um gateway que mascara seus sinais, dando a impressão que a LAN fosse na verdade um sinal só. Isso pode dar problema sendo que o roteador receberá varias respostas enderaçadas ao mesmo IP e precisará de um jeito para enviar as respostas corretas ao enviador correto e isso pode ser feito por meio de **preservação de porta**
        - ***Preservação de porta***: Técnica pela qual o cliente escolhe uma porta fonte para que seja usada pelo roteador; ja que as conexões de saida escolhem uma porta aleatoriamente de 49.152 à 65.535, o roteador marca qual foi a porta escolhida e a usa de ponto de referencia. Ou seja **o roteador usa a porta como o endereço de origem para saber qual mensagem vai para qual computador ja que o IP foi mascarado**
        - ***Redirecionamento de porta***: Técnica na qual portas específicas são configuradas para nós especificos   

#### [Exaustão do IPv4](https://en.wikipedia.org/wiki/IPv4_address_exhaustion)

- Basicamente não tem mais IPv4 disponível, e para circumvir esse problema, usa-se NAT para que dispositivos individuais não necessitem necessariamente de um IP para se conectar a internet.