package rechargeportal.rasiha.service;

import rechargeportal.rasiha.dto.request.ForgotPasswordRequest;
import rechargeportal.rasiha.dto.request.LoginRequest;
import rechargeportal.rasiha.dto.request.RegisterRequest;
import rechargeportal.rasiha.dto.response.ForgotPasswordResponse;
import rechargeportal.rasiha.dto.response.LoginResponse;
import rechargeportal.rasiha.dto.response.RegisterResponse;


public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    ForgotPasswordResponse forgotPassword(ForgotPasswordRequest request);
    
}