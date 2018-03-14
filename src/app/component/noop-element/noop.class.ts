import {Injector, Input} from "@angular/core";
import {TreeNode} from "../../tree/base.class";

interface Limit {
  deep: number;
  button: number;
  input: number;
}

export class Noop extends TreeNode {

  @Input() limit: Partial<Limit> = {};
  @Input() count: { value: number };
  public countList: number[] = [];
  public savedItems: boolean;
  public setButton: boolean;
  public setInput: boolean;

  constructor(context: Injector) {
    super(context);
  }

  public ngOnInit() {
    this.limit.deep--;
    const deep = this.limit.deep;
    const length = Math.ceil(Math.random() * (deep));
    this.setButton = this.existButton();
    this.setInput = this.existInput();
    this.savedItems = true;

    if (length > 0) {
      this.countList = Array(length).fill(0);
    }

  }

  private existButton() {
    if (this.heardOrTails() && this.limit.button > 0) {
      this.limit.button--;
      return true;
    } else {
      return false;
    }
  }

  private existInput() {
    if (this.heardOrTails() && this.limit.input > 0) {
      this.limit.input--;
      return true;
    } else {
      return false;
    }
  }

  private heardOrTails() {
    return Math.random() >= 0.5;
  }

}
