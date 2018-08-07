import { shallowMount } from '@vue/test-utils';
import UserIndexComponent from '@/views/User/controllers/user.index.ctrl';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const mockService = {
      getUsers: jest.fn().mockReturnValue([
        {
          firstName: 'Wisarut',
          lastName: 'Phuv',
          age: 18,
        },
        {
          firstName: 'Jack',
          lastName: 'Ma',
          age: 42,
        },
        {
          firstName: 'Steve',
          lastName: 'Jobs',
          userName: 'apple007',
        },
        {
          firstName: 'Nati',
          age: 33,
          role: 'Manager',
        },
      ]),
    };
    const component = new UserIndexComponent(null, mockService);
    expect(component.title).toEqual('');
    // console.log(component);
    // console.log(component.users);
    // component.created();
    expect(mockService.getUsers).toHaveBeenCalled();
  });
});
