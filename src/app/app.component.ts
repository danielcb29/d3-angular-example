import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import * as d3 from 'd3';
import data from './data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    svgData = data.svgData;
    cirlceData = data.cirlceData;
    svgCircle = null;

    constructor() {
    }

    initSVG() {
        this.svgCircle = d3.select('#circle-example')
            .selectAll('svg')
            .data(this.svgData)
            .enter()
            .append('svg')
            .attr('height', d => d.height)
            .attr('width', d => d.width);
    }

    addCircle() {
        this.svgCircle
            .selectAll('svg')
            .data(this.cirlceData)
            .enter()
            .append('circle')
            .attr('cx', d => d.cx)
            .attr('cy', d => d.cy)
            .attr('r', d => d.r)
            .attr('stroke', d => d.stroke)
            .attr('stroke-width', d => d.strokeWidth)
            .attr('fill', d => d.fill);
    }

    ngOnInit() {
        this.initSVG();
        this.addCircle();
    }
}
