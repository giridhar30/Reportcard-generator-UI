export class MarkRecord {
    registerNo: string = '';
    term: number = 0;
    maths: number = 0;
    physics: number = 0;
    chemistry: number = 0;
    biology: number = 0;
    history: number = 0;
    total?: number;
    avg?: number;

    constructor(registerNo: string, term: number, maths: number, physics: number, chemistry: number, biology: number, history: number, total?:number, avg?: number) {
        this.registerNo = registerNo;
        this.term = term;
        this.maths = maths;
        this.physics = physics;
        this.chemistry = chemistry;
        this.biology = biology;
        this.history = history;
        this.total = total;
        this.avg = avg;
    }

}