🛠️ E4-M3 Ejercicio
Generador de Nombres de Usuario 🤖

Objetivo:

Practicar el uso de métodos de los objetos preconstruidos String y Math para manipular texto y generar números aleatorios, combinándolos para crear un resultado dinámico a partir de la entrada del usuario.

Instrucciones:

# 🛠️ E4-M3 — Generador de Nombres de Usuario 🤖

## 🎯 Objetivo

Practicar el uso de métodos de los objetos preconstruidos `String` y `Math` para manipular texto y generar números aleatorios, combinándolos para crear un resultado dinámico a partir de la entrada del usuario.

---

## 🧭 Instrucciones (resumen)

- **Captura de datos**: pide al usuario su nombre y apellido usando `prompt()`.
- **Procesamiento**:
  - Inicial: toma la primera letra del nombre (`slice(0, 1)` o `charAt(0)`).
  - Apellido: toma las primeras tres letras del apellido (`slice(0, 3)`).
  - Convierte ambos fragmentos a minúsculas con `toLowerCase()`.
- **Número aleatorio**: genera un entero de dos dígitos entre `10` y `99` con `Math.random()` + `Math.floor()`.
- **Ensamblaje**: concatena inicial + primeras 3 letras del apellido + número aleatorio.

---

## 🧪 Ejemplo de salida

Si el usuario ingresa `Ana` y `De Armas`, la consola podría mostrar:

```
Tu nuevo nombre de usuario es: adea87
```

---

## 📚 Conceptos aplicados

- **String**: `toLowerCase()`, `slice()`, `charAt()`, `concat()` (o `+`).
- **Math**: `Math.random()`, `Math.floor()`.
- **Entrada**: `prompt()`.

---

## 🛠️ Cómo visualizar el resultado en la consola

Sigue estos pasos para abrir la página y ver la salida en la Consola del navegador:

1. Abrir el proyecto
   - Doble clic en `index.html` dentro de la carpeta del proyecto para abrirla en tu navegador por defecto.
   - O desde PowerShell (en la carpeta del proyecto):

```powershell
start index.html
```

   - Desde Visual Studio Code: abre la carpeta del proyecto y usa la extensión **Live Server** y haz clic en **Go Live**.

2. Responder los `prompt()`
   - Completa los diálogos que pida la página (nombre y apellido). `prompt()` detiene la ejecución hasta que respondas o canceles.

3. Abrir DevTools -> Console
   - Windows / Linux: `F12` o `Ctrl+Shift+I`.
   - Selecciona la pestaña **Console** y verás el mensaje: `Tu nuevo nombre de usuario es: ...`.

4. Alternativa: servir localmente (opcional)
   - Si prefieres un servidor HTTP local (útil para ciertos entornos), ejecuta en PowerShell:

```powershell
python -m http.server 8000
```

   - Abre `http://localhost:8000` en tu navegador y navega hasta `index.html`.

5. Depuración rápida
   - Si no aparece `prompt()`, revisa la pestaña **Console** por errores.
   - Asegúrate de que no haya bloqueadores de ventanas emergentes que impidan los diálogos.

---

## 📤 Entrega

Sube tu proyecto a un repositorio público en GitHub y comparte únicamente el enlace.