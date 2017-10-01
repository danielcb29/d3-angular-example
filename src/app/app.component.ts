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
            height: 300,
            width: 500,
        }
    ];

    cirlceData = [{
        cx: 100,
        cy: 150,
        r: 50,
        stroke: 'black',
        strokeWidth: 1,
        fill: '#f9dbe0'
    },
    {
        cx: 250,
        cy: 150,
        r: 50,
        stroke: 'black',
        strokeWidth: 1,
        fill: '#d1efc9'
    }];

    svgCircle = null;

    constructor() {
    }

    buildLabel(element, text) {
        element.append('h1')
            .text(text)
            .style('font-family', 'fantasy');
    }

    circleLabel() {
        const circleLabel = d3.select('#circle-label');
        this.buildLabel(circleLabel, 'Put a SVG Circle here! :)');
    }

    pieLabel() {
        const pieLable = d3.select('#pie-label');
        this.buildLabel(pieLable, 'Put a d3 Pie here! :)')
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
        // Labels
        this.circleLabel();
        this.pieLabel();
        // Examples
        this.initSVG();
        this.addCircle();
    }
}
