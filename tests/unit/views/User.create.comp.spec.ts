import { shallowMount } from '@vue/test-utils';
import UserCreate from '@/views/User/Create.vue';

describe('User : Create.vue', () => {
  it('init component properly', () => {
    // const onBtnClick = sinon.stub();
    const onBtnClick = jest.fn().mockReturnValue('');
    const wrapper = shallowMount(UserCreate, {
      methods: {
        onBtnClick,
      },
    });

    wrapper.find('#btn').trigger('click');
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
    expect(onBtnClick).toHaveBeenCalled();
  });
});
