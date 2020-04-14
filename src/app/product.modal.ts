export class Product {
  id: number ;
  name: string ;
  amount: number;
  quantity: number;
  des: string;
  constructor(id: number,  name: string,  amount: number, quantity: number, des: string) {
      this.id = id;
      this.name = name;
      this.amount = amount;
      this.quantity = quantity;
      this.des = des;
  }
}
