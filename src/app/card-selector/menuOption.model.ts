export class MenuOption {

    text: string;
    routerLink: string;
    color: string;

    constructor(text: string, routerLink: string, color?: string) {
        this.text = text;
        this.routerLink = routerLink;
        this.color = color;
    }

}