// import { Book } from "@/types/types";

// // Dados iniciais dos livros
// export const initialBooks: Book[] = [
//   {
//     id: "1",
//     title: "O Silmarillion",
//     author: ["J.R.R. Tolkien"],
//     coverImage:
//       "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w",
//     description:
//       "O Silmarillion é uma coletânea de trabalhos de J. R. R. Tolkien, editado e publicado postumamente por seu filho, Christopher Tolkien, em 1977, com a assistência de Guy Gavriel Kay.",
//     price: 49.9,
//     rating: 4.8,
//     genres: ["Fantasia", "Clássico"],
//     format: "livro",
//     pages: 456,
//     publishDate: "1977-09-15",
//     publisher: "Editora HarperCollins",
//   },
//   {
//     id: "2",
//     title: "Duna",
//     author: ["Frank Herbert"],
//     coverImage:
//       "https://images.unsplash.com/photo-1531072901881-d644216d4bf9?auto=format&fit=crop&q=80&w",
//     description:
//       "Duna é um romance de ficção científica escrito por Frank Herbert e publicado em 1965. É o primeiro livro da série Duna, que se tornou uma das séries mais vendidas de todos os tempos.",
//     price: 45.5,
//     rating: 4.9,
//     genres: ["Ficção Científica", "Aventura"],
//     format: "livro",
//     pages: 688,
//     publishDate: "1965-08-01",
//     publisher: "Editora Aleph",
//   },
//   {
//     id: "3",
//     title: "1984",
//     author: ["George Orwell"],
//     coverImage:
//       "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=388",
//     description:
//       "1984 é um romance distópico publicado em 1949 pelo escritor britânico George Orwell. A obra retrata uma sociedade totalitária e repressiva.",
//     price: 29.9,
//     rating: 4.7,
//     genres: ["Ficção Distópica", "Clássico"],
//     format: "ebook",
//     pages: 328,
//     publishDate: "1949-06-08",
//     publisher: "Companhia das Letras",
//   },
//   {
//     id: "4",
//     title: "O Hobbit",
//     author: ["J.R.R. Tolkien"],
//     coverImage:
//       "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?auto=format&fit=crop&q=80&w=390",
//     description:
//       "O Hobbit é um livro infanto-juvenil de fantasia escrito pelo filólogo e professor universitário inglês J. R. R. Tolkien.",
//     price: 39.9,
//     rating: 4.8,
//     genres: ["Fantasia", "Aventura"],
//     format: "livro",
//     pages: 336,
//     publishDate: "1937-09-21",
//     publisher: "Editora HarperCollins",
//   },
//   {
//     id: "5",
//     title: "A Revolução dos Bichos",
//     author: ["George Orwell"],
//     coverImage:
//       "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w",
//     description:
//       "A Revolução dos Bichos, também conhecido como O Triunfo dos Porcos, é um romance do escritor inglês George Orwell publicado em 1945.",
//     price: 24.9,
//     rating: 4.5,
//     genres: ["Ficção Política", "Clássico"],
//     format: "ebook",
//     pages: 152,
//     publishDate: "1945-08-17",
//     publisher: "Companhia das Letras",
//   },
//   {
//     id: "6",
//     title: "Neuromancer",
//     author: ["William Gibson"],
//     coverImage:
//       "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=876",
//     description:
//       "Neuromancer é um romance de ficção científica que se passa em um futuro distópico, onde a tecnologia avançada e a inteligência artificial dominam o mundo.",
//     price: 35.9,
//     rating: 4.6,
//     genres: ["Ficção Científica", "Cyberpunk"],
//     format: "ebook",
//     pages: 320,
//     publishDate: "1984-07-01",
//     publisher: "Editora Aleph",
//   },
//   {
//     id: "7",
//     title: "Fundação",
//     author: ["Isaac Asimov"],
//     coverImage:
//       "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w",
//     description:
//       "Fundação é o primeiro livro da série homônima escrita por Isaac Asimov. A saga narra a história da Fundação, uma organização que busca preservar o conhecimento humano diante do colapso iminente do Império Galáctico.",
//     price: 42.5,
//     rating: 4.7,
//     genres: ["Ficção Científica", "Space Opera"],
//     format: "livro",
//     pages: 288,
//     publishDate: "1951-05-01",
//     publisher: "Editora Aleph",
//   },
//   {
//     id: "8",
//     title: "A Guerra dos Tronos",
//     author: ["George R.R. Martin"],
//     coverImage:
//       "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w",
//     description:
//       "A Guerra dos Tronos é o primeiro livro da série As Crônicas de Gelo e Fogo, uma saga épica de fantasia escrita pelo autor americano George R. R. Martin.",
//     price: 59.9,
//     rating: 4.9,
//     genres: ["Fantasia", "Aventura"],
//     format: "livro",
//     pages: 592,
//     publishDate: "1996-08-01",
//     publisher: "Editora Suma",
//   },
//   {
//     id: "9",
//     title: "O Nome do Vento",
//     author: ["Patrick Rothfuss"],
//     coverImage: "https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg",
//     description:
//       "O Nome do Vento é o primeiro livro da trilogia A Crônica do Matador do Rei, escrita por Patrick Rothfuss. Narra a história de Kvothe, um mago, músico e aventureiro lendário.",
//     price: 49.9,
//     rating: 4.9,
//     genres: ["Fantasia", "Aventura"],
//     format: "ebook",
//     pages: 656,
//     publishDate: "2007-03-27",
//     publisher: "Editora Arqueiro",
//   },
//   {
//     id: "10",
//     title: "Devoradores de Estrelas",
//     author: ["Andy Weir"],
//     coverImage:
//       "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&q=80&w=912",
//     description:
//       "De Andy Weir, autor do best-seller Perdido em Marte, chega uma história fascinante e divertida sobre uma missão para salvar a humanidade.",
//     price: 39.9,
//     rating: 4.6,
//     genres: ["Ficção Científica", "Aventura"],
//     format: "ebook",
//     pages: 496,
//     publishDate: "2021-05-04",
//     publisher: "Editora Arqueiro",
//   },
//   {
//     id: "11",
//     title: "O Senhor dos Anéis: A Sociedade do Anel",
//     author: ["J.R.R. Tolkien"],
//     coverImage:
//       "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?auto=format&fit=crop&q=80&w=435",
//     description:
//       "A Sociedade do Anel é o primeiro volume da trilogia O Senhor dos Anéis, um épico de fantasia criado pelo autor britânico J. R. R. Tolkien.",
//     price: 54.9,
//     rating: 4.9,
//     genres: ["Fantasia", "Aventura"],
//     format: "livro",
//     pages: 576,
//     publishDate: "1954-07-29",
//     publisher: "Editora HarperCollins",
//   },
//   {
//     id: "12",
//     title: "Admirável Mundo Novo",
//     author: ["Aldous Huxley"],
//     coverImage:
//       "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w",
//     description:
//       "Admirável Mundo Novo é um romance distópico escrito por Aldous Huxley e publicado em 1932. A história se passa em um Estado Mundial futurista e tecnologicamente avançado.",
//     price: 32.9,
//     rating: 4.5,
//     genres: ["Ficção Distópica", "Clássico"],
//     format: "ebook",
//     pages: 312,
//     publishDate: "1932-01-01",
//     publisher: "Biblioteca Azul",
//   },
//   {
//     id: "21",
//     title: "Desenvolvimento Web Moderno",
//     author: ["Maria Silva", "João Santos", "Ana Costa"],
//     description:
//       "Um guia completo sobre as tecnologias mais modernas para desenvolvimento web. Aborda React, Node.js, TypeScript e muito mais.",
//     price: 89.99,
//     coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
//     genres: ["Tecnologia", "Programação", "Web Development"],
//     rating: 4.7,
//     format: "livro",
//     pages: 450,
//     publisher: "Tech Books",
//     publishDate: "2023-08-15",
//   },
//   {
//     id: "22",
//     title: "Inteligência Artificial: Teoria e Prática",
//     author: ["Dr. Carlos Mendes", "Dra. Lucia Ferreira", "Prof. Roberto Lima"],
//     description:
//       "Uma abordagem abrangente sobre IA, desde os fundamentos teóricos até aplicações práticas em machine learning e deep learning.",
//     price: 125.5,
//     coverImage:
//       "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVsaWdlbmNpYSUyMGFydGlmaWNpYWx8ZW58MHx8MHx8fDA%3D",
//     genres: ["Inteligência Artificial", "Tecnologia", "Ciência"],
//     rating: 4.9,
//     format: "livro",
//     pages: 680,
//     publisher: "AI Press",
//     publishDate: "2023-09-20",
//   },
//   {
//     id: "23",
//     title: "Marketing Digital Estratégico",
//     author: ["Paula Oliveira", "Rafael Souza"],
//     description:
//       "Estratégias avançadas de marketing digital para empresas modernas. Inclui redes sociais, SEO, e-mail marketing e analytics.",
//     price: 67.9,
//     coverImage:
//       "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MHx8MHx8fDA%3D",
//     genres: ["Marketing", "Negócios", "Digital"],
//     rating: 4.4,
//     format: "ebook",
//     pages: 320,
//     publisher: "Business Pro",
//     publishDate: "2023-07-10",
//   },
//   {
//     id: "24",
//     title: "Psicologia Cognitiva Aplicada",
//     author: [
//       "Dra. Fernanda Ribeiro",
//       "Dr. Marcos Andrade",
//       "Dra. Camila Torres",
//     ],
//     description:
//       "Exploração profunda da psicologia cognitiva e suas aplicações em contextos educacionais e terapêuticos.",
//     price: 95.75,
//     coverImage: "/images/book-cover.jpg",
//     genres: ["Psicologia", "Ciência", "Educação"],
//     rating: 4.6,
//     format: "livro",
//     pages: 520,
//     publisher: "Psico Editora",
//     publishDate: "2023-06-05",
//   },
//   {
//     id: "25",
//     title: "Sustentabilidade e Inovação",
//     author: ["Prof. Helena Martins", "Dr. Eduardo Pereira"],
//     description:
//       "Como a inovação tecnológica pode contribuir para um futuro mais sustentável. Casos de estudo e soluções práticas.",
//     price: 78.3,
//     coverImage: "https://images.unsplash.com/photo-1547036967-23d11aacaee0",
//     genres: ["Sustentabilidade", "Inovação", "Meio Ambiente"],
//     rating: 4.5,
//     format: "ebook",
//     pages: 380,
//     publisher: "Green Tech",
//     publishDate: "2023-05-22",
//   },
//   {
//     id: "26",
//     title: "História do Design Gráfico",
//     author: ["Prof. Ana Beatriz", "Dr. Felipe Costa", "Mestre Laura Antunes"],
//     description:
//       "Uma jornada através da evolução do design gráfico, desde os primórdios até as tendências contemporâneas digitais.",
//     price: 72.8,
//     coverImage:
//       "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
//     genres: ["Arte", "Design", "História"],
//     rating: 4.7,
//     format: "livro",
//     pages: 420,
//     publisher: "Arte & Design Editora",
//     publishDate: "2023-03-12",
//   },
//   {
//     id: "27",
//     title: "Neurociência e Aprendizagem",
//     author: [
//       "Dra. Silvia Rodrigues",
//       "Dr. Marcus Vinicius",
//       "Prof. Carolina Silva",
//     ],
//     description:
//       "Como o cérebro aprende e como podemos aplicar descobertas neurocientíficas para melhorar a educação.",
//     price: 98.45,
//     coverImage:
//       "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w",
//     genres: ["Neurociência", "Educação", "Ciência"],
//     rating: 4.8,
//     format: "ebook",
//     pages: 560,
//     publisher: "Neuro Editora",
//     publishDate: "2023-04-18",
//   },
//   {
//     id: "28",
//     title: "Filosofia da Tecnologia",
//     author: [
//       "Prof. Ricardo Almeida",
//       "Dra. Beatriz Santos",
//       "Dr. Paulo Henrique",
//     ],
//     description:
//       "Reflexões filosóficas sobre o impacto da tecnologia na sociedade moderna e nas relações humanas.",
//     price: 84.2,
//     coverImage:
//       "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80",
//     genres: ["Filosofia", "Tecnologia", "Sociedade"],
//     rating: 4.6,
//     format: "livro",
//     pages: 380,
//     publisher: "Filosofia Moderna",
//     publishDate: "2023-02-28",
//   },
//   {
//     id: "29",
//     title: "Economia Comportamental",
//     author: [
//       "Prof. Joaquim Ferreira",
//       "Dra. Marina Costa",
//       "Dr. Alexandre Lima",
//     ],
//     description:
//       "Como as decisões econômicas são influenciadas por fatores psicológicos e comportamentais.",
//     price: 91.35,
//     coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
//     genres: ["Economia", "Psicologia", "Comportamento"],
//     rating: 4.5,
//     format: "ebook",
//     pages: 480,
//     publisher: "Economia & Comportamento",
//     publishDate: "2023-01-15",
//   },
//   {
//     id: "30",
//     title: "Arte e Inteligência Artificial",
//     author: [
//       "Artista Digital Maria João",
//       "Prof. Tech André Silva",
//       "Criativa Sara Lopes",
//     ],
//     description:
//       "Exploração da interseção entre arte e IA, mostrando como a tecnologia está transformando a criação artística.",
//     price: 76.9,
//     coverImage: "https://images.unsplash.com/photo-1547036967-23d11aacaee0",
//     genres: ["Arte", "Inteligência Artificial", "Criatividade"],
//     rating: 4.9,
//     format: "livro",
//     pages: 350,
//     publisher: "Arte Digital Press",
//     publishDate: "2023-11-08",
//   },
// ];
