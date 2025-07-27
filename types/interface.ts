

export interface ProductProps{
    image:string;
    id?:number| undefined;
    productName:string
}


export interface CardProps{
  product:ProductProps;
    prodId:number |undefined
}
