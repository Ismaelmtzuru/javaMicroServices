package com.mx.MsEscuelas.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="ESCUELAS")
@Data
public class Escuelas {
	@Id
	@Column(name="ID_ESCUELA")
	private Integer idEscuela;
	
	@Column(name="NOMBRE")
	private String nombre;
	
	@Column(name="ClAVE")
	private String clave;
	
	@Column(name="FECHA_APERTURA")
	private LocalDate fechaApertura;
}
