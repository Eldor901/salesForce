/**
 * @description       :
 * @author            : Akrom Saidkamolov
 * @group             :
 * @last modified on  : 16-03-2022
 * @last modified by  : Akrom Saidkamolov
 **/
public with sharing class QueueableExample implements Queueable {
  private String msg;
  public QueueableExample(String msg) {
    this.msg = msg;
  }

  public void execute(QueueableContext ctx) {
    System.debug(this.msg);
    // important business code

    System.enqueueJob(new SecondQueueable());
  }
}
