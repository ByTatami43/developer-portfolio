// @flow strict
import * as React from 'react';
import Link from 'next/link';
import { FaCode, FaGlobe } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full flex flex-col h-full">
      {/* Líneas decorativas superiores */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Cabecera de la tarjeta */}
      <div className="px-4 lg:px-8 py-4 lg:py-6 border-b border-indigo-900/50 flex justify-between items-center bg-[#0a0d37]/50 rounded-t-lg">
        <div className="flex flex-col">
          <h3 className="text-[#16f2b3] text-xl lg:text-2xl font-bold tracking-wide">
            {project.name}
          </h3>
          <span className="text-pink-500 text-sm font-medium mt-1">
            {project.role}
          </span>
        </div>

        {/* Botones de enlaces (Solo se muestran si existen en tus datos) */}
        <div className="flex gap-3">
          {project.code && (
            <Link href={project.code} target="_blank" className="text-gray-400 hover:text-pink-500 transition-colors p-2 bg-[#1a1443] rounded-full" title="Ver Código">
              <FaCode size={18} />
            </Link>
          )}
          {project.demo && (
            <Link href={project.demo} target="_blank" className="text-gray-400 hover:text-[#16f2b3] transition-colors p-2 bg-[#1a1443] rounded-full" title="Ver Demo">
              <FaGlobe size={18} />
            </Link>
          )}
        </div>
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="p-4 lg:p-8 flex flex-col flex-grow">

        {/* Descripción del impacto */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Sección de Tecnologías */}
        <div className="mt-auto pt-4 border-t border-indigo-900/30">
          <p className="text-white text-xs uppercase tracking-wider mb-3 opacity-70">Tecnologías utilizadas:</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tag, i) => (
              <span
                key={i}
                className="bg-[#1a1443] border border-indigo-900/50 text-amber-300 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;