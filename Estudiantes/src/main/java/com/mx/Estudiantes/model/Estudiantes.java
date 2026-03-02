package com.mx.Estudiantes.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="ESTUDIANTES")
@Data
public class Estudiantes {
	
	@Id
	@Column(name="ID_ESTUDIANTE")
	private Integer idEstudiante;
	
	@Column(name="NOMBRE")
	private String nombre;
	
	@Column(name="APP")
	private String app;
	
	@Column(name="APM")
	private String apm;
	
	@Column(name="ID_ESCUELA")
	private Integer idEscuela;
	
	
}
