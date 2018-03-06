import * as TextHelper from './TextHelper';

it('capitalizes a string', () => {
  const str = 'hello';
  expect(TextHelper.capitalize(str)).toEqual('Hello');
});
