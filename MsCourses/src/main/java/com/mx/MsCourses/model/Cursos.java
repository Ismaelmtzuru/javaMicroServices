package com.mx.MsCourses.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="CURSOS")
@Data
public class Cursos {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Integer idCurso;
	private String nombre;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate fechaInicio;
	private Integer idEscuela;
}
