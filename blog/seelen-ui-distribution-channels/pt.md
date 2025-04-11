---
title: Canais de distribuição da interface do usuário de Seelen
description: Aprenda sobre os diferentes canais de distribuição disponíveis para
  a interface do usuário de Seelen
published: 13-02-2025
author: Eythaann
lastRevision: 13-02-2025
---

# UI de Seelen: métodos de instalação e canais de atualização

## Opções de instalação

### Microsoft Store (MSIX)

Baixe a versão mais recente do
[Microsoft Store](https://www.microsoft.com/store). Este é o mais seguro e opção
amigável, com atualizações automáticas.

**Prós:**

- Atualizações automáticas
- Verificado e aprovado pela Microsoft
- Alta segurança e confiabilidade
- Versão mais leve do que o .exe instalador (sem símbolos de depuração
  incluídos)

**Contras:**

- As atualizações podem levar de 1 a 3 dias úteis para a aprovação da Microsoft
- Mais difícil de depurar e relatar problemas

---

### Winget (MSIX)

Instale a versão mais recente usando o seguinte comando:

> Winget Install --id Seelen.seelelenui

Oferece os mesmos benefícios da versão da Microsoft Store com o adicionado
Conveniência da instalação da linha de comando.

---

### instalador .exe

Baixe o instalador setup.exe do
[Página de lançamentos](https://github.com/eythaann/Seelen-UI/releases) e
executá -lo.

**Prós:**

- Atualizações imediatas disponíveis
- Recebe notificações de atualização assim que novas versões são lançadas
- Melhor para fins de depuração

**Contras:**

- Pode desencadear avisos antivírus (não assinado digitalmente)
- Tamanho maior do arquivo (inclui símbolos de depuração)

## Canais de atualização

> Independentemente do canal de atualização escolhido, todas as versões recebem
> automáticas Atualizações. Canais instáveis ​​também recebem atualizações de
> canais mais estáveis (por exemplo, Nightly recebe atualizações da noite e
> beta/versão).

### Liberação (estável)

O canal mais seguro e recomendado para todos os usuários.

**Características:**

- Bem testado sem bugs críticos
- Ideal para produção e uso diário
- Disponível na Microsoft Store, Winget (.MSIX) e AS .exe Installer

### Beta

Para usuários que desejam acesso antecipado a novos recursos antes do lançamento
oficial.

**Características:**

- Inclui os próximos recursos em teste
- Pode conter pequenos insetos
- Atualizações mais frequentes do que estáveis
- Disponível apenas como instalador .exe

### Todas as noites

Para usuários e desenvolvedores avançados que desejam as últimas alterações.

**Características:**

- Contém mudanças mais recentes e não testadas
- Pode incluir bugs ou recursos incompletos
- Atualizado diariamente ou com cada mudança de código significativa
- Disponível apenas como instalador .exe

Saiba mais sobre o canal noturno em nosso
[Seelen ui todas as noites](https://seelen.io/blog/nightly) documentação.

## Mecanismo de atualização: setup.exe vs msix

- **MSIX:** Atualizações gerenciadas automaticamente pela Microsoft Store
- **Setup.exe:** Inclui atualizadores internos que notificam quando as
  atualizações são disponível

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Quando uma atualização está disponível:

1. Clique na notificação
2. O atualizador vai baixar e instalar a atualização
3. O aplicativo reiniciará automaticamente
