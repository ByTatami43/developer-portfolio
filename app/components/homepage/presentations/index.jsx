// @flow strict
import * as React from 'react';

function Presentations() {
  return (
    <div id="presentations" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] py-12">
      {/* Luces de fondo decorativas */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* COLUMNA IZQUIERDA: Contexto y Problema */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-[#16f2b3]"></span>
              <span className="text-[#16f2b3] text-sm font-mono font-semibold tracking-widest uppercase">
                PRESENTACIÓN PROFESIONAL
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
              IA generativa <br /> en el flujo de desarrollo
            </h2>

            {/* Caja de Contexto */}
            <div className="bg-[#1a1443]/30 border border-[#25213b] rounded-lg p-6 mb-10 relative">
              <span className="absolute -top-3 left-6 bg-[#0d1224] px-2 text-xs font-mono text-[#16f2b3] uppercase tracking-wider">
                Contexto
              </span>
              <p className="text-sm text-gray-300 leading-relaxed">
                Presentación elaborada como propuesta propia para el equipo Backend de la empresa <strong className="text-white">Aubay (2026)</strong>. El objetivo es evaluar de forma controlada la oportunidad de adoptar herramientas basadas en IA frente a los riesgos no gestionados que ya existen en el entorno de trabajo.
              </p>
            </div>

            {/* El Problema */}
            <h3 className="text-2xl font-bold text-white mb-4">El problema que identifiqué</h3>
            <div className="text-gray-400 space-y-4 text-base leading-relaxed">
              <p>
                Actualmente, el equipo junior dedica entre un <strong className="text-white">30% y 40% de su tiempo</strong> a tareas mecánicas, como la redacción de tests unitarios y documentación técnica.
              </p>
              <p>
                Esto genera cuellos de botella, entregas más lentas y una gran dependencia de los perfiles senior. Además, la IA <strong className="text-white">ya se usa de forma informal</strong> por el equipo, sin medición y exponiendo código sin protocolo común.
              </p>
              <p>
                <strong className="text-white">La propuesta:</strong> Implementar un piloto controlado de 4 semanas con tres reglas estrictas para evaluar el impacto real en productividad mediante datos y métricas, antes de tomar una decisión definitiva.
              </p>
            </div>
          </div>

          {/* COLUMNA DERECHA: Estructura y VÍDEO */}
          <div className="flex flex-col">
            <h4 className="text-xs text-gray-500 font-mono tracking-widest uppercase mb-8 border-b border-[#25213b] pb-4">
              Estructura de la presentación
            </h4>

            {/* Lista de Puntos */}
            <div className="space-y-6 mb-10">
              {/* Punto 1 */}
              <div className="flex items-start">
                <span className="text-[#16f2b3] font-mono text-lg font-bold mr-6 mt-1">01</span>
                <div className="flex-1 border-b border-[#25213b] pb-6">
                  <h5 className="text-white font-bold text-lg mb-2">El impacto real oculto</h5>
                  <p className="text-sm text-gray-400">El coste de las tareas mecánicas en el aprendizaje y la autonomía del equipo junior.</p>
                </div>
              </div>

              {/* Punto 2 */}
              <div className="flex items-start">
                <span className="text-[#16f2b3] font-mono text-lg font-bold mr-6 mt-1">02</span>
                <div className="flex-1 border-b border-[#25213b] pb-6">
                  <h5 className="text-white font-bold text-lg mb-2">Evidencia y encaje tecnológico</h5>
                  <p className="text-sm text-gray-400">Automatización de tests y esqueletos en stack Java/Kotlin + Spring Boot.</p>
                </div>
              </div>

              {/* Punto 3 */}
              <div className="flex items-start">
                <span className="text-[#16f2b3] font-mono text-lg font-bold mr-6 mt-1">03</span>
                <div className="flex-1 border-b border-[#25213b] pb-6">
                  <h5 className="text-white font-bold text-lg mb-2">Riesgos a tener en cuenta</h5>
                  <p className="text-sm text-gray-400">Mitigación de fugas de datos, bugs en producción y dependencia tecnológica.</p>
                </div>
              </div>

              {/* Punto 4 */}
              <div className="flex items-start">
                <span className="text-[#16f2b3] font-mono text-lg font-bold mr-6 mt-1">04</span>
                <div className="flex-1">
                  <h5 className="text-white font-bold text-lg mb-2">Propuesta: piloto de 4 semanas</h5>
                  <p className="text-sm text-gray-400">Revisión humana obligatoria, trazabilidad en Jira y evaluación con métricas en la semana 5.</p>
                </div>
              </div>
            </div>

            {/* EL VÍDEO DIRECTAMENTE INCORPORADO */}
            <div className="mt-auto">
              <h4 className="text-xs text-[#16f2b3] font-mono tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#16f2b3] rounded-full animate-pulse"></span> Ver Grabación Completa
              </h4>
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-black border border-[#25213b] shadow-2xl shadow-[#16f2b3]/5 group hover:border-[#16f2b3]/30 transition-colors duration-500">
                <iframe
                  className="w-full h-full"
                  src="https://drive.google.com/file/d/1QFe_D93nytXKErmrrDah9LWINMrwIqbr/preview"
                  title="Presentación IA Aubay"
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentations;