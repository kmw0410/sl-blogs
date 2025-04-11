# Seelen UI: Tutorial de conceptos básicos del tema: ¡personalice su escritorio como un profesional!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

¿Quieres darle a tu escritorio de Windows un nuevo look? Seelen UI lo hace fácil
con Su poderoso sistema temático. Esta guía lo guiará a través de los conceptos
básicos de cómo Temas de trabajo: ¡no se requiere experiencia de codificación!

## Versión de depuración especial para creadores de temas

Antes de comenzar, los creadores de temas deben saber sobre nuestro especial
**versión de depuración** de Seelen UI! Esta versión te permite:

- Inspeccionar elementos al igual que una página web (Ctrl+Shift+I Open
  Developer Tools)
- Ver cambios HTML/CSS en vivo
- Modificaciones del tema de prueba al instante
- Problemas de estilo de depuración fácilmente

Descargue la versión de depuración de nuestra
[Canal de lanzamientos nocturnos](https://seelen.io/apps/seelen-ui/releases/nightly)
(Busque archivos que terminen con `-debug.exe`, como
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### ¿Quieres aprender más sobre las construcciones nocturnas?

Echa un vistazo a nuestra
[Se explicaron construcciones nocturnas](https://seelen.io/blog/seelen-ui-nightly)
¡artículo!

## Comprender archivos de tema

Piense en temas de UI de Seelen como capas de pintura. Puede aplicar múltiples
temas en Una vez, y al igual que la pintura, ¡el orden es importante! Los temas
pueden cambiar todo Desde colores hasta estilos de ventana.

Hay tres formas en que se pueden empaquetar temas:

1. **Tema de archivo único** (archivo .yml)
2. **Carpeta de temas** (contiene múltiples archivos)
3. **Tema comprimido** (archivo .slu - formato especial de ui de Seelen)

### Donde poner tus temas

Todos los temas van en esta carpeta en su computadora:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Estructura de carpetas de temas

Así es como se ve una carpeta de tema dentro:

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

## Inspirarse: temas de ejemplo

¿No está seguro de dónde o cómo comenzar? Seelen UI viene con varios temas
incorporados ¡Puede usarlo como inspiración! Mira el
[colección de temas predeterminados](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
Para ver cómo están hechas.

## Trabajar con colores, ¡es más fácil de lo que piensas!

Seelen UI recoge automáticamente su color de acento de Windows y lo hace
Disponible en diferentes tonos a través de variables de color simples.

### Tu color de acento principal

Estas variables usan el color que configura en la configuración de Windows:

- `--config-accent-color`: El color puro (como #ffbbaa)
- `--config-accent-color-rgb`: Mismo color en formato RGB (255, 187, 170)

### La familia de color completa

Seelen UI crea una paleta completa de su color de acento:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Aquí está la lista completa de colores disponibles:

- Versión más oscura: `--config-accent-darkest-color`
- Versión más oscura: `--config-accent-darker-color`
- Versión oscura: `--config-accent-dark-color`
- Versión regular: `--config-accent-color`
- Versión ligera: `--config-accent-light-color`
- Versión más ligera: `--config-accent-lighter-color`
- Versión más ligera: `--config-accent-lightest-color`

Cada color también tiene una versión RGB (con -RGB al final). Esto es útil para
creando gradientes y otros efectos de color.

Como ejemplo, configuración de un color de fondo con opacidad:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Aún más opciones de color

¿Quieres más opciones de color? Seelen UI expone docenas de colores adicionales
del sistema. Mira esto
[referencia de color útil](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Para todas las opciones disponibles.

Consejo profesional: cuando cambia el color de acento de Windows, las
actualizaciones de su tema de la interfaz de usuario de Seelen ¡automáticamente!
