# Sistema de arquivos
- Usado para rastrear arquivos e seu armazenamento em disco e sem um sistema desses o OS não sabe com organizar arquivos. Existem varios, mas dois são considerados como o padrão, ***NFTS para Windows e o ext4 para o Linux***. Compatibilidade entre sistemas é mínimo então caso tenha uma unidade com um sistema incompatível, será necessário formatar a unidade. Felizmente existe o sistema [exFAT](https://learn.microsoft.com/en-US/windows/win32/fileio/exfat-specification) que suporta a leitura e gravação de dados dos 3 sistemas principais.

## Disco
### Windows
#### Partição
- Uma parte do disco, alocada para algum fim específico, como por exemplo, um OS diferente do principal. *Lembrando que uma partição formatada se torna um volume.* Outro componente é a tabela de partição (table) que informa o OS como o disco ta particionado, este por sua vez pode ser **MBR ou Registro Mestre de Inicialização e o GPT ou Tabela GUID**; estes esquemas decidem como estruturar a informação das partições.
    - **MBR** é o mais tradicional, sendo usado no Windows, só permite volumes de até 2TB e utiliza um conceito de partição primária, das quais, só permite 4 no disco, e caso precise de mais, é necessario faer uma extensão de uma das 4 partições. Considerado mais antiquado e está sendo substituido pelo GPT
    - **GPT** aceita limites maiores que 2TB, só possui um tipo de partição da qual não tem limite.   

#### Formatando e particionando um disco.
- Windows possui um programa de fabrica chamado de Utilitário de Gerenciamento de Disco. Este processo tambem pode ser feito por meio da [CLI, através do diskpart](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-vista/cc766465(v=ws.10)?redirectedfrom=MSDN).
```
Diskpart                                    | acessar o modo de particionamento de disco pela CLI
list disk                                   | para listar os discos disponíveis
select disk X                               | para escolher o disco
clean                                       | remove toda e qualquer partição do disco
create partition primary                    | cria uma partição primaria no disco selecionado
active                                      | torna a particão selecionada em primária
format FS=NTFS label=my-thumb-drive quick   | format formata a partição, FS para file system, label para o nome e quick para tipo de formatação
```
[Para mais informações](https://support.microsoft.com/en-us/topic/default-cluster-size-for-ntfs-fat-and-exfat-9772e6f1-e31a-00d7-e18f-73169155af95)
## Montar
- Signifca tornar algo acessível ao computador, como por exemplo, conectar um dispositivo USB.    

### Linux
- Existem comandos diferentes que podemos usar, um que suporta tanto MBR quanto GPT é o Parted, este possuindo dois modos:
    1. Interativo, este lança um programa específico para interagir com a ferramente
    2. CLI, neste voce só executa comandos, ainda no shell   

```
sudo parted -l                  | lista os discos conectados no computador
sudo parted /dev/sdb            | inicia a ferramente parted
print                           | mostra o atual local na CLI
mklabel gpt                     | cria uma label
mkpart                          | cria uma partição
mkfs                            | formata a partição
sudo mount /dev/sdb /my_usb/    | monta o dispositivo, nesse caso, o my_usb. este comando não monta a unidade de modo permanente
umont /dev/sdb                  | desmonta o dispositvo, no caso, é importante desmontar a unidade antes de desconecta-la fisicamente
cat /etc/fstab                  | abre a unidade de montagem automatica
sudo blkid                      | abre as UUID, ou Universally Unique ID.
```
- o comando ***mkpart*** necesista das seguintes informações:
    1. o tipo da partição
    2. o tipo de arquivo
    3. inicio do disco
    4. final do disco
- de modo que fica: *mkpart primery ext4 1MiB 6GiB*   

#### Montando
- o comando não *mount* não monta a unidade permanente e automaticamente, necessitando modificar um arquivo chamado [*/etc/fstab*](https://en.wikipedia.org/wiki/Fstab)