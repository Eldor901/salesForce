import { LightningElement, track } from "lwc";
import createAccount from "@salesforce/apex/AppController.createAccount";

export default class AccountForm extends LightningElement {
    @track
    accountName;

    handleAccountNameChange(event) {
        this.accountName = event.target.value;
    }

    async handleSubmit() {
        try {
            await createAccount({ AccountName: this.accountName });
            this.accountName = "";
        } catch (e) {
            console.log(e);
        }
        // console.log(createdAccount);
    }
}
