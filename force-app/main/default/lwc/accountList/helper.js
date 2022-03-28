import { ShowToastEvent } from "lightning/platformShowToastEvent";

const actions = [
    { label: "view", name: "view" },
    { label: "delete", name: "delete" }
];

export const columns = [
    { label: "No", fieldName: "No" },
    { label: "Id", fieldName: "Id" },
    { label: "Name", fieldName: "Name" },
    { label: "AccountNumber", fieldName: "AccountNumber" },
    { type: "action", typeAttributes: { rowActions: actions } }
];

export const getAllAccountList = (data) =>
    data.map((item, index) => {
        return { ...item, No: index + 1 };
    });

export const showError = (error) => {
    this.dispatchEvent(
        new ShowToastEvent({
            title: "Error",
            message: error,
            variant: "error"
        })
    );
};
