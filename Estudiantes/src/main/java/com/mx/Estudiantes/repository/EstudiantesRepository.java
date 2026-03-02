package com.mx.Estudiantes.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mx.Estudiantes.model.Estudiantes;

public interface EstudiantesRepository extends JpaRepository<Estudiantes,Integer>{

	public List<Estudiantes> findByIdEscuela(Integer idEscuela);
	
	@Query("SELECT e FROM Estudiantes e WHERE LOWER(REPLACE(CONCAT(e.nombre,e.app,e.apm),' ','')) = LOWER(:completo)")
	Optional<Estudiantes> findByNombreCompleto(@Param("completo") String completo);
	
	@Query("SELECT e FROM Estudiantes e WHERE " +
		       "LOWER(REPLACE(CONCAT(e.nombre, e.app, e.apm), ' ', '')) = LOWER(:completo) " +
		       "AND e.idEstudiante != :id")
		Optional<Estudiantes> findByNombreCompletoYDistintoId(
		    @Param("completo") String completo, 
		    @Param("id") Integer id
		);
}
