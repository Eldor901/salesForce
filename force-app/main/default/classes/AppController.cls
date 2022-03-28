/**
 * @description       :
 * @author            : Akrom Saidkamolov
 * @group             :
 * @last modified on  : 03-28-2022
 * @last modified by  : https://github.com/Eldor901
 **/
public with sharing class AppController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        try {
            return [SELECT Id, Name, AccountNumber FROM Account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(Id AccountId) {
        try {
            return [SELECT Id, Name, AccountNumber FROM Account WHERE id = :AccountId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        try {
            return [SELECT Id, FirstName, LastName FROM Contact];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}