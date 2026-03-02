package com.mx.MsEscuelas.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

// Configuración de la clase RestTemplate
@Configuration
public class ConfigRestTemplate {
	//Se realiza la inyección de dependencia a clase RestTemplate
	
	//@Bean indica que solo es una clase, aqupi es usado
	//para realizar una instanciia a la clase RestTemplate
	
	//RestTemplate nos ayuda a trabajar con los servicios rest
	// utilizando el protocolo http.
	@Bean
	RestTemplate restTemplate() {
		return new RestTemplate();
	}
	
}
