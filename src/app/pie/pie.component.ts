import { Component, AfterViewInit } from '@angular/core';
import data from '../data';
import * as d3 from 'd3';

@Component({
    selector: 'app-pie',
    templateUrl: './pie.component.html',
    styleUrls: ['./pie.component.css']
})
export class PieComponent implements AfterViewInit {

    labelMessage = 'Put a d3 Pie here! :)';
    labelId = 'pie-label';

    pieId = 'pie-example';

    svgData = data.svgData;
    pieData = data.pieData;

    svg = null;
    pieGroup = null;
    pie = null;
    pieArc = null;
    color = d3.scaleOrdinal(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56']);

    constructor() { }

    initSVG() {
        // Master
    }

    initPieElements() {
        // Master
    }

    buildPie() {
        // Master

    }

    ngAfterViewInit() {
        this.initSVG();
        this.initPieElements();
        this.buildPie();
    }

}
