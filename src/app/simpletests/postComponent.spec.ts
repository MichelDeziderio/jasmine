import { postComponent } from "./postComponent"

describe('Post Compontent', () => {
    let component: postComponent;
    // only once
    // before -> setup
    // after -> teardown
    beforeAll(() => {

    })

    afterAll(() => {
        component = null;
    })

    // every time for a spec
    beforeEach(() => {
        // Arrange
        component = new postComponent();
        component.totalLikes = 3;
    })

    afterEach(() => {

    })

    it('Should increase likes 👍', () => {
        // Act
        component.like();
        // Assert
        expect(component.totalLikes).toBe(4);
    })

    it('Should decrease likes 👎', () => {

        component.dislike();

        expect(component.totalLikes).toBe(2);
    })
})