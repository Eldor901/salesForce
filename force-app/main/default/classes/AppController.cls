/**
 * @description       : 
 * @author            : Akrom Saidkamolov
 * @group             : 
 * @last modified on  : 25-03-2022
 * @last modified by  : Akrom Saidkamolov
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
}
