package rechargeportal.rasiha.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import rechargeportal.rasiha.model.Payment;


public interface PaymentRepository extends JpaRepository<Payment,Integer>{

}
