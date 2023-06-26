import { countTokens } from '@anthropic-ai/tokenizer';

describe('countTokens', () => {
  test('small text', async () => {
    expect(countTokens('hello world!')).toEqual(3);
  });
});
