/**
 * @description       :
 * @author            : Akrom Saidkamolov
 * @group             :
 * @last modified on  : 24-03-2022
 * @last modified by  : Akrom Saidkamolov
 **/
public with sharing class HelloWorld {
  public static void printHello() {
    System.debug('Bye!');
  }

  private Integer getNumber() {
    return 5;
  }

  public static Opportunity getOppty(Id accountId) {
    Account acc = [
      SELECT name, accountNumber
      FROM account
      WHERE id = :accountId
    ];
    Opportunity opp = new Opportunity(
      Name = 'Oppty ' + acc.name,
      CloseDate = Date.newInstance(2022, 10, 3),
      StageName = 'Open',
      AccountId = accountId
    );

    String jsonString = 'abc' + 'somedata' + 'some other data';

    insert opp;

    return opp;
  }
}
