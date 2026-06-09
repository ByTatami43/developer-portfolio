// @flow strict
import * as React from 'react';

function PresentationCard({ presentation }) {
  return (
    <div className="border border-[#1b2c68a0] hover:border-pink-500 transition-all duration-500 bg-[#0d1224] rounded-lg relative group flex flex-col overflow-hidden shadow-xl">

      {/* El reproductor de vídeo de Google Drive */}
      <div className="w-full aspect-video rounded-t-lg overflow-hidden bg-black">
        <iframe
          className="w-full h-full"
          src={`https://drive.google.com/file/d/${presentation.driveId}/preview`}
          title={presentation.title}
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Título y descripción */}
      <div className="p-4 lg:p-6 flex flex-col flex-grow bg-gradient-to-r from-[#0d1224] to-[#0a0d37]">
        <h3 className="text-[#16f2b3] text-lg lg:text-xl font-semibold mb-2 line-clamp-2">
          {presentation.title}
        </h3>
        <p className="text-sm text-gray-400 line-clamp-3">
          {presentation.description}
        </p>
      </div>
    </div>
  );
};

export default PresentationCard;