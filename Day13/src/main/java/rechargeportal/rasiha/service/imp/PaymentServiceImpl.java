package rechargeportal.rasiha.service.imp;







import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rechargeportal.rasiha.dto.request.PaymentRequest;

import rechargeportal.rasiha.dto.response.PaymentListResponse;
import rechargeportal.rasiha.dto.response.PaymentResponse;

import rechargeportal.rasiha.model.Payment;

import rechargeportal.rasiha.repository.PaymentRepository;

import rechargeportal.rasiha.service.PaymentService;




@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Override
    public PaymentResponse createPayment(PaymentRequest event) {

        var eve = Payment.builder()
                        .method(event.getMethod())
                        .amount(event.getAmount())
                        .date(event.getDate())
                        
                       .build();

        paymentRepository.save(eve);

        return PaymentResponse.builder().message("Plan added successfully").build();
    }
@Override 
public PaymentListResponse getAllPayment(){
    List<Payment> payment=paymentRepository.findAll();
    return PaymentListResponse.builder().payment(payment).build();
}
   


}






