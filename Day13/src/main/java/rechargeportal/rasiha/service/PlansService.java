package rechargeportal.rasiha.service;

import rechargeportal.rasiha.dto.request.PlansRequest;
import rechargeportal.rasiha.dto.response.PlansListResponse;
import rechargeportal.rasiha.dto.response.PlansResponse;

public interface PlansService {
    PlansResponse createPlan(PlansRequest plan);
    PlansListResponse getAllPlan();
}



