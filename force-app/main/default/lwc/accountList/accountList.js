import { LightningElement, wire } from "lwc";
import getAccountList from "@salesforce/apex/AppController.getAccountList";
import getAccount from "@salesforce/apex/AppController.getAccount";
import { getAllAccountList, showError, columns } from "./helper";

export default class AccountList extends LightningElement {
    columns = columns;
    accountList = [];
    account = [];
    @wire(getAccountList)
    getAccountList({ data, error }) {
        if (data) this.accountList = getAllAccountList(data);

        if (error) showError(error);
    }

    // @wire(getAccount)
    // getAccount({ data, error }) {

    // }

    deleteAccountList(id) {
        console.log(id);
    }

    async handleRowAction() {
        // const zactionName = event.datail.action.name;

        this.account = (await getAccount({ AccountId: "0018c00002DZQVNAA5" }))[0];

        // switch (actionName) {
        //     case "view":
        //         this.getAcount("1");
        //         break;
        //     case "delete":
        //         this.deleteAccountList("1");
        //         break;
        //     default:
        //         break;
        // }
    }
}
