package rechargeportal.rasiha;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import rechargeportal.rasiha.dto.request.RegisterRequest;
import rechargeportal.rasiha.service.UserService;

@SpringBootApplication
public class RasihaApplication {

	public static void main(String[] args) {
		SpringApplication.run(RasihaApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(UserService userService)
	{
		return args->{
			var user=RegisterRequest.builder()
			.name("Admin")
			.email("admin@gmail.com")
			.password("Admin@123")
			.build();
			userService.register(user);
		};
}}
