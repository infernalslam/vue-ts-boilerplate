import { shallowMount } from '@vue/test-utils';
import UserList from '@/views/User/List.vue';

describe('User : List.vue', () => {
  it('init component properly', () => {
    const wrapper = shallowMount(UserList);

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.contains('ul')).toBe(true);

    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAll('li')).toHaveLength(4);
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
