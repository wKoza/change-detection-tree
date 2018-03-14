import {ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Input} from '@angular/core';
import {Lifecycle} from "../../utils/Lifecycle";
import {TreeNode} from "../../tree/base.class";

@Component({
  selector: 'button-click',
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Lifecycle({ defaultName: true })
export class ButtonClickComponent extends TreeNode {

  @Input() count: { value: number };
  private cd: ChangeDetectorRef;
  private appRef: ApplicationRef;

  constructor(context: Injector) {
    super(context);
    this.cd = context.get(ChangeDetectorRef);
    this.appRef = context.get(ApplicationRef);
  }

  public addCount() {
    this.count.value++;
    //this.cd.detectChanges();
    this.appRef.tick();
  }

}
