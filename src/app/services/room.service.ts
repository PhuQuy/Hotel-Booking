import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Room } from '@models/room.model';

@Injectable({
    providedIn: 'root'
})
export class RoomService {

    constructor(protected baseService: BaseService) { }

    getAllRooms = (): Observable<Room[]> => {
        return this.baseService.getFile('/assets/data/room.json');
    }
}
