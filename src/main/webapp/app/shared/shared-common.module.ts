import { NgModule } from '@angular/core';

import { GmbappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GmbappSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GmbappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GmbappSharedCommonModule {}
