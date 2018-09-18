import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChange,
} from '@angular/core';

import {
  Grid,
  GridApi,
  GridOptions,
} from 'ag-grid-community';

import { Ng2FrameworkComponentWrapper, Ng2FrameworkFactory } from 'ag-grid-angular';

@Directive({
  selector: '[appGrid]',
  providers: [
    Ng2FrameworkFactory,
    Ng2FrameworkComponentWrapper,
  ],
  host: {
    '[class.ag-grid]': 'true ',
    '[class.ag-theme-fresh]': '!darkTheme',
    '[class.ag-theme-dark]': '!!darkTheme',
  },
})
export class GridDirective implements OnChanges, OnDestroy, AfterViewInit {

  @Input()
  public set appGrid(value: GridOptions) {
    this.gridOptions = value;
  }

  public get darkTheme(): boolean {
    return false;
  }

  private get el(): HTMLElement {
    return this.elRef.nativeElement;
  }

  private gridOptions: GridOptions;
  private grid: Grid;
  private gridApi: GridApi;

  constructor(
    private elRef: ElementRef,
    private ng2FrameworkFactory: Ng2FrameworkFactory,
  ) {

  }

  public ngAfterViewInit() {
    Promise.resolve().then(() => this.createGrid());
  }

  public ngOnChanges(ch) {
    this.recreate(ch.appGrid);
  }

  public ngOnDestroy() {
    this.destroyGrid();
  }

  private recreate(change: SimpleChange) {
    if (change && this.grid) {
      this.createGrid();
    }
  }

  private createGrid() {
    this.destroyGrid();
    this.grid = new Grid(this.el, this.gridOptions, {
      frameworkFactory: this.ng2FrameworkFactory,
    });
    this.gridApi = this.gridOptions.api;
  }

  private destroyGrid() {
    if (this.gridApi) {
      this.gridApi.destroy();
      this.grid = null;
      this.gridApi = null;
    }
  }
}
