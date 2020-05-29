import { postComponent } from "./postComponent"

describe('Post Compontent', () => {
    it('Should increase likes', () => {
        // Arrange
        let component = new postComponent();
        // Act
        component.like();
        // Assert
        expect(component.totalLikes).toBe(1);
    })
    it('Should decrease likes', () => {

    })
})