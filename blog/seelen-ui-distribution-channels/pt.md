# **UI de Seelen: métodos de instalação e canais de atualização**

## **Opções de instalação**

### **Microsoft Store (MSIX)**

Faça o download da versão mais recente da Microsoft Store. Este é o mais seguro
 e opção amigável, com atualizações automáticas.

*   Prós:
    *   Atualizações automáticas.
    *   Verificado e aprovado pela Microsoft.
    *   Alta segurança e confiabilidade.
    *   Lightweighight versão do .exe instalador porque esta versão não
         Inclui símbolos de depuração.
*   Contras:
    *   As atualizações podem levar de 1 a 3 dias úteis para serem aprovados.
    *   Mais difíceis de depurar e relatar questões.

***

### **Winget (MSIX)**

Instale a versão mais recente usando o seguinte comando:

```pwsh
winget install --id Seelen.SeelenUI
```

Mesmos prós e contras da Microsoft Store com a vantagem de uma instalação rápida via
 linha de comando.

***

### \*\*. Instalador exe \*\*

Faça o download do instalador Setup.exe na página Releases e execute -o.

*   Prós:
    *   Instalação mais rápida com atualizações imediatas.
    *   Recebe notificações para novos lançamentos assim que estiverem disponíveis.
*   Contras:
    *   Não assinado digitalmente, o que pode desencadear avisos de antivírus.
    *   Menos leve que o instalador do MSIX porque esta versão inclui depuração
         símbolos.

## **Canais de atualização**

> Indenpendente do canal de atualização, todas as versões recebem atualizações automáticas,
>  Além disso, se você estiver usando um canal de atualização instável, também receberá atualizações do
>  canais de atualização mais estáveis, exemplo: receba as atualizações noturnas de todas as noites, mas
>  também da beta e liberação

### **Liberação (estável)**

O canal mais seguro e recomendado para todos os usuários.

*   Características:
    *   Bem testado sem bugs críticos.
    *   Ideal para produção e uso diário.
    *   Disponível na Microsoft Store, Winget, .msix e .exe.

### **Beta**

Destinado a usuários que desejam experimentar novos recursos antes de serem lançados oficialmente.
 Este canal inclui betas e candidatos a lançamento.

*   Características:
    *   Contém novos recursos em teste.
    *   Pode ter pequenos bugs.
    *   Atualizações mais frequentes do que a versão estável.
    *   Disponível apenas como .exe na página de lançamentos.

### **Todas as noites**

Para usuários e desenvolvedores avançados que desejam acesso às últimas alterações e
 características experimentais.

*   Características:
    *   Inclui as alterações mais recentes, mas não muito testado.
    *   Pode conter bugs ou recursos inacabados.
    *   Atualizado diariamente ou com todas as mudanças significativas de código.
    *   Disponível apenas como .exe na página de lançamentos.

Leia mais sobre [Seelen ui quase](./nightly.md)

## **Atualizações de recebimento em setup.exe vs msix**

Nas atualizações do MSIX são gerenciadas pela Microsoft Store, mas no setup.exe elas são
 Não, então um atualizador está incluído no aplicativo que isso mostrará um
 notificação quando uma atualização está disponível.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Se você clicar na notificação, ele começará a baixar e instalar o
 Atualizar, após o que reiniciará o aplicativo automaticamente.
