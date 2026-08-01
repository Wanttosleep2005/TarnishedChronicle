import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ProgressRows from './ProgressRows.vue'

describe('ProgressRows', () => {
  it('filters rows by completion state', async () => {
    const wrapper = mount(ProgressRows, {
      props: {
        emptyLabel: '没有结果',
        entries: [
          { id: 1, name: '已完成的 Boss', completed: true },
          { id: 2, name: '未完成的 Boss', completed: false }
        ]
      }
    })

    await wrapper.get('button:nth-child(2)').trigger('click')
    expect(wrapper.text()).toContain('已完成的 Boss')
    expect(wrapper.text()).not.toContain('未完成的 Boss')
  })
})
