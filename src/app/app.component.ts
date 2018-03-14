import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector} from '@angular/core';
import {Lifecycle} from "./utils/Lifecycle";
import {TreeNode} from "./tree/base.class";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subscription} from "rxjs/Subscription";
import 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Lifecycle({ defaultName: true })
export class AppComponent extends TreeNode {

  public countTree$ = new BehaviorSubject<{ value: number }>({ value: 0 });
  private cd: ChangeDetectorRef;
  private sub$: Subscription;
  private timer;

  constructor(context: Injector) {
    super(context);
    this.cd = context.get(ChangeDetectorRef);
    this.sub$ = this.countTree$.subscribe(() => {
      clearInterval(this.timer);
      this.timer = setTimeout(() => this.cd.detectChanges(), 150);
    });
  }
}
