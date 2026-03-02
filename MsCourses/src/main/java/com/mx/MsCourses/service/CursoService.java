package com.mx.MsCourses.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mx.MsCourses.model.Cursos;
import com.mx.MsCourses.repository.CursosRepository;

@Service
public class CursoService {

	@Autowired
	CursosRepository cursosRepository;
	
	
	@Transactional
	public Cursos guardar(Cursos curso) {
	   
	    boolean existe = cursosRepository.existsByNombreAndIdEscuelaAndFechaInicio(
	        curso.getNombre(), curso.getIdEscuela(), curso.getFechaInicio());
	    
	    if (existe) {
	        return null; 
	    }
	    return cursosRepository.save(curso);
	}
	 
	@Transactional(readOnly=true)
	public List<Cursos> buscarIdEscuela(Integer idEscuela){
		return cursosRepository.findByIdEscuela(idEscuela);
	}
	
	
	@Transactional
	public List<Cursos> listar(){
		return cursosRepository.findAll();
	}
	
	@Transactional
	public Cursos buscarCurso(Integer idCurso) {
		return cursosRepository.findById(idCurso).orElse(null);
	}
	
	@Transactional
	public String eliminar(Cursos curso) {
	
	    Optional<Cursos> cursoEncontrado = cursosRepository.findById(curso.getIdCurso());

	    if (cursoEncontrado.isPresent()) {
	
	        cursosRepository.delete(cursoEncontrado.get());
	        

	        return "eliminado"; 
	    }
	    

	    return "inexistente";
	}
	
	@Transactional
	public String editar(Cursos curso) {
		if(cursosRepository.existsById(curso.getIdCurso())) {
			cursosRepository.save(curso);
			return "editado";
		}else {
			return "inexistente";
		}
	}
}
