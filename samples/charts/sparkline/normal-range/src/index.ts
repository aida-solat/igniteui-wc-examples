import { IgcPropertyEditorPanelModule } from 'igniteui-webcomponents-layouts';
import { IgcSparklineModule } from 'igniteui-webcomponents-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, SparklineDescriptionModule } from 'igniteui-webcomponents-core';
import { IgcPropertyEditorPanelComponent, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
import { IgcSparklineComponent } from 'igniteui-webcomponents-charts';
import { SparklineMixedDataItem, SparklineMixedData } from './SparklineMixedData';

import 'igniteui-webcomponents/themes/light/bootstrap.css';
import { defineAllComponents } from 'igniteui-webcomponents';
import { ModuleManager } from 'igniteui-webcomponents-core';
defineAllComponents();

ModuleManager.register(
    IgcPropertyEditorPanelModule,
    IgcSparklineModule
);

export class Sample {

    private propertyEditorPanel1: IgcPropertyEditorPanelComponent
    private normalRangeVisibilityEditor: IgcPropertyEditorPropertyDescriptionComponent
    private normalRangeMinimumEditor: IgcPropertyEditorPropertyDescriptionComponent
    private normalRangeMaximumEditor: IgcPropertyEditorPropertyDescriptionComponent
    private chart: IgcSparklineComponent

    private _bind: () => void;

    constructor() {
        var propertyEditorPanel1 = this.propertyEditorPanel1 = document.getElementById('propertyEditorPanel1') as IgcPropertyEditorPanelComponent;
        var normalRangeVisibilityEditor = this.normalRangeVisibilityEditor = document.getElementById('NormalRangeVisibilityEditor') as IgcPropertyEditorPropertyDescriptionComponent;
        var normalRangeMinimumEditor = this.normalRangeMinimumEditor = document.getElementById('NormalRangeMinimumEditor') as IgcPropertyEditorPropertyDescriptionComponent;
        var normalRangeMaximumEditor = this.normalRangeMaximumEditor = document.getElementById('NormalRangeMaximumEditor') as IgcPropertyEditorPropertyDescriptionComponent;
        var chart = this.chart = document.getElementById('chart') as IgcSparklineComponent;

        this._bind = () => {
            propertyEditorPanel1.componentRenderer = this.renderer
            propertyEditorPanel1.target = this.chart
            chart.dataSource = this.sparklineMixedData
        }
        this._bind();
    }

    private _sparklineMixedData: SparklineMixedData = null;
    public get sparklineMixedData(): SparklineMixedData {
        if (this._sparklineMixedData == null)
        {
            this._sparklineMixedData = new SparklineMixedData();
        }
        return this._sparklineMixedData;
    }
    

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            SparklineDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }


}

new Sample();
