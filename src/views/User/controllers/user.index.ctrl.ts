import UserProvider from '@/resources/user_provider';

interface IUserIndexController {
  init(): void;
}

class UserIndexController implements IUserIndexController {
  private userService: UserProvider;
  constructor(component?: any, userProvider?: UserProvider) {
    this.userService = userProvider || new UserProvider(process.env.VUE_APP_API);
  }

  public init(): void {
    console.log('User Index Init');
  }
}

export default UserIndexController;
