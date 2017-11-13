import Feature from './Feature';

describe('Feature class', () => {
    it('returns an object with the specified properties', () => {
        const feature = new Feature('eyes', true, true, [':', ';']);
        expect(feature).toEqual({
            name: 'eyes',
            allowed: true,
            required: true,
            charsAllowed: [':', ';']
        });
    })
});