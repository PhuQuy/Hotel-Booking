import { Component, OnInit } from '@angular/core';
import { of, forkJoin } from 'rxjs';
import { map, takeWhile, toArray, flatMap, take, filter } from 'rxjs/operators';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
    bookingF = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];

    freeBusinessRoom: number;
    freeEconomyRoom: number;

    useBusinessRoom: number;
    useEconomyRoom: number;

    totalBusinessRoom: number;
    totalEconomyRoom: number;
    total: number;

    constructor() { }

    ngOnInit(): void {
    }

    compareFn = (a, b) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        }
        return 0;
    }

    compareSm = (a, b) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
        return 0;
    }

    checkResult = () => {
        this.totalBusinessRoom = 0;
        this.useBusinessRoom = 0;

        this.totalEconomyRoom = 0;
        this.useEconomyRoom = 0;

        this.total = 0;
        let bookingF = JSON.parse(JSON.stringify(this.bookingF));
        of(this.bookingF).pipe(
            map(items => items.sort(this.compareFn)),
            flatMap(item => item),
            takeWhile(val => this.checkFreeBusinessCondition(val)),
            take(this.freeBusinessRoom)
        ).subscribe(booking => {
            this.useBusinessRoom++;
            this.totalBusinessRoom += booking;
            bookingF.splice(bookingF.indexOf(booking), 1);
            this.total += this.totalBusinessRoom;
        });
        bookingF = bookingF.filter(item => item < 100);
        of(bookingF).pipe(
            map(items => items.sort(this.compareFn)),
            flatMap(item => item),
            take(this.freeEconomyRoom)
        ).subscribe(bookingX => {
            this.useEconomyRoom++;
            // tslint:disable-next-line: radix
            this.totalEconomyRoom += parseInt(bookingX + '');
        });
        this.total = this.totalEconomyRoom + this.totalBusinessRoom;
    }

    checkFreeBusinessCondition(val) {
        if (this.freeBusinessRoom > this.bookingF.filter(item => item >= 100).length &&
            (this.freeBusinessRoom + this.freeEconomyRoom > this.bookingF.length)) {
            return val >= 100;
        } else {
            return true;
        }
    }
}
