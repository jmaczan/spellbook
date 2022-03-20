export enum SpellFiles {
  JSON = 'spell.json',
  SCRIPT = 'spell.sh',
}

export interface Spell {
  [SpellFiles.JSON]: SpellDefinition;
  [SpellFiles.SCRIPT]: string;
}

export interface SpellDefinition {}

export enum PossibleResult {
  Ok = 'Ok',
  Err = 'Err',
}

export const Ok = (value: any): Result => ({ result: PossibleResult.Ok, value });
export const Err = (value: any): Result => ({ result: PossibleResult.Err, value });

export interface Result {
  result: PossibleResult;
  value: any;
}
