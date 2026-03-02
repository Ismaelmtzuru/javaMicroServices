package com.mx.MsEscuelas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients // comunicación con cliente feint
public class MsEscuelasApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsEscuelasApplication.class, args);
	}

}
