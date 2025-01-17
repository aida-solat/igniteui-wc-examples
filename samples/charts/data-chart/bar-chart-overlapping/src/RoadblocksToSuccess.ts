export class RoadblocksToSuccessItem {
    public constructor(init: Partial<RoadblocksToSuccessItem>) {
        Object.assign(this, init);
    }
    
    public index: number;
    public firstChoice: number;
    public topChoices: number;
    public firstChoiceLabel: string;
    public topChoicesLabel: string;
    public category: string;

}
export class RoadblocksToSuccess extends Array<RoadblocksToSuccessItem> {
    public constructor() {
        super();
        this.push(new RoadblocksToSuccessItem(
        {
            index: 0,
            firstChoice: 6,
            topChoices: 22,
            firstChoiceLabel: `6%`,
            topChoicesLabel: `22%`,
            category: `Poor Prioritization of Tasks`
        }));
        this.push(new RoadblocksToSuccessItem(
        {
            index: 1,
            firstChoice: 8,
            topChoices: 25,
            firstChoiceLabel: `8%`,
            topChoicesLabel: `25%`,
            category: `Poor Data Literacy`
        }));
        this.push(new RoadblocksToSuccessItem(
        {
            index: 2,
            firstChoice: 10,
            topChoices: 35,
            firstChoiceLabel: `10%`,
            topChoicesLabel: `35%`,
            category: `Lack of Relevant Skills`
        }));
        this.push(new RoadblocksToSuccessItem(
        {
            index: 3,
            firstChoice: 14,
            topChoices: 37,
            firstChoiceLabel: `14%`,
            topChoicesLabel: `37%`,
            category: `Lack of Resources`
        }));
        this.push(new RoadblocksToSuccessItem(
        {
            index: 4,
            firstChoice: 20,
            topChoices: 46,
            firstChoiceLabel: `20%`,
            topChoicesLabel: `46%`,
            category: `Cultural Challenges`
        }));
    }
}
