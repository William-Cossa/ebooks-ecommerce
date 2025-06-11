"use server";
import { cookies } from "next/headers";

// Interface do livro para cartList
export interface CartListBook {
  id?: string;
  title?: string;
  authors?: string;
  coverImage?: string;
  price?: number;
}

// Função para obter cartList atual
export async function getCartList(): Promise<CartListBook[]> {
  const cookieStore = cookies();
  const cartListCookie = cookieStore.get("cartList");

  try {
    return cartListCookie ? JSON.parse(cartListCookie.value) : [];
  } catch {
    return [];
  }
}

// Ação de adicionar à cartList
export async function toggleCartList(book: CartListBook) {
  const cookieStore = cookies();
  const currentCartList = await getCartList();

  // Verifica se o livro já está na cartList
  const bookIndex = currentCartList.findIndex((item) => item.id === book.id);

  let updatedCartList: CartListBook[];

  if (bookIndex > -1) {
    // Remove se já estiver na cartList
    updatedCartList = currentCartList.filter((item) => item.id !== book.id);
  } else {
    // Adiciona se não estiver na cartList
    updatedCartList = [...currentCartList, book];
  }

  // Atualiza o cookie
  cookieStore.set("cartList", JSON.stringify(updatedCartList), {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 ano
  });

  return updatedCartList;
}
