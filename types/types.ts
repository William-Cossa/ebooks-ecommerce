export interface Ebook {
    id?: number,
    title: string,
    authors: string[],
    coverImage: string,
    categories: string[];
    price: number,
    rating: number,
    description?: string
    pages?: number
}