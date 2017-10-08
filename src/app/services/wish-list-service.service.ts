// import { Injectable } from '@angular/core';


// export const WISHLIST_KEY : string = "wish_list";

// @Injectable()
// export class WishListService {

//   constructor(private localStorage: WindowLocalStorage) { }

//   getWishList(){
//     let items = this.localStorage.localStorage.getItem(WISHLIST_KEY);
//     return JSON.parse(items);
//   }

//   addToWishList(item : any){
//     let wishlist = this.getWishList();
//     if(wishlist == null){
//       this.localStorage.localStorage.setItem(WISHLIST_KEY,item);
//     }
//     else{
//       this.localStorage.localStorage.setItem(WISHLIST_KEY,Object.assign(wishlist,item));
//     }
//   }

//   clearWishList(){
//     this.localStorage.localStorage.removeItem(WISHLIST_KEY);
//   }
// }
