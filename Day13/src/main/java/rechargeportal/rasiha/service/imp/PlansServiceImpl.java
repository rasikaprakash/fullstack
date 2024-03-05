package rechargeportal.rasiha.service.imp;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rechargeportal.rasiha.dto.request.AddonRequest;
import rechargeportal.rasiha.dto.request.PlansRequest;
import rechargeportal.rasiha.dto.response.AddonResponse;
import rechargeportal.rasiha.dto.response.PlansListResponse;
import rechargeportal.rasiha.dto.response.PlansResponse;
import rechargeportal.rasiha.model.Addon;
import rechargeportal.rasiha.model.Plans;
import rechargeportal.rasiha.repository.PlansRepository;
import rechargeportal.rasiha.service.PlansService;



@Service
public class PlansServiceImpl implements PlansService {

    @Autowired
    private PlansRepository PlanRepository;

    @Override
    public PlansResponse createPlan(PlansRequest event) {

        var eve = Plans.builder()
                        .planname(event.getPlanname())
                        .description(event.getDescription())
                        .price(event.getPrice())
                        .data(event.getData())
                        .validity(event.getValidity())
                       .build();

        PlanRepository.save(eve);

        return PlansResponse.builder().message("Plan added successfully").build();
    }
@Override 
public PlansListResponse getAllPlan(){
    List<Plans> plan=PlanRepository.findAll();
    return PlansListResponse.builder().plans(plan).build();
}
   


}




