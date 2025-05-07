# **Biblioteca SLU: referência da API**

O módulo API fornece implementações concretas e classes de utilidade que 
resumo a API de aplicação bruta, servindo como uma fachada amigável para desenvolvedores para 
Integração do widget.

## **Propósito**

* Implementa interfaces de `/types` com classes prontas para uso
* Abstrair complexidades de API de baixo nível
* Fornece métodos de utilidade para operações comuns
* Serve como a principal camada de interação entre os widgets e o SLU 
  aplicativo

## **Uso**

Você pode usar a biblioteca conforme necessário. Aqui está um exemplo básico:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Notas importantes:**

1. Esta biblioteca de API só funciona ao ser executada em uma execução de widgets da UI Seelen 
   ambiente
2. Tentar usá -lo em node.js ou contextos de navegador padrão jogará 
   erros
3. Os widgets usando esta API precisam atualizá -la para funcionar corretamente com 
   versão mais recente da ui seelen
