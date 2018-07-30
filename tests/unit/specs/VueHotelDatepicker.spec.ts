import { shallowMount } from '@vue/test-utils';
import VueHotelDatepicker from '@/components/VueHotelDatepicker.vue';

describe('VueHotelDatepicker.vue', () => {
  it('start date prop is set', () => {
    const wrapper = shallowMount(VueHotelDatepicker);

    expect(wrapper.vm.$data.startDate).toBeInstanceOf(Date);
  });

  it('end date prop is set', () => {
    const wrapper = shallowMount(VueHotelDatepicker);

    expect(wrapper.vm.$data.endDate).toBeInstanceOf(Date);
  });
});
