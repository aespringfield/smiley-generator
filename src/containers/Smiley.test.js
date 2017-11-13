import Smiley from './Smiley';
import Feature from './Feature';

describe('Smiley class', () => {
    it('returns an object with the specified properties', () => {
        const eyes = new Feature('eyes', true, true, [':', ';']);
        const nose = new Feature('nose', true, false, ['-', '~']);
        const mouth = new Feature('mouth', true, true, [')', 'D']);
        const smiley = new Smiley(eyes, nose, mouth);
        expect(smiley).toEqual({
            eyes: {
                name: 'eyes',
                allowed: true,
                required: true,
                charsAllowed: [':', ';']
              },
              nose: {
                name: 'nose',
                allowed: true,
                required: false,
                charsAllowed: ['-', '~']
              },
              mouth: {
                name: 'mouth',
                allowed: true,
                required: true,
                charsAllowed: [')', 'D']
              }
        });
    });
});