import { AppAssistant } from '../../../services/AppAssistant';
export class RefreshApps {
  static success: (this: AppAssistant, refresher: boolean, res: any) => void =
    function (this, refresher, res) {
      if (refresher) {
        this.refresher.nativeElement.complete();
      }
      this.set(res);
    };
}
