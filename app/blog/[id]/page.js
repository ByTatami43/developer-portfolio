import { blogsData } from "@/utils/data/blogs-data";
import Link from "next/link";

export default async function BlogPage({ params }) {
  // Solución para Next.js 15+: Esperar a que los parámetros estén listos
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Comparamos forzando texto
  const blog = blogsData.find((b) => String(b.id) === String(id));

  // Si no lo encuentra, mostramos nuestra pantalla "chivata"
  if (!blog) {
    return (
      <div className="min-h-screen bg-[#0d1224] text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4 text-red-400">Artículo no encontrado</h1>

        <div className="bg-[#1a1443] p-6 rounded-lg mb-8 text-center border border-pink-500">
          <p className="mb-2"><strong>1. El ID que busca la URL es:</strong> <span className="text-pink-400">"{id}"</span></p>
          <p><strong>2. Los IDs que existen en tus datos son:</strong> <span className="text-pink-400">{blogsData.map(b => `"${b.id}"`).join(', ')}</span></p>
        </div>

        <Link href="/" className="text-pink-500 hover:underline">← Volver al inicio</Link>
      </div>
    );
  }

  // Si lo encuentra, muestra el artículo
  return (
    <div className="min-h-screen bg-[#0d1224] text-white px-6 py-20 lg:py-32">
      <div className="max-w-3xl mx-auto">

        <Link href="/" className="text-pink-500 hover:text-pink-400 font-medium flex items-center gap-2 mb-8 transition-all">
          ← Volver al portafolio
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          {blog.title}
        </h1>

        <p className="text-sm text-gray-400 mb-8 pb-4 border-b border-indigo-900">
          Publicado el: {new Date(blog.published_at).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>

        <div
          className="text-gray-300 text-lg leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

      </div>
    </div>
  );
}