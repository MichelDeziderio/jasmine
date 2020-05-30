import { Component } from '@angular/core';

export interface Post {
    title: string;
    description: string;
}

@Component({
    selector: 'app-post',
    templateUrl: './postComponent.html',
    styleUrls: ['./postComponent.scss']
})

export class postComponent {

    globalTotalLikes: number = 0;

    like() {
        this.globalTotalLikes++;
    }

    dislike() {
        if (this.globalTotalLikes)
            this.globalTotalLikes--;
    }
}