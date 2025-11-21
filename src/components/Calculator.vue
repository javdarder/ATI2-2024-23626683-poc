<script setup>
import { ref } from 'vue'

const num1 = ref('')
const num2 = ref('')
const result = ref(0)

const add = () => {
  result.value = Number(num1.value) + Number(num2.value)
}

const subtract = () => {
  result.value = Number(num1.value) - Number(num2.value)
}

const multiply = () => {
  result.value = Number(num1.value) * Number(num2.value)
}

const divide = () => {
  if (Number(num2.value) === 0) {
    result.value = 'Error: División por cero'
  } else {
    result.value = Number(num1.value) / Number(num2.value)
  }
}

const clear = () => {
  num1.value = ''
  num2.value = ''
  result.value = 0
}
</script>

<template>
  <div class="calculator">
    <h2>Calculadora TDD - Vue.js</h2>

    <div class="inputs">
      <input type="number" name="num1" v-model="num1" placeholder="Número 1" inputmode="decimal" />
      <input type="number" name="num2" v-model="num2" placeholder="Número 2" inputmode="decimal" />
    </div>

    <div class="buttons">
      <button class="add" @click="add">+</button>
      <button class="subtract" @click="subtract">−</button>
      <button class="multiply" @click="multiply">×</button>
      <button class="divide" @click="divide">÷</button>
    </div>

    <div class="result">
      {{ result }}
    </div>

    <button class="clear" @click="clear">Limpiar</button>
  </div>
</template>

<style scoped>
.calculator {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  border: 3px solid #42b883;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

h2 {
  text-align: center;
  color: #35495e;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 700;
}

.inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

input {
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  border: 3px solid #42b883;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  color: #35495e;
  background: white;
  transition: all 0.3s;
}

/* Ocultar flechitas de los inputs number */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}

input::placeholder {
  color: #a0a0a0;
  font-weight: 400;
}

input:focus {
  outline: none;
  border-color: #35495e;
  box-shadow: 0 0 0 4px rgba(66, 184, 131, 0.2);
  transform: translateY(-2px);
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

button {
  width: 100%;
  padding: 1.2rem;
  font-size: 1.8rem;
  font-weight: bold;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 0 #35a372;
}

button:hover {
  background: #35a372;
  transform: translateY(-2px);
  box-shadow: 0 6px 0 #2d8a5f;
}

button:active {
  transform: translateY(2px);
  box-shadow: 0 2px 0 #2d8a5f;
}

.result {
  width: 100%;
  font-size: 2.5rem;
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  font-weight: bold;
  color: white;
  margin-bottom: 1.5rem;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-word;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.clear {
  width: 100%;
  background: #e74c3c;
  font-size: 1.2rem;
  box-shadow: 0 4px 0 #c0392b;
}

.clear:hover {
  background: #c0392b;
  box-shadow: 0 6px 0 #a93226;
}

.clear:active {
  box-shadow: 0 2px 0 #a93226;
}

/* Responsive para pantallas más pequeñas */
@media (max-width: 600px) {
  .calculator {
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  input {
    font-size: 1rem;
    padding: 0.8rem;
  }

  button {
    font-size: 1.4rem;
    padding: 1rem;
  }

  .result {
    font-size: 2rem;
    padding: 1rem;
    min-height: 60px;
  }
}
</style>
