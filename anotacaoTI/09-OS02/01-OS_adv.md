# OS Avançado
   
## Linux
- O interpretador da ***Command Line Interface ou CLI*** do Linux é chamada de *shell* e a lingua usada para interação é o *Bash*. A ***Graphical User Interface ou GUI*** do Linux é parecida com a do windows, de modo que navegar nas duas é muito parecido.
   
#### [Documentação Powershell](https://learn.microsoft.com/pt-br/powershell/)
   
### PowerShell
- CLI do windows. Não compreende espaços, precisando usar outros carácteres com '' ou `
```
    - ls                    - lista os diretórios
    - ls C:\                - mesma coisa mas em um diretorio especifico
    - Get-Help ls           - mostra os possiveis parametros do ls
    - Get-Help ls -Full     - mostra todos parametros e oque fazem
    - ls -Force             - mostra os arquivos ocultos
    - pwd                   - 'print working directory' indica qual diretório voce esta
    - cd                    - 'change directory' usado para mudar de diretório para o diretório desejado, podendo ser um caminho relativo ou absoluto
    - ~                     - usado para referenciar o diretório principal 'home'
    - mkdir                 - 'make directory' usado para criar diretório
    - history               - demonstra os comandos usados, as setas do teclado tambem preenchem essa função. ctrl+R tambem desempenha essa função
    - clear                 - limpa a tela
    - cp                    - copia; tambem precisa do arquivo a ser copiado e o local para copiar "cp folder01 c:\Users\user\desktop\"
    - *                     - usado como coringa para 'tudo' que for de um determinado parametro, como por exemplo *.jpg
    - cp -Recurse           - copia o conteudo de um diretório junto ao diretório em si "cp folder01 c:\Users\user\desktop\ -Recurse"
    - -Verbose              - usado para trazer mais explicações ao comando, quando o comando não tem nenhum output na tela
    - mv                    - 'move' usado para mudar arquivo de lugar e renomear documento 'mv .\documento1.txt documento2.txt'
    - rm ou remove          - remove um arquivo, NÃO MANDA PRO LIXO, REMOVE PERMANENTEMENTE
    - -Recurse              - bandeira usada para afetar todos arquivos dentro de um diretório
    - cat                   - 'concatenate' visualiza o conteudo de um arquivo
    - more                  - mostra todo conteudo do arquivo com um outro programa, dentro do shell. Enter avança uma linha por vez, espaço uma página e a tecla q encerra
    - -Head                 - mostra só o começo do arquivo
    - -Tail                 - mostra o final do arquivo

```
      
#### Caminhos
- Pode ser relativo ou absoluto; relativo do ponto do diretório que se encontra, absoluto do ponto de vista que inclui TODO caminho, desde o drive até o diretório desejado:
```
absoluto - C:\Users\User\Desktop\Frontend
relativo - \Frontend
```
   
### Shell
- CLI do Linux. Tambem não compreende espaços, use '' ou \
```
    - ls                    - lista diretórios, como por exemplo "ls ~\Desktop"
    - ls --help             - lista as opções
    - man ls                - 'manual', usado para mostrar as paginais de modo manual, chamadas de manpages no linux
    - ls -l                 - significa long, e traz informações detalhadas sobre os arquivos
    - -a                    - 'all', mostra todas opções, incluso os arquivos ocultos
    - pwd                   - 'print working directory' indica qual diretório voce esta
    - cd                    - 'change directory' usado para mudar de diretório para o diretório desejado, podendo ser um *caminho relativo ou absoluto*
    - ~                     - usado para referenciar o diretório principal (home)
    - mkdir                 - 'make directory' usado para criar diretório
    - history               - demonstra os comandos usados, as setas do teclado tambem preenchem essa função. ctrl+R tambem desempenha essa função
    - clear                 - limpa a tela
    - -r                    - mesma função do -Recurse no powershell
    - mv                    - 'move' usado para mudar arquivo de lugar e renomear documento 'mv .\documento1.txt documento2.txt'

```