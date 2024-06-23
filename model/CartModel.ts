class CartModel {
    id: number;
    name: string;
    image: string;
    price: number;
    priceTotal: number;
    quantity: number;

    constructor(
        id: number,
    name: string,
    image: string,
    price: number,
    priceTotal: number,
    quantity: number,
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.priceTotal = priceTotal;
        this.quantity = quantity;
    }
}

export default CartModel;