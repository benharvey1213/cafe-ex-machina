export class Product {
    name : string;
    description : string;
    price : number;
    category : string;
    imageUrl : string;

    constructor(name : string, description : string, price : number, category : string, imageUrl : string){
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.imageUrl = imageUrl;
    }

}