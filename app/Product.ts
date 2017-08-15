export class Product {

    constructor (public name: string, public count , public price ) {
    this.name = name;
    this.count = count;
    this.price = price;
    }
    toString () {
        return `Product name: ${this.name} count: ${this.count} price: ${this.price}.`;
    }
    toStringN () {
        return `Product name: ${this.name}.`;
    }
    setCount (c: string) {
        this.count = c;
    }
    setPrice (pr: string) {
        this.price = pr;
    }
}
