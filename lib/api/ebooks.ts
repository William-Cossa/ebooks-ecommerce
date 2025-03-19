import {
  ApiResponse,
  Book,
  BookWithContent,
  UserProgress,
} from "@/types/types";

// Lista de eBooks gratuitos disponíveis online (domínio público)
const FREE_EBOOKS: BookWithContent[] = [
  {
    id: "1",
    title: "Dom Casmurro",
    author: "Machado de Assis",
    description:
      "Um dos maiores clássicos da literatura brasileira, narra a história de Bentinho e seu ciúme por Capitu.",
    coverImage:
      "https://www.gutenberg.org/cache/epub/55752/pg55752.cover.medium.jpg",
    totalPages: 58,
    content: [
      "<h1>Capítulo I - Do Título</h1><p>Uma noite destas, vindo da cidade para o Engenho Novo, encontrei no trem da Central um rapaz aqui do bairro, que eu conheço de vista e de chapéu. Cumprimentou-me, sentou-se ao meu lado, falou da lua e dos ministros, e acabou recitando-me versos. A viagem era curta, e os versos pode ser que não fossem inteiramente maus. Sucedeu, porém, que, como eu estava cansado, fechei os olhos três ou quatro vezes; tanto bastou para que ele interrompesse a leitura e metesse os versos no bolso.</p>",
      "<p>— Continue, disse eu acordando.</p><p>— Já acabei, murmurou ele.</p><p>— São muito bonitos.</p><p>Vi-lhe fazer um gesto para tirá-los outra vez do bolso, mas não passou do gesto; estava amuado. No dia seguinte entrou a dizer de mim nomes feios, e acabou alcunhando-me Dom Casmurro. Os vizinhos, que não gostam dos meus hábitos reclusos e calados, deram curso à alcunha, que afinal pegou. Nem por isso me zanguei.</p>",
      "<h1>Capítulo II - Do Livro</h1><p>Agora que expliquei o título, passo a escrever o livro. Antes disso, porém, digamos os motivos que me põem a pena na mão.</p><p>Vivo só, com um criado. A casa em que moro é própria; fi-la construir de propósito, levado de um desejo tão particular que me vexa imprimi-lo, mas vá lá. Um dia, há bastantes anos, lembrou-me reproduzir no Engenho Novo a casa em que me criei na antiga Rua de Mata-cavalos, dando-lhe o mesmo aspecto e economia daquela outra, que desapareceu.</p>",
    ],
  },
  {
    id: "2",
    title: "O Cortiço",
    author: "Aluísio Azevedo",
    description:
      "Obra realista retratando a vida cotidiana de moradores em um cortiço no Rio de Janeiro do século XIX.",
    coverImage:
      "https://www.gutenberg.org/cache/epub/62544/pg62544.cover.medium.jpg",
    totalPages: 42,
    content: [
      "<h1>Capítulo I</h1><p>João Romão foi, dos treze aos vinte e cinco anos, empregado de um vendeiro que enriqueceu entre as quatro paredes de uma suja e obscura taverna nos refolhos do bairro do Botafogo; e tanto economizou do pouco que ganhara nessa dúzia de anos, que, ao retirar-se o patrão para a terra, lhe deixou, em pagamento de ordenados vencidos, nem só a venda com o que estava dentro, como ainda um conto e quinhentos em dinheiro.</p>",
      "<p>Proprietário e estabelecido por sua conta, o rapaz atirou-se à labutação ainda com mais ardor, possuindo-se de tal delírio de enriquecer, que afrontava resignado as mais duras privações. Dormia sobre o balcão da própria venda, em cima de uma esteira, fazendo travesseiro de um saco de estopa cheio de palha. A comida arranjava-lha, mediante quatrocentos réis por dia, uma quitandeira sua vizinha, a Bertoleza, crioula trintona, escrava de um velho cego residente em Juiz de Fora e amigada com um português que tinha uma carroça de mão e fazia fretes na cidade.</p>",
      "<p>Bertoleza também trabalhava duramente. Além de ajudar o amigo nas compras feitas aos atacadistas para a venda, ainda encontrava tempo para ir à praia lavar a roupa dos fregueses, que ela entregava e recebia na porta da rua, todas as segundas-feiras, por um preço baixo que lhe rendiam muitas dúzias.</p>",
    ],
  },
  {
    id: "3",
    title: "A Metamorfose",
    author: "Franz Kafka",
    description:
      "Uma das obras mais importantes de Kafka, conta a história de Gregor Samsa, que acorda transformado em um inseto monstruoso.",
    coverImage:
      "https://www.gutenberg.org/cache/epub/22367/pg22367.cover.medium.jpg",
    totalPages: 35,
    content: [
      "<h1>I</h1><p>Quando certa manhã Gregor Samsa acordou de sonhos intranquilos, encontrou-se em sua cama metamorfoseado num inseto monstruoso. Estava deitado sobre suas costas duras como couraça e, ao levantar um pouco a cabeça, viu seu ventre abaulado, marrom, dividido por nervuras arqueadas, no topo do qual a coberta, prestes a deslizar de vez, ainda mal se sustinha. Suas numerosas pernas, lastimavelmente finas em comparação com o volume do resto do corpo, tremulavam desamparadas diante de seus olhos.</p>",
      "<p>'O que aconteceu comigo?', pensou. Não era um sonho. Seu quarto, um autêntico quarto humano, apenas um pouco pequeno demais, permanecia calmo entre as quatro paredes bem conhecidas. Acima da mesa, na qual estava espalhada uma coleção de amostras de tecidos desembrulhada — Samsa era caixeiro-viajante —, pendia a gravura que ele havia recortado fazia pouco tempo de uma revista ilustrada e colocado numa bela moldura dourada. Mostrava uma dama de chapéu de pele e boá de pele que, sentada rigidamente, estendia ao espectador um grande regalo de pele, no qual desaparecia todo o seu antebraço.</p>",
    ],
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "Um dos romances mais populares da literatura inglesa, apresentando Elizabeth Bennet e Mr. Darcy.",
    coverImage:
      "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    totalPages: 61,
    content: [
      "<h1>Chapter 1</h1><p>It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.</p><p>However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.</p>",
      "<p>'My dear Mr. Bennet', said his lady to him one day, 'have you heard that Netherfield Park is let at last?'</p><p>Mr. Bennet replied that he had not.</p><p>'But it is,' returned she; 'for Mrs. Long has just been here, and she told me all about it.'</p><p>Mr. Bennet made no answer.</p><p>'Do you not want to know who has taken it?' cried his wife impatiently.</p>",
    ],
  },
  {
    id: "5",
    title: "O Guarani",
    author: "José de Alencar",
    description:
      "Romance histórico brasileiro que narra a história de amor entre Peri, um índio, e Cecília, uma jovem portuguesa.",
    coverImage:
      "https://www.gutenberg.org/cache/epub/59069/pg59069.cover.medium.jpg",
    totalPages: 47,
    content: [
      "<h1>Parte I - Os Aventureiros</h1><h2>I - Cenário</h2><p>De um dos cabeços da Serra dos Órgãos desliza um fio de água que se dirige para o norte, e engrossado com os mananciais que recebe no seu curso de dez léguas, torna-se rio caudal.</p><p>É o Paquequer: saltando de cascata em cascata, enroscando-se como uma serpente, vai depois se espreguiçar na várzea e embeber no Paraíba, que rola majestosamente em seu vasto leito.</p>",
      "<p>Dir-se-ia que, vassalo e tributário desse rei das águas, o pequeno rio, altivo e sobranceiro contra os rochedos, curva-se humildemente aos pés do suserano. Perde então a beleza selvática; suas ondas são calmas e serenas como as de um lago, e não se revoltam contra os barcos e as canoas que resvalam sobre elas: escravo submisso, sofre o látego do senhor.</p>",
      "<p>Não é neste lugar que ele deve ser visto; sim três ou quatro léguas acima de sua foz, onde é livre ainda, como o filho indômito desta pátria da liberdade.</p>",
    ],
  },
];

