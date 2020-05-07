export class Product {
    name : string;
    price : number;
    category : string;
    description : string;
    imageUrl : string;

    constructor(name : string, price : number, category : string, description : string, imageUrl : string){
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.imageUrl = imageUrl;
    }

}