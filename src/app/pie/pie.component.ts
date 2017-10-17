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
        this.svg = d3.select(`#${this.pieId}`)
            .selectAll('svg')
            .data(this.svgData)
            .enter()
            .append('svg')
            .attr('height', d => d.height)
            .attr('width', d => d.width);
    }

    initPieElements() {
        const radius = Math.min(this.svg.attr('width'), this.svg.attr('height')) / 2;

        this.pieGroup = this.svg
            .append('g')
            .attr('transform', d => `translate(${d.width / 2}, ${d.height / 2})`);

        this.pie = d3.pie()
            .sort(null)
            .value(d => d.population);

        this.pieArc = d3.arc()
            .outerRadius(radius)
            .innerRadius(0);
    }

    buildPie() {

        const pieSlice = this.pieGroup.selectAll('.arc')
            .data(this.pie(this.pieData))
            .enter().append('g')
            .attr('class', 'arc');

        pieSlice.append('path')
            .attr('d', this.pieArc)
            .attr('fill', d => this.color(d.data.age));

        pieSlice.append('text')
            .attr('transform', d => `translate(${this.pieArc.centroid(d)})`)
            .text(d => d.data.age);

    }

    ngAfterViewInit() {
        this.initSVG();
        this.initPieElements();
        this.buildPie();
    }

}
