package rechargeportal.rasiha.service;

import rechargeportal.rasiha.dto.request.AddonRequest;
import rechargeportal.rasiha.dto.response.AddonListResponse;
import rechargeportal.rasiha.dto.response.AddonResponse;



public interface AddonService {
    AddonResponse createAddon(AddonRequest addon);
    AddonListResponse getAllAddons();
    AddonResponse updateAddon(int addonid, AddonRequest request);
}