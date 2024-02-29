package com.tangerpay.tangerpayapi.service;

import com.tangerpay.tangerpayapi.api.model.ContactDetail;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ContactDetailService {
    private Map<String, ContactDetail> contactDetailMap = new HashMap<>();
    private int idCounter = 1;
    public  String recordContactDetail(String name, String phoneNumber)  {
        String id = String.valueOf(idCounter++);
        ContactDetail contactDetail = new ContactDetail(id, name, phoneNumber);
        contactDetailMap.put(id, contactDetail);
        return id;
    }
    public ContactDetail getContactDetailById(String id) {
        return contactDetailMap.get(id);
    }

    public List<ContactDetail> getAllContactDetails() {
        return new ArrayList<>(contactDetailMap.values());
    }
}
