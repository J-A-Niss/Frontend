# Servidores Web   

- São servidores especializados em disponibilizar aplicações/sites/portais, seguindo padrões de protocolo HTTP. Divididos em 3 categorias:    

1. Hospedagem Compartilhada
    - Permite que diversos sites sejam hospedados em um servidor, compartilhando recursos da máquina entre eles; sendo que cada site tem uma cota de recursos exclusivos conforme contratado.

2. IaaS - *Infrastructure as a Service*
    - Disponibilizada apenas à infra, ou seja, os servidores físicos, o lugar em si, a fazenda com as màquinas/clusters. Nesse caso o proprio cliente que contrata os servidores é responsável pelas aplicações que vão gerenciar o serviço.    

3. PaaS - *Platform as a Service*
    - Parecido com Hospedagem Compartilhada, mas traz mais liberdade para configurar os tipos de serviços.     

### Padrões de Protocolo     

##### Protocolo - Tipo de Aplicação - Porta     

1. HTTP - Website - 80
2. HTTPS - Website - 443
3. FTP - Arquivos - 20
4. SSH/SFTP - Arquivos - 22
5. Whois - Domínios - 43
6. POP3(email) - Email - 110
7. IMAP4 - Email - 143 
8. MySQL - Bando de Dado - 3306
9. PostgreSQL - BdD - 5432    

- Cada porta faz a chamada para um recurso