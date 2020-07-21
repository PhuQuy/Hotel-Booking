import { Component, OnInit } from '@angular/core';
import { RoomService } from '@services/room.service';
import { Room } from '@models/room.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    rooms: Array<Room>;
    constructor(private roomService: RoomService) { }

    ngOnInit(): void {
        this.getAllRooms();
    }

    getAllRooms = () => {
        this.roomService.getAllRooms().subscribe(data => {
            this.rooms = data;
        });
    }

    getRoomStatus = (status) => {
        switch (status) {
            case 'In Use':
                return 'status-going';

            case 'Available':
                return 'status-apr';

            default:
                return 'status-going';
        }
    }
}
