import { postComponent } from "./postComponent";
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('Post Compontent', () => {

    let component: postComponent;
    let fixture: ComponentFixture<postComponent>
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
    })

    afterEach(() => {

    })

    it('Should increase likes 👍', () => {
        // Act
        component.globalTotalLikes = 3;
        component.like();
        // Assert
        expect(component.globalTotalLikes).toBe(4);
    })

    it('Should decrease likes 👎', () => {
        component.globalTotalLikes = 3;
        component.dislike();
        expect(component.globalTotalLikes).toBe(2);
    })

    it('Should decrease likes only if the globalTotalLikes is not 0 👎', () => {
        component.globalTotalLikes = 0;
        component.dislike();
        expect(component.globalTotalLikes).not.toBe(-1);
    })

    beforeEach(async () => {
        fixture = TestBed.createComponent(postComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('Should Create', () => {
        expect(component).toBeTruthy();
    })

    it('Should Display Global total Likes', () => {
        let debugElement = fixture.debugElement.query(By.css('.globalTotalLikes'));
        let htmlElement:HTMLElement = debugElement.nativeElement;
        expect(htmlElement.innerHTML).toContain('0');
    })

})