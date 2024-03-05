package rechargeportal.rasiha.dto.response;



import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import rechargeportal.rasiha.model.Plans;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlansListResponse {
private List<Plans> plans;
}
