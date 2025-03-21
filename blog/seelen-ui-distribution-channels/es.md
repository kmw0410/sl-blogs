# **UI de Seelen: métodos de instalación y canales de actualización**

## **Opciones de instalación**

### **Microsoft Store (MSIX)**

Descargue la última versión de Microsoft Store. Este es el más seguro
 y opción fácil de usar, con actualizaciones automáticas.

*   Pros:
    *   Actualizaciones automáticas.
    *   Verificado y aprobado por Microsoft.
    *   Alta seguridad y confiabilidad.
    *   Versión de LightWeighter que .exe instalador porque esta versión no
         Incluye símbolos de depuración.
*   Contras:
    *   Las actualizaciones pueden tardar 1-3 días hábiles en ser aprobadas.
    *   Es más difícil depurar e informar cuestiones.

***

### **Winget (MSIX)**

Instale la última versión con el siguiente comando:

```pwsh
winget install --id Seelen.SeelenUI
```

Los mismos pros y contras de Microsoft Store con la ventaja de una instalación rápida a través de
 línea de comando.

***

### \*\*. Instaladora exe \*\*

Descargue el instalador setup.exe desde la página de versiones y ejecutarlo.

*   Pros:
    *   Instalación más rápida con actualizaciones inmediatas.
    *   Recibe notificaciones para nuevos lanzamientos tan pronto como estén disponibles.
*   Contras:
    *   No firmado digitalmente, lo que puede desencadenar advertencias antivirus.
    *   Menos liviano que el instalador MSIX porque esta versión incluye la depuración
         símbolos.

## **Actualizar canales**

> Independiente del canal de actualización Todas las versiones reciben actualizaciones automáticas,
>  Además, si está utilizando un canal de actualización inestable, también recibirá actualizaciones del
>  canales de actualización más estables, ejemplo: las actualizaciones nocturnas de recibir desde la noche pero
>  también de beta y lanzamiento

### **Liberación (Estable)**

El canal más seguro y recomendado para todos los usuarios.

*   Características:
    *   Probado completamente sin errores críticos.
    *   Ideal para la producción y uso diario.
    *   Disponible en Microsoft Store, Winget, .msix y .exe.

### **Beta**

Dirigido a los usuarios que desean probar nuevas funciones antes de que sean lanzadas oficialmente.
 Este canal incluye betas y candidatos de liberación.

*   Características:
    *   Contiene nuevas características bajo prueba.
    *   Podría tener errores menores.
    *   Actualizaciones más frecuentes que la versión estable.
    *   Disponible solo como .exe en la página de versiones.

### **Nocturna**

Para usuarios y desarrolladores avanzados que desean acceso a los últimos cambios y
 Características experimentales.

*   Características:
    *   Incluye los cambios más recientes, pero no a fondo probados.
    *   Puede contener errores o características inacabadas.
    *   Actualizado diariamente o con cada cambio de código significativo.
    *   Solo disponible como .exe en la página de versiones.

Leer más sobre sobre [Seelen Ui Nighly](./nightly.md)

## **Recibiendo actualizaciones en setup.exe vs msix**

En las actualizaciones de MSIX son administradas por Microsoft Store, pero en setup.exe son
 no, por lo que se incluye un actualizador con la aplicación, esto le mostrará un
 Notificación Cuando hay una actualización disponible.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Si hace clic en la notificación, comenzará a descargar e instalar el
 Actualizar, después de lo cual reiniciará la aplicación automáticamente.
