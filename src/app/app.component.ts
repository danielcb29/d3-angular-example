import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    svgData = [
        {
            height: 100,
            width: 100,
        }
    ];

    cirlceData = [{
        cx: 50,
        cy: 50,
        r: 40,
        stroke: 'black',
        strokeWidth: 3,
        fill: 'green'
    }];

    svg = null;

    constructor() {
    }

    initSVG() {
        this.svg = d3.select('.main')
            .selectAll('svg')
            .data(this.svgData)
            .enter()
            .append('svg')
            .attr('height', d => d.height)
            .attr('width', d => d.width);
    }

    addCircle() {
        this.svg
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
