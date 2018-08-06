import UserProvider from '@/resources/user_provider';

interface IUserCreateController {
  init(): void;
}

class UserCreateController implements IUserCreateController {
  private userService;
  constructor(component?: any, userProvider?: UserProvider) {
    this.userService = userProvider || new UserProvider(process.env.VUE_APP_API);
  }

  public init() {
    console.log('User Create Init');
  }
}

export default UserCreateController;
