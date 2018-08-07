import { Component, Vue } from 'vue-property-decorator';
import UserProvider, { IUserProvider } from '@/resources/user_provider';
import UserModel from '@/classes/models/user';

interface IUserIndexComponent {
  created(): void;
  saveChange(data: string): void;
  fetchUsers(): Promise<any>;
}

@Component
class UserIndexComponent extends Vue implements IUserIndexComponent {
  public title: string = '';
  public text: string = '';
  public users: UserModel[] = [];
  private userService: UserProvider;

  // constructor(component?: any, userProvider?: UserProvider) {
  constructor(vue: any, userProvider?: IUserProvider) {
    super();
    console.log(vue);
    console.log(userProvider);
    this.userService = userProvider || new UserProvider(process.env.VUE_APP_API);
    // this.users = [];
  }

  public created() {
    console.log('index created');
    this.fetchUsers();
  }

  public saveChange(data: string) {
    this.title = data;
  }

  public fetchUsers: () => Promise<any> = async () => {
    this.users = (await this.userService.getUsers()).map((user) => {
      return new UserModel(user);
    });
  }
  // public async fetchUsers(): Promise<any> {
    // this.users = (await this.userService.getUsers()).map((user) => {
    //   return new UserModel(user);
    // });
  // }
}

export default UserIndexComponent;
