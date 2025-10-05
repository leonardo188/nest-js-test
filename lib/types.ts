export type Category = 'Tech' | 'Lifestyle' | 'Business';

export interface PostBase {
  title: string;
  author: string;
  summary: string;
  category: Category;
  content: string;
}

export interface Post extends PostBase {
  id: string;
  createdAt: string;
}
