import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [],
  imports: [ HttpClientModule ],
  exports: []
})
export class NvCoreModule {
  static provideCoreModule(): ModuleWithProviders {
        return {
            ngModule: NvCoreModule
        };
    }
}
