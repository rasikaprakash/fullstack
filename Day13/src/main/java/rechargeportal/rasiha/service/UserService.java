package rechargeportal.rasiha.service;

import java.util.List;

import rechargeportal.rasiha.model.User;
import rechargeportal.rasiha.dto.request.RegisterRequest;
import rechargeportal.rasiha.dto.response.RegisterResponse;
import rechargeportal.rasiha.dto.response.UserDetailResponse;

public interface UserService {

    RegisterResponse register(RegisterRequest request);

    UserDetailResponse getUser(String email);

    List<User> getAllUser();
}


