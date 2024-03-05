package rechargeportal.rasiha.dto.response;


import rechargeportal.rasiha.enumerated.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDetailResponse {

    private String name;
    private String id;
    private String email;
    private String password;
    private Role role;
    private String message;
}


