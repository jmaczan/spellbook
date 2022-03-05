export interface Spell {
  id: number;
  title: string;
  name: string;
  description: string;
  author: string;
  example?: string;
  target: string[];
  tags?: string[];
  license?: string;
}
