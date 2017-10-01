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

    constructor() { }

    ngAfterViewInit() {
    }

}
