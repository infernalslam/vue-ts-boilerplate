import UserCreateController from '@/views/User/controllers/user.create.ctrl';

describe('User Create Controller', () => {
  it('On init', async () => {
    const mockService = {};
    const controller = new UserCreateController(null, mockService);

    expect(controller.viewModel.createdUser).toEqual('');
    controller.userCreate('hello');
    expect(controller.viewModel.createdUser).toEqual('hello');
  });
});
