import { LightningElement, wire } from "lwc";
import getAccountList from "@salesforce/apex/AppController.getAccountList";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

const columns = [
  { label: "Id", fieldName: "Id" },
  { label: "Name", fieldName: "Name" },
  { label: "AccountNumber", fieldName: "AccountNumber" }
];

export default class AccountList extends LightningElement {
  columns = columns;
  accountList = [];
  //   @wire(getAccountList)
  //   getAccountList({ data, error }) {
  //     if (data) {
  //       this.accountList = data;
  //       this.dispatchEvent(
  //         new ShowToastEvent({
  //           title: "Yoohoo",
  //           message: "Here's your data!",
  //           variant: "success"
  //         })
  //       );
  //       return;
  //     }
  //     this.dispatchEvent(
  //       new ShowToastEvent({
  //         title: "Error",
  //         message: error,
  //         variant: "error"
  //       })
  //     );
  //   }

  connectedCallback() {
    getAccountList()
      .then((data) => {
        this.accountList = data;
        console.log(data);
      })
      .catch((error) => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Error",
            message: error,
            variant: "error"
          })
        );
      });
  }
}
