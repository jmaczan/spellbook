export enum SpellFiles {
    JSON = "spell.json",
    SCRIPT = "spell.sh"
}

export interface Spell {
    [SpellFiles.JSON]: SpellDefinition,
    [SpellFiles.SCRIPT]: string
}

export interface SpellDefinition {

}