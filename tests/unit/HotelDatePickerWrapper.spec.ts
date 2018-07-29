import { shallowMount } from '@vue/test-utils';
import HotelDatePickerWrapper from '@/HotelDatePickerWrapper.vue';
import { Dayjs } from 'dayjs'

describe('HotelDatePickerWrapper.vue', () => {
  it('sets start date when created', () => {
    const wrapper = shallowMount(HotelDatePickerWrapper);

    expect(wrapper.vm.$data.range.start).toBeInstanceOf(Dayjs);
  });
});
