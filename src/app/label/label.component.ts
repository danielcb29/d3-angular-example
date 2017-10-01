import { Component, Input, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-label',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.css']
})
export class LabelComponent implements AfterViewInit {

    @Input() id;
    @Input() message;

    constructor() { }

    buildLabel(element, text) {
        element.append('h1')
            .text(text)
            .style('font-family', 'fantasy');
    }

    buildElement() {
        const element = d3.select(`#${this.id}`);
        this.buildLabel(element, this.message);
    }

    ngAfterViewInit() {
        this.buildElement();
    }

}
