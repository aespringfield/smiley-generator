import Character from './Character';

describe('Character class', () => {
    const character = new Character(';', false);
    it('should toggle allowed to true', () => {
        expect(character.toggleAllowed()).toEqual(true);
    })
});