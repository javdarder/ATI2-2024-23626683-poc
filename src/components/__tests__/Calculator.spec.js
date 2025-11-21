import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Calculator from '../Calculator.vue'

describe('Calculator Component', () => {
  it('debe renderizar correctamente', () => {
    const wrapper = mount(Calculator)
    expect(wrapper.exists()).toBe(true)
  })

  it('debe mostrar valor inicial de 0', () => {
    const wrapper = mount(Calculator)
    expect(wrapper.find('.result').text()).toBe('0')
  })

  it('debe sumar dos números correctamente', async () => {
    const wrapper = mount(Calculator)

    await wrapper.find('input[name="num1"]').setValue('5')
    await wrapper.find('input[name="num2"]').setValue('3')
    await wrapper.find('button.add').trigger('click')

    expect(wrapper.find('.result').text()).toBe('8')
  })

  it('debe restar dos números correctamente', async () => {
    const wrapper = mount(Calculator)

    await wrapper.find('input[name="num1"]').setValue('10')
    await wrapper.find('input[name="num2"]').setValue('4')
    await wrapper.find('button.subtract').trigger('click')

    expect(wrapper.find('.result').text()).toBe('6')
  })

  it('debe multiplicar dos números correctamente', async () => {
    const wrapper = mount(Calculator)

    await wrapper.find('input[name="num1"]').setValue('7')
    await wrapper.find('input[name="num2"]').setValue('6')
    await wrapper.find('button.multiply').trigger('click')

    expect(wrapper.find('.result').text()).toBe('42')
  })

  it('debe dividir dos números correctamente', async () => {
    const wrapper = mount(Calculator)

    await wrapper.find('input[name="num1"]').setValue('20')
    await wrapper.find('input[name="num2"]').setValue('4')
    await wrapper.find('button.divide').trigger('click')

    expect(wrapper.find('.result').text()).toBe('5')
  })

  it('debe manejar división por cero', async () => {
    const wrapper = mount(Calculator)

    await wrapper.find('input[name="num1"]').setValue('10')
    await wrapper.find('input[name="num2"]').setValue('0')
    await wrapper.find('button.divide').trigger('click')

    expect(wrapper.find('.result').text()).toContain('Error')
  })
})
