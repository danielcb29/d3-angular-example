import { Component, AfterViewInit } from '@angular/core';
import data from '../data';
import * as d3 from 'd3';

@Component({
    selector: 'app-circles',
    templateUrl: './circles.component.html',
    styleUrls: ['./circles.component.css']
})
export class CirclesComponent implements AfterViewInit {

    labelMessage = 'Put a SVG Circle here! :)';
    labelId = 'circles-label';

    circlesId = 'circles-example';
    svg = null;

    svgData = data.svgData;
    cirlcesData = data.cirlcesData;

    constructor() { }

    initSVG() {
        // TODO
    }

    addCircles() {
        // TODO
    }

    ngAfterViewInit() {
        this.initSVG();
        this.addCircles();
    }

}
