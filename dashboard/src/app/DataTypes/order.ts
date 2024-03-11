export class order {
    _id: string;
    userId: string;
    customerId: string;
    paymentIntentId: string;
    meals: Array<MealI>;
    subtotal: Number;
    total: number;
    shipping: shippingI;
    delivery_status: string;
    payment_status: string
    constructor(_id: string, userId: string, customerId: string, paymentIntentId: string,
        meals: Array<MealI>, subtotal: Number, total: number, shipping: shippingI,
        delivery_status: string, payment_status:string) {
            this._id = _id,
            this.userId = userId,
            this.customerId = customerId,
            this.paymentIntentId = paymentIntentId,
            this.meals = meals,
            this.subtotal = subtotal,
            this.total = total,
            this.shipping = shipping,
            this.delivery_status = delivery_status,
            this.payment_status = payment_status
    }
}

export interface MealI {
    _id: string;
    title: string;
    price: string;
    cartQuantity: number;
}
//crocky shipping interface
export interface shippingI {
    address: string,
    city: string,
    country: string,
}


