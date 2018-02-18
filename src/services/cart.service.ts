import { CartItem } from '../classes/cart-item';

export abstract class CartService {
  public abstract getItem(id: any): CartItem;

  public abstract getItems(): CartItem[];

  public abstract addItem(item: CartItem): void;

  public abstract removeItem(id: any): void;

  public abstract itemCount(): number;

  public abstract cost(): number;

  public abstract totalCost(): number;
}