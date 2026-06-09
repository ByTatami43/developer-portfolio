// @flow strict
"use client";

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Skills() {
  const scrollRef = useRef(null);

  // 🌍 Configura tus idiomas aquí
  const languages = [
    { name: "Español", level: "Nativo" },
    { name: "Chino", level: "Nativo" },
    { name: "Inglés", level: "C1 - Trinity College London" },
    // Puedes añadir o quitar los que necesites
  ];

  // 🛠️ Función para mover el carrusel con los botones
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // 🤖 Scroll automático cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // Si llega al final, vuelve al principio
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
      }
    }, 1000);
    return () => clearInterval(interval); // Limpiamos el intervalo al desmontar
  }, []);

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] py-12">
      {/* Título de la sección */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md uppercase tracking-wider">
            Habilidades e Idiomas
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ==========================================
              COLUMNA IZQUIERDA: Habilidades Técnicas
              ========================================== */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-[#16f2b3] mb-8 border-b border-[#25213b] pb-4">
              Habilidades Técnicas
            </h3>

            <div className="relative w-full group">
              {/* Botón Izquierda */}
              <button
                onClick={() => scroll("left")}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-[#1a1443] hover:bg-pink-500 text-white p-3 rounded-full shadow-lg transition-colors hidden md:block opacity-0 group-hover:opacity-100 duration-300"
              >
                <FaChevronLeft />
              </button>

              {/* Carrusel Grid (2 filas, scroll horizontal) */}
              <div
                ref={scrollRef}
                className="grid grid-rows-2 grid-flow-col gap-4 overflow-x-auto scroll-smooth hide-scrollbar py-4 px-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Oculta barra en Firefox/IE
              >
                {skillsData.map((skill, id) => (
                  <div
                    key={id}
                    className="w-32 h-32 md:w-36 md:h-36 bg-[#0d1224] border border-[#1f223c] rounded-xl flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:border-pink-500 hover:scale-105 shadow-xl"
                  >
                    <div className="h-12 w-12 flex items-center justify-center">
                      <Image
                        src={skillsImage(skill)?.src}
                        alt={skill}
                        width={48}
                        height={48}
                        className="max-h-full w-auto transition-all duration-300"
                      />
                    </div>
                    <p className="text-white text-sm font-medium text-center px-2">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>

              {/* Botón Derecha */}
              <button
                onClick={() => scroll("right")}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-[#1a1443] hover:bg-pink-500 text-white p-3 rounded-full shadow-lg transition-colors hidden md:block opacity-0 group-hover:opacity-100 duration-300"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* ==========================================
              COLUMNA DERECHA: Idiomas
              ========================================== */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-pink-500 mb-8 border-b border-[#25213b] pb-4">
              Idiomas
            </h3>

            <div className="flex flex-col gap-6 mt-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <span className="text-white text-xl font-medium">{lang.name}</span>
                    <span className="text-[#16f2b3] text-sm font-mono">{lang.level}</span>
                  </div>
                  {/* Línea decorativa (sustituye las "ondas" de tu boceto) */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-[#1a1443] via-pink-500/50 to-[#1a1443]"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Estilo extra para ocultar la barra de scroll en Chrome/Safari */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
};

export default Skills;