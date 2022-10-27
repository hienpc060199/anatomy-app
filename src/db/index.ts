import { MemberImageProps } from "../components/MemberImage";
import { MemberItemProps } from "../components/MemberItem";
import { 
  amphibiansItems, 
  crustaceanItems, 
  featheredItems, 
  insectItems, 
  mammalItems, 
  reptileItems, 
  nerveItems, 
  endoctineItems, 
  reproductiveItems 
} from "./category";

export const headerSlide: MemberImageProps[] = [
{ name: "respiratorySystem", image: require("../../assets/image/body.png") },
{ name: "respiratorySystem", image: require("../../assets/image/body.png") },
{ name: "respiratorySystem", image: require("../../assets/image/body.png") },
{ name: "respiratorySystem", image: require("../../assets/image/body.png") },
{ name: "respiratorySystem", image: require("../../assets/image/body.png") },
];

// CategoryData
interface CategoryData {
  [key: string]: MemberItemProps[];
}

export const categoryData: CategoryData = {
  respiratorySystem : mammalItems,
  nervousSystem : reptileItems,
  musculoskeletalSystem : insectItems,
  maleSystem : featheredItems,
  femaleSystem : crustaceanItems,
  excretorySystem : amphibiansItems,
  endocrineSystem : nerveItems,
  digestiveSystem : endoctineItems,
  circulatorySystem : reproductiveItems,
};
