import { IgcPropertyEditorPanelModule } from 'igniteui-webcomponents-layouts';
import { IgcCategoryChartModule } from 'igniteui-webcomponents-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-webcomponents-core';
import { IgcPropertyEditorPanelComponent, IgcPropertyEditorPropertyDescriptionComponent } from 'igniteui-webcomponents-layouts';
import { IgcCategoryChartComponent } from 'igniteui-webcomponents-charts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

import 'igniteui-webcomponents/themes/light/bootstrap.css';
import { defineAllComponents } from 'igniteui-webcomponents';
import { ModuleManager } from 'igniteui-webcomponents-core';
defineAllComponents();

ModuleManager.register(
    IgcPropertyEditorPanelModule,
    IgcCategoryChartModule
);

export class Sample {

    private propertyEditorPanel1: IgcPropertyEditorPanelComponent
    private xAxisInvertedEditor: IgcPropertyEditorPropertyDescriptionComponent
    private yAxisInvertedEditor: IgcPropertyEditorPropertyDescriptionComponent
    private chart: IgcCategoryChartComponent

    private _bind: () => void;

    constructor() {
        var propertyEditorPanel1 = this.propertyEditorPanel1 = document.getElementById('propertyEditorPanel1') as IgcPropertyEditorPanelComponent;
        var xAxisInvertedEditor = this.xAxisInvertedEditor = document.getElementById('XAxisInvertedEditor') as IgcPropertyEditorPropertyDescriptionComponent;
        var yAxisInvertedEditor = this.yAxisInvertedEditor = document.getElementById('YAxisInvertedEditor') as IgcPropertyEditorPropertyDescriptionComponent;
        var chart = this.chart = document.getElementById('chart') as IgcCategoryChartComponent;

        this._bind = () => {
            propertyEditorPanel1.componentRenderer = this.renderer
            propertyEditorPanel1.target = this.chart
            chart.dataSource = this.countryRenewableElectricity
        }
        this._bind();
    }

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }
    

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }


}

new Sample();
