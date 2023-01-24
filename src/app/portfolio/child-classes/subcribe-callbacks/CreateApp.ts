import { App } from '../App';
import { AppAssistant } from '../../../services/AppAssistant';
import { AuthService } from '../../../services/auth.service';
export class CreateApp {
  constructor(public auth: AuthService) {}
  static success: (
    this: AppAssistant,
    appname: string,
    originator: string,
    res: any
  ) => void = function (this, appname, originator: any, res) {
    this.stagingApp = new App();

    if (res.insertedId && res.insertedId.length) {
      (async () => {
        let toastr = await this.toast.create({
          message: `Congratz ${this.auth.user.displayname}, this is the beginning of ${appname}!`,
          duration: 2000,
        });
        toastr.present();
      })();
      this.refresh();
      this.creating = false
      this.views.newapp = false;
    } else {
      (async () => {
        let toastr = await this.toast.create({
          message: "Something went wrong. We'll take theblame",
          duration: 2000,
        });
        toastr.present();
      })();
      this.creating = false
      this.views.newapp = false;
    }
  };
}
