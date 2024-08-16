// src/components/PreviewComponent.js
import React from 'react';
import jsPDF from 'jspdf';
import './css/PreviewComponent.css';

const PreviewComponent = ({ previewData }) => {
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`Título del Curso: ${previewData.title}`, 10, 10);
    doc.text(`Instructor: ${previewData.instructor}`, 10, 20);
    doc.text(`Objetivo: ${previewData.objective}`, 10, 30);
    doc.text(`Descripción: ${previewData.description}`, 10, 40);
    // Agrega más campos según sea necesario y ajusta la posición del texto
    doc.save('temario.pdf');
  };

  return (
    <div className="preview-container">
      <h2>Vista Previa del Temario</h2>
      <div className="preview-content">
        {previewData && (
          <div>
            <p><strong>Título del Curso:</strong> {previewData.title}</p>
            <p><strong>Instructor:</strong> {previewData.instructor}</p>
            <p><strong>Objetivo:</strong> {previewData.objective}</p>
            <p><strong>Descripción:</strong> {previewData.description}</p>
            {/* Agrega más campos según sea necesario */}
          </div>
        )}
        <button onClick={downloadPDF}>Descargar PDF</button>
      </div>
    </div>
  );
};

export default PreviewComponent;
