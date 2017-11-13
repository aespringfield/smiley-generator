import SmileyCreator from './SmileyCreator';
import Feature from './Feature';

describe('SmileyCreator class', () => {
    let smileyCreator;
    beforeEach(() => {
        const eyes = new Feature('eyes', true, true, [
            {
                character: ':',
                allowed: true 
            },
            {
                character: ';',
                allowed: true
            }]);
        const nose = new Feature('nose', true, false, [
            {
                character: '-',
                allowed: true 
            },
            {
                character: '~',
                allowed: true
            }]);
        const mustache = new Feature('mustache', true, false, [
            {
                character: '{',
                allowed: true
            }]);
        const mouth = new Feature('mouth', true, true, [
            {
                character: ')',
                allowed: true 
            },
            {
                character: 'D',
                allowed: true
            }]);
        smileyCreator = new SmileyCreator([nose, mouth, eyes, mustache]);
    })
    it('returns an object with the specified properties', () => {
        expect(smileyCreator).toEqual({
            features: [
                {
                    name: 'nose',
                    allowed: true,
                    required: false,
                    possibleCharacters: [{
                        character: '-',
                        allowed: true 
                    },
                    {
                        character: '~',
                        allowed: true
                    }]
                },
                {
                    name: 'mouth',
                    allowed: true,
                    required: true,
                    possibleCharacters: [{
                        character: ')',
                        allowed: true 
                    },
                    {
                        character: 'D',
                        allowed: true
                    }]
                },
                {
                    name: 'eyes',
                    allowed: true,
                    required: true,
                    possibleCharacters: [{
                        character: ':',
                        allowed: true 
                    },
                    {
                        character: ';',
                        allowed: true
                    }]
                },
                {
                    name: 'mustache',
                    allowed: true,
                    required: false,
                    possibleCharacters: [{
                        character: '{',
                        allowed: true
                    }]
                },
            ]
        })
    });  
    it('returns features in order according to config', () => {
        smileyCreator.putFeaturesInOrder();
        expect(smileyCreator.features).toEqual([
            {
                name: 'eyes',
                allowed: true,
                required: true,
                possibleCharacters: [{
                    character: ':',
                    allowed: true 
                },
                {
                    character: ';',
                    allowed: true
                }]
            },
            {
                name: 'nose',
                allowed: true,
                required: false,
                possibleCharacters: [{
                    character: '-',
                    allowed: true 
                },
                {
                    character: '~',
                    allowed: true
                }]
            },
            {
                name: 'mustache',
                allowed: true,
                required: false,
                possibleCharacters: [{
                    character: '{',
                    allowed: true
                }]
            },
            {
                name: 'mouth',
                allowed: true,
                required: true,
                possibleCharacters: [{
                    character: ')',
                    allowed: true 
                },
                {
                    character: 'D',
                    allowed: true
                }]
            }
        ]);
    });
    it('adds a feature', () => {
        smileyCreator.addFeature({
            name: 'hair',
            allowed: true,
            required: false,
            charsAllowed: ['~', '{']
        });
        expect(smileyCreator.features).toContainEqual(
            {
                name: 'hair',
                allowed: true,
                required: false,
                charsAllowed: ['~', '{']
            }
        )
    });
    it('keeps only features where allowed is true', () => {
        smileyCreator.addFeature({
            name: 'hair',
            allowed: false,
            required: false,
            charsAllowed: ['~', '{']
        });
        smileyCreator.keepAllowedFeatures();
        expect(smileyCreator.features).not.toContainEqual({
            name: 'hair',
            allowed: false,
            required: false,
            charsAllowed: ['~', '{']  
        });
    });
    it('generates a smiley that matches requirements', () => {
        const generatedSmiley = smileyCreator.createSmiley();
        const smileyRegEx = generateSmileyRegEx(smileyCreator.features);

        function generateSmileyRegEx(features) {
            let regExStarter = '^';
            let regExEnder = '$';
            let regExString = features.reduce(generateFeatureRegEx, regExStarter) + regExEnder;
            return new RegExp(regExString);
        }

        function generateFeatureRegEx(regExString, feature) {
            regExString += '[' + feature.possibleCharacters.reduce((accumulator, possibleCharacter) => {
                if (possibleCharacter.allowed) {
                    let char = possibleCharacter.character;
                    let backslash = (/[\^\?\*\.\|\$\+\]\\\{\}]/.test(char) ? '\\' : '');
                    accumulator += accumulator + backslash + char;
                }
                return accumulator;
            }, '') + ']';
            if (!feature.required) {
                regExString += '?';
            }
            return regExString
        }

        expect(generatedSmiley).toMatch(smileyRegEx);
    })
});