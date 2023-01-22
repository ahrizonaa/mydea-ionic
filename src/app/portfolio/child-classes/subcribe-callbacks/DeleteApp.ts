import { LibService } from './../../../services/lib.service';
import { AppAssistant } from '../../../services/AppAssistant';
import { App } from '../App';

export class DeleteApp {
  constructor(private lib: LibService) {}
  static success: (this: AppAssistant, app: App, res: any) => void = function (
    this,
    app,
    res
  ) {
    this.stagingApp = new App();
    if (res.deletedCount == 1) {
      (async () => {
        let toastr = await this.toast.create({
          message: `${app.name} Deleted.`,
          duration: 2000,
        });
        toastr.present();
      })();
      console.log(this, app);
      this.lib._.remove(this.apps, { _id: app._id });
      this.refresh(false);
      this.deleting = false;
      this.loading = false;
      //this.set(res.apps);
    } else {
      (async () => {
        let toastr = await this.toast.create({
          message: "Something went wrong. We'll take the blame",
          duration: 2000,
        });
        toastr.present();
      })();
    }
  };
}
