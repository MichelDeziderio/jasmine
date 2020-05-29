export class postComponent {
    totalLikes: number;

    like() {
        this.totalLikes++;
    }

    dislike() {
        if (this.totalLikes)
            this.totalLikes--;
    }
}