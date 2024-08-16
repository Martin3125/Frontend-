// src/api/pdf.js
import jsPDF from 'jspdf';

export const generatePDF = (courseContent) => {
  const doc = new jsPDF();
  
  doc.setFontSize(16);
  doc.text("Temario del Curso", 10, 10);
  
  doc.setFontSize(12);
  const lines = doc.splitTextToSize(courseContent, 180);
  doc.text(lines, 10, 20);
  
  doc.save("temario.pdf");
};
