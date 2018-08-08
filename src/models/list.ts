interface IList {
  isChecked: boolean;
}

class List implements IList {
  public isChecked: boolean;
  constructor() {
    this.isChecked = false;
  }
}

export default List;
