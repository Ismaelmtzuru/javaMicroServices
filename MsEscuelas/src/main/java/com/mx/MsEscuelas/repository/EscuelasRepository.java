package com.mx.MsEscuelas.repository;

import org.springframework.data.repository.CrudRepository;

import com.mx.MsEscuelas.model.Escuelas;

public interface EscuelasRepository extends CrudRepository<Escuelas,Integer>{

	public Escuelas findByClave(String clave);
}
