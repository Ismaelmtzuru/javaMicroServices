package com.mx.MsCourses;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient //Para que microservicio se pueda registrar en eureka server
public class MsCoursesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsCoursesApplication.class, args);
	}

}
