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
        this.svg = d3.select(`#${this.circlesId}`)
            .data(this.svgData)
            .append('svg')
            .attr('height', d => d.height)
            .attr('width', d => d.width);
    }

    addCircles() {
        this.svg
            .selectAll('svg')
            .data(this.cirlcesData)
            .enter()
            .append('circle')
            .attr('cx', d => d.cx)
            .attr('cy', d => d.cy)
            .attr('r', d => d.r)
            .attr('stroke', d => d.stroke)
            .attr('stroke-width', d => d.strokeWidth)
            .attr('fill', d => d.fill);
    }

    ngAfterViewInit() {
        this.initSVG();
        this.addCircles();
    }

}
