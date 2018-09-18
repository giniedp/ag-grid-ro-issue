import { Component, DebugElement, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GridOptions } from 'ag-grid-community';

import { GridModule } from './grid.module';
import { GridDirective } from './grid.directive';

@Component({
  template: `<div [appGrid]="gridOptions"> </div>`,
})
class TestComponent {
  public gridOptions: GridOptions = {
    columnDefs: [{
      headerName: 'A', field: 'A',
    }, {
      headerName: 'B', field: 'B',
    }, {
      headerName: 'C', field: 'C',
    }, {
      headerName: 'D', field: 'D',
    }, {
      headerName: 'E', field: 'E',
    }, {
      headerName: 'F', field: 'F',
    }, {
      headerName: 'G', field: 'G',
    }, {
      headerName: 'H', field: 'H',
    }, {
      headerName: 'I', field: 'I',
    }, {
      headerName: 'J', field: 'J',
    }, {
      headerName: 'K', field: 'K',
    }, {
      headerName: 'L', field: 'L',
    }, {
      headerName: 'M', field: 'M',
    }, {
      headerName: 'N', field: 'N',
    }, {
      headerName: 'O', field: 'O',
    }, {
      headerName: 'P', field: 'P',
    }, {
      headerName: 'Q', field: 'Q',
    }, {
      headerName: 'R', field: 'R',
    }],
  };

  @ViewChild(GridDirective)
  public grid: GridDirective;

}

describe('core/grid', () => {

  let fixture: ComponentFixture<TestComponent>;
  let testComp: TestComponent;
  let comp: GridDirective;
  let compElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [

        GridModule,
        GridModule.forRoot(),
      ],
      declarations: [
        TestComponent,
      ],
    });
    TestBed.compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    testComp = fixture.componentInstance;
    compElement = fixture.debugElement.query(By.directive(GridDirective));
    comp = compElement.componentInstance;
  });

  describe('common', () => {
    for (let i = 0; i < 100; i++) {
      it(`has a grid instance ${i}`, async(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(testComp.gridOptions.api).toBeDefined();
        });
      }));
    }
  });
});
