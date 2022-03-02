export interface Spell {
  id: number;
  name: string;
  description: string;
  author: string;
  target: string[];
  tags?: string[];
}
