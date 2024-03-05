package rechargeportal.rasiha.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.RequiredArgsConstructor;
import rechargeportal.rasiha.dto.request.RegisterRequest;
import rechargeportal.rasiha.dto.response.RegisterResponse;
import rechargeportal.rasiha.service.UserService;
import rechargeportal.rasiha.utils.MyConstant;

import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping(MyConstant.USER)
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping(MyConstant.REGISTER)
    public ResponseEntity<?> postMethodName(@RequestBody RegisterRequest request) {
        RegisterResponse response = new RegisterResponse();

        try {
            response = userService.register(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
    
}

// Create request and response dto, models, one CRUD for user table, get all , get all by ID

