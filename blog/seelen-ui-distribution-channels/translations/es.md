# UI de Seelen: métodos de instalación y canales de actualización

## Opciones de instalación

### Microsoft Store (MSIX)

Descargue la última versión del
[Microsoft Store](https://www.microsoft.com/store). Este es el más seguro y
Opción fácil de usar, con actualizaciones automáticas.

**Pros:**

- Actualizaciones automáticas
- Verificado y aprobado por Microsoft
- Alta seguridad y confiabilidad
- Versión más ligera que el instalador .exe (sin símbolos de depuración
  incluidos)

**Contras:**

- Las actualizaciones pueden tomar 1-3 días hábiles para la aprobación de
  Microsoft
- Más difícil de depurar e informar cuestiones

---

### Winget (MSIX)

Instale la última versión con el siguiente comando:

> Instalación de Winget --id Seelen.seelenui

Ofrece los mismos beneficios que la versión de Microsoft Store con el agregado
Conveniencia de la instalación de línea de comandos.

---

### .exe instalador

Descargue el instalador setup.exe desde el
[Página de comunicados](https://github.com/eythaann/Seelen-UI/releases) y
ejecutarlo.

**Pros:**

- Actualizaciones inmediatas disponibles
- Recibe notificaciones de actualización tan pronto como se publican nuevas
  versiones
- Mejor para fines de depuración

**Contras:**

- Puede activar advertencias antivirus (no firmadas digitalmente)
- Tamaño de archivo más grande (incluye símbolos de depuración)

## Actualizar canales

> Independientemente de su canal de actualización elegido, todas las versiones
> reciben automáticamente actualizaciones. Los canales inestables también
> reciben actualizaciones de canales más estables (por ejemplo, la noche recibe
> actualizaciones de Nightly y Beta/Release).

### Liberación (Estable)

El canal más seguro y recomendado para todos los usuarios.

**Características:**

- Probado completamente sin errores críticos
- Ideal para la producción y uso diario
- Disponible en Microsoft Store, Winget (.msix) y como .exe instalador

### Beta

Para los usuarios que desean acceso temprano a nuevas funciones antes del
lanzamiento oficial.

**Características:**

- Incluye las próximas funciones en pruebas
- Puede contener errores menores
- Actualizaciones más frecuentes que estables
- Disponible solo como instaladora .exe

### Nocturna

Para usuarios y desarrolladores avanzados que desean los últimos cambios.

**Características:**

- Contiene cambios más recientes y no probados
- Puede incluir errores o características incompletas
- Actualizado diariamente o con cada cambio de código significativo
- Disponible solo como instaladora .exe

Aprenda más sobre el canal nocturno en nuestro
[Seelen ui nocturno](https://seelen.io/blog/nightly) documentación.

## Mecanismo de actualización: setup.exe vs msix

- **MSIX:** Actualizaciones administradas automáticamente por Microsoft Store
- **Setup.exe:** Incluye actualizador incorporado que lo notifica cuando las
  actualizaciones son disponible

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Cuando hay una actualización disponible:

1. Haga clic en la notificación
2. El actualizador descargará e instalará la actualización
3. La aplicación se reiniciará automáticamente
