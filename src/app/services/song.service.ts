import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class SongService {
    public getSong(): Observable<ISong> {
        return new Observable<ISong>(observer => {
            observer.next({
                title: 'My Song',
                parts: [
                    { 
                        id: 1,
                        title: 'Verse 1',
                        text: 'Verse Text'
                    },
                    {
                        id: 2,
                        title: 'Chorus',
                        text: 'Chorus Text'
                    }
                ],
                arrangements: [
                    {
                        title: 'Author',
                        order: [
                            { partId: 1, orderPosition: 1 },
                            { partId: 2, orderPosition: 2 },
                            { partId: 2, orderPosition: 3 }
                        ]
                    }
                ]
            })
        });
    }
}

export interface ISongPart {
    id: number;
    title: string;
    text: string;
}

export interface ISongPartOrder {
    orderPosition: number;
    partId: number;
}

export interface ISongArrangement {
    title: string;
    order: ISongPartOrder[];
}

export interface ISong {
    title: string;
    parts: ISongPart[];
    arrangements: ISongArrangement[];
}