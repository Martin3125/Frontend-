// src/components/ImprovementOptions.js
import React from 'react';
import './css/ImprovementOptions.css';

const ImprovementOptions = ({ improvementData, handleImprove }) => {
  return (
    <div className="improvement-container">
      <h2>Opciones de Mejora</h2>
      <div className="improvement-group">
        <label>Nivel de lenguaje técnico:</label>
        <input
          type="range"
          min="1"
          max="100"
          value={improvementData.languageLevel}
          onChange={(e) => handleImprove('languageLevel', e.target.value)}
        />
        <span>{improvementData.languageLevel}</span>
      </div>
      <div className="improvement-group">
        <label>Cantidad de días:</label>
        <input
          type="number"
          value={improvementData.days}
          onChange={(e) => handleImprove('days', e.target.value)}
        />
      </div>
      <div className="improvement-group">
        <button onClick={() => handleImprove('adjust_language')}>Ajustar el Lenguaje</button>
        <button onClick={() => handleImprove('change_structure')}>Cambiar la Estructura</button>
        <button onClick={() => handleImprove('modify_schedule')}>Modificar Horario</button>
        {/* Añadir más opciones según sea necesario */}
      </div>
    </div>
  );
};

export default ImprovementOptions;
