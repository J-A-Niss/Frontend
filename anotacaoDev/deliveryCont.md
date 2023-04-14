# Delivery
## Deploy
- Ideia de implantar o código de modo que cause a menor quantidade de problemas possível. Com esse intuito, alguns aspectos, como a infraestrutura, o domínio e a entrega em si devem ser planejados.
    1. Infraestrutura - Onde o código vai ser hospedado, servidor, aplicação em nuvem, serviço escalável etc. Nesse ponto o custo acaba sendo o maior limitador.
    2. Domínio - O endereço que o usuário irá acessar, normalmente a ultima etapa do processo.
    3. Entrega - Dar o código na mão do cliente. Este ocorre após todos outros passos do ciclo de desenvolvimento.
- No deploy existem diferentes metodologias:   

### CI - Continuous Integration
- Integração continua, ou seja, que não para. Neste caso é o deploy em equipe, então cada um trabalha em um passo em colaboração. Neste, há a revisão do código na hora da mescla com os outros códigos e como, geralmente os times estão cada vez mais velozes e trabalhando em ciclos evolutivos então o processo esta sempre sendo incrementado, assim automação com as pipelines se tornam cada vez mais interessantes, que seria fazer um build da aplicação logo após a mescla do código.   

### CD - Cont. Delivery
- São ciclos que se agregam e evoluem continuamente. É primariamente parecido com o CI, mas difere em pontos. Um dos pontos é o 'tagueamento' ou a versão do software, ou seja, 1.0/2.0 etc. Nesta, o deploy automático vai enviar o código ao servidor e para que isso funcione é necessário muito planejamento e preparação para que traga produtividade, e não problemas. 