// Cache para armazenar o progresso do usuário
const userProgressCache: Record<string, UserProgress[]> = {};

/**
 * Busca todos os eBooks disponíveis (sem o conteúdo completo)
 */
export async function fetchEbooks(): Promise<ApiResponse<Book[]>> {
  try {
    // Simula uma chamada de API com um pequeno delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Retorna a lista de livros sem o conteúdo completo
    const books: Book[] = FREE_EBOOKS.map(
      ({ id, title, author, description, coverImage, totalPages }) => ({
        id,
        title,
        author,
        description,
        coverImage,
        totalPages,
      })
    );

    return {
      success: true,
      data: books,
    };
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    return {
      success: false,
      error: "Não foi possível carregar a lista de livros.",
    };
  }
}

/**
 * Busca um eBook específico pelo ID, incluindo o conteúdo
 */
export async function fetchBookById(
  id: string
): Promise<ApiResponse<BookWithContent>> {
  try {
    // Simula uma chamada de API com um pequeno delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const book = FREE_EBOOKS.find((book) => book.id === id);

    if (!book) {
      return {
        success: false,
        error: "Livro não encontrado",
      };
    }

    return {
      success: true,
      data: book,
    };
  } catch (error) {
    console.error("Erro ao buscar livro:", error);
    return {
      success: false,
      error: "Não foi possível carregar o livro solicitado.",
    };
  }
}

/**
 * Salva o progresso de leitura de um usuário
 */
export async function saveReadingProgress(
  userId: string,
  bookId: string,
  currentPage: number
): Promise<ApiResponse<UserProgress>> {
  try {
    // Simula uma chamada de API com um pequeno delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const progress: UserProgress = {
      userId,
      bookId,
      currentPage,
      lastAccessed: new Date(),
    };

    // Salva no cache local (em produção, seria no banco de dados)
    if (!userProgressCache[userId]) {
      userProgressCache[userId] = [];
    }

    // Atualiza se já existir, ou adiciona novo registro
    const existingIndex = userProgressCache[userId].findIndex(
      (p) => p.bookId === bookId
    );
    if (existingIndex >= 0) {
      userProgressCache[userId][existingIndex] = progress;
    } else {
      userProgressCache[userId].push(progress);
    }

    return {
      success: true,
      data: progress,
    };
  } catch (error) {
    console.error("Erro ao salvar progresso:", error);
    return {
      success: false,
      error: "Não foi possível salvar seu progresso de leitura.",
    };
  }
}

/**
 * Busca o progresso de leitura de um usuário para um livro específico
 */
export async function fetchReadingProgress(
  userId: string,
  bookId: string
): Promise<ApiResponse<UserProgress>> {
  try {
    // Simula uma chamada de API com um pequeno delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    if (!userProgressCache[userId]) {
      return {
        success: true,
        data: {
          userId,
          bookId,
          currentPage: 1,
          lastAccessed: new Date(),
        },
      };
    }

    const progress = userProgressCache[userId].find((p) => p.bookId === bookId);

    if (!progress) {
      return {
        success: true,
        data: {
          userId,
          bookId,
          currentPage: 1,
          lastAccessed: new Date(),
        },
      };
    }

    return {
      success: true,
      data: progress,
    };
  } catch (error) {
    console.error("Erro ao buscar progresso:", error);
    return {
      success: false,
      error: "Não foi possível recuperar seu progresso de leitura.",
    };
  }
}
