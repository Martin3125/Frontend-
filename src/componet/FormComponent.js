    import React from 'react';
    import './css/FormComponent.css';

    const FormComponent = ({ formData, handleChange, onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="form-container">
        <h2>Generador de Temario de Curso</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Título:</label>
            <input
                type="text"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label>Días que se cursará:</label>
            <input
                type="text"
                name="dias"
                value={formData.dias}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label>Horario del curso:</label>
            <input
                type="text"
                name="horario"
                value={formData.horario}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label>Cantidad de participantes:</label>
            <input
                type="number"
                name="participantes"
                value={formData.participantes}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label>Nombre del instructor:</label>
            <input
                type="text"
                name="instructor"
                value={formData.instructor}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label>Objetivo del curso:</label>
            <textarea
                name="objetivo"
                value={formData.objetivo}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label>Descripción del temario:</label>
            <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label>Nivel del curso:</label>
            <select
                name="nivel"
                value={formData.nivel}
                onChange={handleChange}
            >
                <option value="Básico">Básico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
            </select>
            </div>
            <div className="form-group">
            <label>Modalidad:</label>
            <select
                name="modalidad"
                value={formData.modalidad}
                onChange={handleChange}
            >
                <option value="Presencial">Presencial</option>
                <option value="Online">Online</option>
            </select>
            </div>
            <div className="form-group">
            <label>Materiales necesarios:</label>
            <textarea
                name="materiales"
                value={formData.materiales}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <button type="submit">Generar Temario</button>
            </div>
        </form>
        </div>
    );
    };

    export default FormComponent;
