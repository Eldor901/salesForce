/**
 * @description       :
 * @author            : Akrom Saidkamolov
 * @group             :
 * @last modified on  : 18-03-2022
 * @last modified by  : Akrom Saidkamolov
 **/
@isTest
public with sharing class HelloWorldTest {
  @TestSetup
  static void makeData() {
    Account acc = new Account(Name = 'Test', AccountNumber = '123123');
    insert acc;
  }

  @isTest
  static void getOpptyTest() {
    Account acc = [SELECT Id, Name FROM Account LIMIT 1];
    // Test.startTest();
    Opportunity result = HelloWorld.getOppty(acc.Id);
    // Test.stopTest();

    System.assertEquals('Oppty ' + acc.Name, result.Name, 'Assertions failed.');
  }
}
