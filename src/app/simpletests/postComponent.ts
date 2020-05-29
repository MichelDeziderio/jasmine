export class postComponent {
    totalLikes: number = 0;

    like() {
        this.totalLikes++;
    }

    dislike() {
        if (this.totalLikes)
            this.totalLikes--;
    }
}

// Fundamentals & Practices 