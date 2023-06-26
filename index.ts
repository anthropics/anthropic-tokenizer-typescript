import { Tiktoken } from '@dqbd/tiktoken';

import claude from '~/claude.json';

export function countTokens(text: string): number {
  const tokenizer = getTokenizer();
  const encoded = tokenizer.encode(text);
  tokenizer.free();
  return encoded.length;
}

export function getTokenizer(): Tiktoken {
  return new Tiktoken(claude.bpe_ranks, claude.special_tokens, claude.pat_str);
}
