import { DataItem, Data } from './SampleData';
import { IgcPropertyEditorModule } from 'igniteui-webcomponents-grids';
import { IgcCategoryChartModule } from 'igniteui-webcomponents-charts';
import { ComponentRenderer, PropertyEditorDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-webcomponents-core';
import { IgcPropertyEditorComponent } from 'igniteui-webcomponents-grids';
import { IgcCategoryChartComponent } from 'igniteui-webcomponents-charts';

import { ModuleManager } from 'igniteui-webcomponents-core';

ModuleManager.register(
    IgcPropertyEditorModule,
    IgcCategoryChartModule
);

export class Sample {

    private propertyEditor1: IgcPropertyEditorComponent
    private chart: IgcCategoryChartComponent

    constructor() {
        var propertyEditor1 = this.propertyEditor1 = document.getElementById('propertyEditor1') as IgcPropertyEditorComponent;
        var chart = this.chart = document.getElementById('chart') as IgcCategoryChartComponent;

        propertyEditor1.componentRenderer = this.renderer
        propertyEditor1.target = this.chart
        chart.dataSource = this.data
    }

    private _data: Data = null;
    public get data(): Data {
        if (this._data == null)
        {
            this._data = new Data();
        }
        return this._data;
    }
    

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer
    }


}

new Sample();
