package rechargeportal.rasiha.dto.request;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlansRequest {

    private String planname;
    private String description;
    private int price;
    private String data;
    private String validity;
}

