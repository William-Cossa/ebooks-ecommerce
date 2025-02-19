export interface Ebook {
    id?: number,
    title: string,
    authors: string[],
    coverImage: string,
    price: number,
    rating: number,
    description?: string
}