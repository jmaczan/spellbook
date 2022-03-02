export interface Spell {
  id: number;
  title: string;
  name: string;
  description: string;
  author: string;
  target: string[];
  tags?: string[];
}
