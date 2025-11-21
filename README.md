# Reto 05: TDD con Vue.js

## Descripción

Implementación de componente Calculator con Test-Driven Development (TDD) usando Vue.js 3 y Vitest.

## Información del Estudiante

- **Nombre:** Javier Arderí
- **Cédula:** 23626683
- **Curso:** Aplicaciones con Tecnología Internet II

## Tecnologías Utilizadas

- Vue.js 3.5.22
- Vitest 3.2.4
- Vue Test Utils 2.4.6
- Vite 7.x
- jsdom 27.x
- Node.js 20.19.5

## Estructura del Proyecto

```
lab3-vue-tdd/
├── src/
│   ├── components/
│   │   ├── __tests__/
│   │   │   └── Calculator.spec.js    # Tests unitarios (TDD)
│   │   └── Calculator.vue            # Componente principal
│   ├── App.vue                        # Aplicación principal
│   └── main.js
├── package.json
├── vite.config.js
└── README.md
```

## ¿Qué es TDD?

Test-Driven Development (TDD) es una metodología de desarrollo donde:

1. **Escribes el test PRIMERO** (antes del código)
2. **El test falla** (porque el código no existe)
3. **Escribes el código mínimo** para que el test pase
4. **Refactorizas** manteniendo los tests en verde

### Ventajas de TDD:

- ✅ Código más confiable y robusto
- ✅ Detección temprana de errores
- ✅ Facilita refactoring con confianza
- ✅ Documentación viva del código
- ✅ Mejor diseño de componentes

## Instalación y Ejecución

### Requisitos Previos

- Node.js 20+
- npm 10+

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/javdarder/ATI2-2024-23626683-poc.git
cd ATI2-2024-23626683-poc
git checkout reto5

# Instalar dependencias
npm install
```

### Comandos Disponibles

```bash
# Ejecutar aplicación en desarrollo
npm run dev

# Ejecutar tests
npm run test

# Ejecutar tests con cobertura
npm run test:coverage

# Build para producción
npm run build
```

## Tests Implementados

### Calculator.spec.js - 7 tests

1. ✅ **Renderizado:** Verifica que el componente se monte correctamente
2. ✅ **Valor inicial:** Verifica que el resultado inicial sea 0
3. ✅ **Suma:** Verifica operación 5 + 3 = 8
4. ✅ **Resta:** Verifica operación 10 - 4 = 6
5. ✅ **Multiplicación:** Verifica operación 7 × 6 = 42
6. ✅ **División:** Verifica operación 20 ÷ 4 = 5
7. ✅ **División por cero:** Verifica manejo de error

### Cobertura de Código

```
Calculator.vue: 90.47% de cobertura
- Statements: 90.47%
- Branches: 100%
- Functions: 85.71%
- Lines: 90.47%
```

## Funcionalidades

### Componente Calculator

- **Operaciones matemáticas básicas:** suma, resta, multiplicación, división
- **Validación de división por cero:** muestra mensaje de error
- **Función limpiar:** resetea todos los valores
- **Interfaz responsive:** se adapta a diferentes tamaños de pantalla
- **Diseño moderno:** gradientes, sombras y animaciones

## Capturas de Pantalla

### Interfaz de Usuario

![Calculator UI](screenshots/calculator-ui.png)

### Tests Pasando

![Tests Passing](screenshots/tests-passing.png)

### Cobertura de Código

![Code Coverage](screenshots/coverage-report.png)

## Video de Demostración

**URL del video:** [Agregar URL después de subirlo]

El video incluye:

- Explicación de TDD
- Walkthrough del código de tests
- Explicación del componente Vue
- Ejecución de tests en vivo
- Reporte de cobertura
- Demostración de la aplicación funcionando

## Proceso de Desarrollo (TDD)

### 1. Escribir Tests Primero

```javascript
it('debe sumar dos números correctamente', async () => {
  const wrapper = mount(Calculator)
  await wrapper.find('input[name="num1"]').setValue('5')
  await wrapper.find('input[name="num2"]').setValue('3')
  await wrapper.find('button.add').trigger('click')
  expect(wrapper.find('.result').text()).toBe('8')
})
```

### 2. Tests Fallan (Red)

```
❌ Calculator.vue does not exist
```

### 3. Implementar Código

```vue
<script setup>
const add = () => {
  result.value = Number(num1.value) + Number(num2.value)
}
</script>
```

### 4. Tests Pasan (Green)

```
✓ debe sumar dos números correctamente
```

### 5. Refactorizar

Mejorar el código manteniendo los tests en verde.

## Problemas Encontrados y Soluciones

### 1. Incompatibilidad de versiones Node.js

**Problema:** Vitest requería Node 20+ pero tenía instalado Node 18

**Solución:** Actualicé Node.js a v20.19.5 usando nvm

### 2. Conflicto de versiones vitest/coverage

**Problema:** `@vitest/coverage-v8` v4 incompatible con `vitest` v3

**Solución:** Ajusté versiones en package.json para que coincidieran (3.2.4)

### 3. Plugin de Vue no reconocido

**Problema:** Error "Install @vitejs/plugin-vue to handle .vue files"

**Solución:** Configuré correctamente `vite.config.js` con el plugin de Vue

### 4. Overflow en UI móvil

**Problema:** Calculadora se salía del viewport en pantallas grandes

**Solución:** Implementé CSS responsive con `width: 100%` y media queries

## Conclusiones

### Aprendizajes Técnicos

1. **TDD mejora la calidad del código** - Los tests actúan como especificación viva
2. **Vitest es más rápido que Jest** - Aprovecha Vite para HMR en tests
3. **Vue Test Utils simplifica testing** - API intuitiva para montar y probar componentes
4. **Cobertura alta da confianza** - 90%+ asegura que la mayoría del código está probado

### Ventajas de TDD en Vue.js

- Fuerza a pensar en la API del componente antes de implementarlo
- Previene bugs al validar casos edge (como división por cero)
- Facilita refactoring sin miedo a romper funcionalidad
- Los tests sirven como documentación ejecutable

### Desafíos Enfrentados

- Configurar el entorno de testing con versiones compatibles
- Entender la diferencia entre `mount()` y `shallowMount()`
- Manejar operaciones asíncronas con `async/await` en tests
- Diseñar UI responsive que funcione en desktop y mobile

### Aplicabilidad en Proyectos Reales

Este enfoque es ideal para:

- ✅ Componentes reutilizables de UI libraries
- ✅ Lógica de negocio compleja
- ✅ Validaciones de formularios
- ✅ Utilidades y helpers
- ❌ Prototipos rápidos o exploración de diseño visual

## Referencias

- [Vue.js Documentation](https://vuejs.org/)
- [Vitest Documentation](https://vitest.dev/)
- [Vue Test Utils](https://test-utils.vuejs.org/)
- [TDD by Example - Kent Beck](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530)

## Autor

**Javier Darder** - Estudiante de ATI2  
Cédula: 23626683  
Universidad Central de Venezuela

---

**Fecha:** Noviembre 2025
**Repositorio:** https://github.com/javdarder/ATI2-2024-23626683-poc  
**Branch:** reto5
