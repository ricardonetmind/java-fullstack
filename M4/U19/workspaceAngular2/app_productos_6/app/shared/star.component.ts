import { Component, OnChanges, Input, 
         Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    @Input() precio: number;

    @Output() ratingClicked: EventEmitter<string> = 
                 new EventEmitter<string>();

    ngOnChanges(sc:any): void {
        console.log(sc);
        this.starWidth = this.rating * 86 / 5;
    }
    onClick() {
        this.ratingClicked.emit(`El usuario ha valorado ${this.rating}`);
    }
}