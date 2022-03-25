import { LightningElement, wire } from "lwc";
import getAccountList from "@salesforce/apex/AppController.getAccountList";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

const columns = [
    { label: "No", fieldName: "No" },
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
                let tempList = data.map((item, index) => {
                    return { ...item, No: index + 1 };
                });
                this.accountList = [...tempList];
                console.log(this.accountList);
            })
            .catch((error) => {
                console.log("error: ", error);
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
