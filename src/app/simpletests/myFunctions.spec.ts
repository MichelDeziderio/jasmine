import { greet } from "./myFunctions"

describe('My Functions', () => {

    it('Should greet', () => {
        
        const expectdName = 'Michel';
        const result = greet(expectdName);
        expect(result).toContain(expectdName);

    })

})