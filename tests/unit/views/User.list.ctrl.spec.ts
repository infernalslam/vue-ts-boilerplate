import UserListController from '@/views/User/controllers/user.list.ctrl';

describe('User List Controller', () => {
  it('On init', async () => {
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
    const controller = new UserListController(null, mockService);
    await controller.fetchUsers();
    expect(mockService.getUsers).toHaveBeenCalled();
    expect(controller.viewModel.users.length).toEqual(4);
    expect(controller.viewModel.users).toMatchObject(mockService.getUsers());
  });
});
