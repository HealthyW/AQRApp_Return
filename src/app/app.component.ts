import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, AnimationController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  constructor(private animationCtrl: AnimationController) {}

  myCustomPageTransition = (baseEl: any, opts?: any) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;

    const fadeIn = this.animationCtrl.create()
      .addElement(enteringEl)
      .duration(250)
      .easing('ease-in')
      .fromTo('opacity', 0, 1);

    const fadeOut = this.animationCtrl.create()
      .addElement(leavingEl)
      .duration(250)
      .easing('ease-out')
      .fromTo('opacity', 0.5, 0);

    return this.animationCtrl.create()
      .addAnimation([fadeIn, fadeOut]);
  }
}
