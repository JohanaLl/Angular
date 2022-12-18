export interface Product {
    name: string;
    price: number;
    image: string;
    //atributo opcional, puede venir o no
    category?: string;
}
