import { Card } from "@/app/home/page";


//Check if all cards are opened
export function checkMatchedStatus(arr: Card[]) {
  return arr?.every(obj => obj.matched === true);
}
