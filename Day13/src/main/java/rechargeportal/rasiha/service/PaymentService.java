package rechargeportal.rasiha.service;

import rechargeportal.rasiha.dto.request.PaymentRequest;

import rechargeportal.rasiha.dto.response.PaymentListResponse;
import rechargeportal.rasiha.dto.response.PaymentResponse;


public interface PaymentService {
    PaymentResponse createPayment(PaymentRequest payment);
    PaymentListResponse getAllPayment();
}
