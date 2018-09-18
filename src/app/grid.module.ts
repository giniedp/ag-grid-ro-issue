import { NgModule } from '@angular/core';
import { BaseComponentFactory, Ng2ComponentFactory } from 'ag-grid-angular';
import { GridDirective } from './grid.directive';

@NgModule({
  imports: [],
  declarations: [GridDirective],
  exports: [GridDirective],
})
export class GridModule {

  public static forRoot() {
    return {
      ngModule: GridModule,
      providers: [
        Ng2ComponentFactory,
        { provide: BaseComponentFactory, useExisting: Ng2ComponentFactory },
      ],
    };
  }
}
