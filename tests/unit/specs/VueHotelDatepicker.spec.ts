import { shallowMount, Wrapper } from '@vue/test-utils'
import VueHotelDatepicker from '@/components/VueHotelDatepicker.vue'

describe('VueHotelDatepicker mounted', () => {
  let wrapper: Wrapper<any>

  beforeEach(() => {
    wrapper = shallowMount(VueHotelDatepicker, {
      propsData: {
        startDate: new Date(),
        endDate: new Date(),
        request: new Request('http://example.com')
      }
    })
  })

  it('sets default data', () => {
    expect(wrapper.vm.startDate).toBeInstanceOf(Date)
    expect(wrapper.vm.endDate).toBeInstanceOf(Date)
    expect(wrapper.vm.request).toBeInstanceOf(Request)
    expect(wrapper.vm.name).toMatch('VueHotelDatepicker')
    expect(wrapper.vm.searching).toBeFalsy()
    expect(wrapper.vm.results).toHaveLength(0)
  })
})
