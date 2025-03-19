export interface Ebook {
  id?: number;
  title: string;
  authors: string[];
  coverImage: string;
  categories: string[];
  price: number;
  rating: number;
  description?: string;
  pages?: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  totalPages?: number;
}

export interface BookWithContent extends Book {
  content: string | string[]; // Pode ser texto puro ou array de páginas
}

export interface UserProgress {
  userId: string;
  bookId: string;
  currentPage: number;
  lastAccessed: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
