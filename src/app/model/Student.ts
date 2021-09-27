import { MarkRecord } from "./MarkRecord";

export class Student {
    registerNo: string = '';
    name: string = '';
    dob: string = '';
    fatherName: string = '';
    motherName: string = '';
    phone: string = '';
    mailId: string = '';
    marks?: MarkRecord[];

    constructor(registerNo: string, name: string, dob: string, fatherName: string, motherName: string, phone: string, mailId: string, marks?: MarkRecord[]) {
        this.registerNo = registerNo;
        this.name = name;
        this.dob = dob;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.phone = phone;
        this.mailId = mailId;
        this.marks = marks;
    }
}