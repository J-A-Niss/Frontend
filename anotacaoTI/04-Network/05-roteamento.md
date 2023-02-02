# Roteamento   

- Processo pela qual um Roteador encaminha tráfego dependendo de seu endereço destino, possuindo duas interfaces, sabendo que precisa de no mínimo duas redes para funcionar; ***essencialmente o roteador entrega informação ao endereço mais proximo do destino que tiver.***

1. Roteador recebe um pacote de dado
2. Roteador examina o IP destino do pacote
3. Roteador procura a rede-destino do IP na tabela de roteamento
4. Roteador encaminha o pacote para a interface mais próxima da rede remota, determinado com info. adicional da tabela de roteamento.    

- Essas etapas são repetidas até que o tráfego chegue em seu destino.

