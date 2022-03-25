/**
 * @description       :
 * @author            : Akrom Saidkamolov
 * @group             :
 * @last modified on  : 11-03-2022
 * @last modified by  : Akrom Saidkamolov
 **/
trigger AccountTrigger on Account(before update) {
  // Trigger.Old - [{ accountNumber: '####' }]   read only
  // Trigger.New - [{ accountNumber: '1234' }]   read/write

  for (Account acc : Trigger.New) {
    acc.BillingCountry = 'UK';
  }

}
