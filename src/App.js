import React, { useState } from 'react';
import FormComponent from './componet/FormComponent';
import PreviewComponent from './componet/PreviewComponent';
import ImprovementOptions from './componet/ImprovementOptions';
import { generateCourseContent } from './api';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    dias: '',
    horario: '',
    participantes: '',
    instructor: '',
    objetivo: '',
    descripcion: '',
    nivel: 'Básico',
    modalidad: 'Presencial',
    materiales: ''
  });

  const [content, setContent] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (formData) => {
    const prompt = `
      Genera un temario para un curso titulado "${formData.titulo}".
      Detalles:
      - Días del curso: ${formData.dias}
      - Horario: ${formData.horario}
      - Participantes: ${formData.participantes}
      - Instructor: ${formData.instructor}
      - Objetivo: ${formData.objetivo}
      - Nivel: ${formData.nivel}
      - Modalidad: ${formData.modalidad}
      - Materiales necesarios: ${formData.materiales}
      
      La estructura del temario debe incluir:
      - Cabecera: Nombre del curso, fecha de inicio, instructor.
      - Objetivo del curso: Propósito y metas.
      - Contenido del curso: Temas principales, subtemas, y duración de cada uno.
      - Estructura del curso: Distribución de los temas por días, horario, y actividades prácticas.
      - Requerimientos: Equipos, software necesario, y conocimientos previos.
    `;
  
    try {
      const generatedContent = await generateCourseContent(prompt);
      setContent(generatedContent);
    } catch (error) {
      console.error("Error generating course content:", error);
    }
  };
  

  const handleImprove = (option) => {
    console.log(`Aplicando mejora: ${option}`);
    // Implementa la lógica para mejorar el contenido aquí
  };

  return (
    <div>
      <FormComponent 
        formData={formData} 
        handleChange={handleChange} 
        onSubmit={handleFormSubmit}
      />
      {content && <PreviewComponent content={content} />}
      {content && <ImprovementOptions onImprove={handleImprove} />}
    </div>
  );
};

export default App;
