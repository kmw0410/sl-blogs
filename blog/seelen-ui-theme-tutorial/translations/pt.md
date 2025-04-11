# Seelen UI: Theme Basics Tutorial - Personalize sua área de trabalho como um profissional!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Deseja dar uma nova aparência à sua área de trabalho do Windows? Seelen Ui
facilita com seu poderoso sistema temático. Este guia irá orientá -lo no básico
de como Temas funcionam - nenhuma experiência de codificação necessária!

## Versão de depuração especial para criadores de temas

Antes de começarmos, os criadores de temas devem saber sobre o nosso especial
**Versão de depuração** De Seelen Ui! Esta versão permite:

- Inspecione os elementos como uma página da web (Ctrl+Shift+i abre ferramentas
  de desenvolvedor)
- Veja alterações ao vivo HTML/CSS
- Modificações de temas de teste instantaneamente
- Problemas de estilo de depuração facilmente

Baixe a versão de depuração do nosso
[Nightly libera canal](https://seelen.io/apps/seelen-ui/releases/nightly)
(procure arquivos terminando com `-debug.exe`, como
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Quer aprender mais sobre construções noturnas?

Confira o nosso
[Construções noturnas explicadas](https://seelen.io/blog/seelen-ui-nightly)
artigo!

## Entendendo os arquivos de temas

Pense nos temas da UI da Seelen, como camadas de tinta. Você pode aplicar vários
temas em Uma vez, e assim como a pintura, a ordem é importante! Temas podem
mudar tudo De cores aos estilos de janela.

Existem três maneiras pelas quais os temas podem ser embalados:

1. **Tema de arquivo único** (arquivo .yml)
2. **Pasta de temas** (contém vários arquivos)
3. **Tema compactado** (Arquivo .slu - formato especial da interface do usuário)

### Onde colocar seus temas

Todos os temas vão nesta pasta no seu computador:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Estrutura da pasta temática

Aqui está a aparência de uma pasta temática por dentro:

```text
C:\Users\{USER}\AppData\Roaming\com.seelen.seelen-ui\themes
├── YourThemeFolder             # the name of the folder doesn't matter
│   ├── theme.yml               # Theme metadata file
│   └── seelen                  # creator's username of widgets inside
│       ├── fancy-toolbar.css   # resource's name + css extension
│       └── window-manager.scss # supports SCSS too!
├── CompactTheme.yml            # Theme metadata file with styles inside
└── CompressedTheme.slu         # Special file format used on Seelen UI
```

## Inspirando -se: Exemplo de Temas

Não tem certeza por onde ou como começar? Ui Seelen vem com vários temas
embutidos você pode usar como inspiração! Confira o
[Coleção de temas padrão](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
Para ver como eles são feitos.

## Trabalhando com cores - é mais fácil do que você pensa!

Seelen ui pega automaticamente a cor do seu destaque do Windows e o torna
Disponível em diferentes tons através de variáveis ​​de cores simples.

### Sua cor principal de sotaque

Essas variáveis ​​usam a cor que você define nas configurações do Windows:

- `--config-accent-color`: A cor pura (como #ffbbaa)
- `--config-accent-color-rgb`: A mesma cor em formato RGB (255, 187, 170)

### A família completa de cores

Seelen Ui cria uma paleta inteira da sua cor de destaque:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Aqui está a lista completa das cores disponíveis:

- Versão mais sombria: `--config-accent-darkest-color`
- Versão mais sombria: `--config-accent-darker-color`
- Versão escura: `--config-accent-dark-color`
- Versão regular: `--config-accent-color`
- Versão leve: `--config-accent-light-color`
- Versão mais leve: `--config-accent-lighter-color`
- Versão mais leve: `--config-accent-lightest-color`

Cada cor também possui uma versão RGB (com -RGB no final). Isso é útil para
criando gradientes e outros efeitos de cor.

Como exemplo, configura uma cor de fundo com opacidade:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Ainda mais opções de cores

Quer mais opções de cores? O Seelen UI expõe dezenas de cores adicionais do
sistema. Confira isso
[Referência de cores práticas](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Para todas as opções disponíveis.

Dica profissional: quando o seu acento do Windows muda, as atualizações do tema
da interface do usuário do Seelen automaticamente!
