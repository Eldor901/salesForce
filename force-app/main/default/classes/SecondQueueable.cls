/**
 * @description       :
 * @author            : Akrom Saidkamolov
 * @group             :
 * @last modified on  : 17-03-2022
 * @last modified by  : Akrom Saidkamolov
 **/
public with sharing class SecondQueueable implements Queueable {
  public SecondQueueable() {
  }

  public void execute(QueueableContext ctx) {
    AsyncApexJob thisJob = [
      SELECT status, completedDate, ParentJobId
      FROM AsyncApexJob
      WHERE Id = :ctx.getJobId()
    ];

    System.debug('Parent Id: ');
    System.debug(thisJob.ParentJobId);
    System.debug('Status: ');
    System.debug(thisJob.Status);
    System.debug('CompletedDate: ');
    System.debug(thisJob.CompletedDate);
  }
}
