import Feature from './Feature';

describe('Feature class', () => {
    it('returns an object with the specified properties', () => {
        const feature = new Feature('eyes', true, true,
            [
                {
                    character: ':', 
                    allowed: true
                },
                {
                    character: ';', 
                    allowed: false
                }
            ]
        );
        expect(feature).toEqual({
            name: 'eyes',
            allowed: true,
            required: true,
            characterOptions: [
                {
                    character: ':', 
                    allowed: true
                },
                {
                    character: ';', 
                    allowed: false
                }
            ]
        });
    })
});