package com.mx.MsEscuelas.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

// DTO -- POJO, Sirve para trnasportar datos del objeto. 
// Esto no tiene relación con la base de datos.

@Data
public class CursosDTO {
	private Integer idCurso;
	private String nombre;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate fechaInicio;
	private Integer idEscuela;
}
