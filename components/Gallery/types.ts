import { ProductType } from "@/interfaces/products";
import { StaticImageData } from "next/image";

export interface GalleryProps { 
  slidesInfo: Array<ProductType & { img: StaticImageData }> 
} 