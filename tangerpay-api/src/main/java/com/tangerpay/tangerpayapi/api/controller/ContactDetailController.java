package com.tangerpay.tangerpayapi.api.controller;

import com.tangerpay.tangerpayapi.api.model.ContactDetail;
import com.tangerpay.tangerpayapi.api.model.ContactDetailRequest;
import com.tangerpay.tangerpayapi.service.ContactDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ContactDetailController {
    @Autowired
    private ContactDetailService contactDetailService;
    @PostMapping("/recordContactDetails")
    @CrossOrigin
    public String recordContactDetails(@RequestBody ContactDetailRequest request) {
        String id = contactDetailService.recordContactDetail(request.getName(), request.getPhoneNumber());
        return "Contact details recorded. ID: " + id;
    }

    @GetMapping("/retrieveContactDetails/{id}")
    @CrossOrigin
    public ContactDetail retrieveContactdetails(@PathVariable String id) {
        return contactDetailService.getContactDetailById(id);
    }

    @GetMapping("/retrieveAllContactDetails")
    @CrossOrigin
    public List<ContactDetail> retrieveAllContactdetails() {
        return contactDetailService.getAllContactDetails();
    }
}
