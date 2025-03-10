import mongoose, { Document, Schema } from "mongoose";

interface ILivro extends Document {
  capa?: string;
  titulo: string;
  categoria: string;
  autores: string;
  descricao: string;
  nrPaginas: number;
}

const LivroSchema = new Schema<ILivro>({
  capa: String,
  titulo: { type: String, required: true },
  categoria: { type: String, required: true },
  autores: { type: String, required: true },
  descricao: { type: String, required: true },
  nrPaginas: { type: Number, required: true },
});

const Livro =
  mongoose.models.Livro || mongoose.model<ILivro>("Livro", LivroSchema);
export default Livro;
