package rechargeportal.rasiha.controller;



import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import rechargeportal.rasiha.dto.request.PlansRequest;
import rechargeportal.rasiha.dto.response.PlansListResponse;
import rechargeportal.rasiha.dto.response.PlansResponse;
import rechargeportal.rasiha.service.PlansService;


@RestController
@RequestMapping("/events")
@PreAuthorize("hasRole('USER')")
@RequiredArgsConstructor
public class PlansController {

    private final PlansService planservice;

    @PreAuthorize("hasAuthority('user:create')")
    @PostMapping("/addplan")
    public ResponseEntity<?> createEvents(@RequestBody PlansRequest planrequest){
        PlansResponse response = new PlansResponse();

        try{
            response = planservice.createPlan(planrequest);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
    @GetMapping("/allplan")
    public ResponseEntity<?> getAllPlan(){
        PlansListResponse planlistresponse=new PlansListResponse();
        try{
            planlistresponse=planservice.getAllPlan();
            return new ResponseEntity<>(planlistresponse,HttpStatus.CREATED);
        }
        catch(Exception e){
        return new ResponseEntity<>(planlistresponse,HttpStatus.EXPECTATION_FAILED); 
    }
    }

   
}

