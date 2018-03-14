import {ChangeDetectionStrategy, Component, Injector} from '@angular/core';
import {Noop} from "./noop.class";
import {Lifecycle} from "../../utils/Lifecycle";

@Component({
  selector: 'noop-element',
  templateUrl: './noop-element.component.html',
  styleUrls: ['./noop-element.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Lifecycle()
export class NoopElementComponent extends Noop {

  constructor(context: Injector) {
    super(context);
  }

}
