(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e93b6ca"],{"9d2a":function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("section",{staticClass:"grid-view wishlist-items"},t._l(t.products,(function(i){return a("b-card",{key:i.id,staticClass:"ecommerce-card",attrs:{"no-body":""}},[a("div",{staticClass:"item-img text-center"},[a("b-link",{attrs:{to:{name:"apps-e-commerce-product-details",params:{slug:i.slug}}}},[a("b-img",{staticClass:"card-img-top",attrs:{alt:i.name+"-"+i.id,fluid:"",src:i.image}})],1)],1),a("b-card-body",[a("div",{staticClass:"item-wrapper"},[a("div",{staticClass:"item-rating"},[a("ul",{staticClass:"unstyled-list list-inline"},t._l(5,(function(t){return a("li",{key:t,staticClass:"ratings-list-item",class:{"ml-25":t-1}},[a("feather-icon",{class:[{"fill-current":t<=i.rating},t<=i.rating?"text-warning":"text-muted"],attrs:{icon:"StarIcon",size:"16"}})],1)})),0)]),a("div",[a("h6",{staticClass:"item-price"},[t._v(" $"+t._s(i.price)+" ")])])]),a("h6",{staticClass:"item-name"},[a("b-link",{staticClass:"text-body",attrs:{to:{name:"apps-e-commerce-product-details",params:{slug:i.slug}}}},[t._v(" "+t._s(i.name)+" ")]),a("b-card-text",{staticClass:"item-company"},[t._v(" By "),a("b-link",{staticClass:"ml-25"},[t._v(" "+t._s(i.brand)+" ")])],1)],1),a("b-card-text",{staticClass:"item-description"},[t._v(" "+t._s(i.description)+" ")])],1),a("div",{staticClass:"item-options text-center"},[a("b-button",{staticClass:"btn-wishlist remove-wishlist",attrs:{variant:"light"},on:{click:function(a){return t.removeProductFromWishlistClick(i)}}},[a("feather-icon",{attrs:{icon:"XIcon"}}),a("span",[t._v("Remove")])],1),a("b-button",{staticClass:"btn-cart move-cart",attrs:{variant:"primary"},on:{click:function(a){return t.handleWishlistCartActionClick(i,t.removeProductFromWishlistClick)}}},[a("feather-icon",{staticClass:"mr-50",attrs:{icon:"ShoppingCartIcon"}}),a("span",[t._v(t._s(i.isInCart?"View In Cart":"Move to Cart"))])],1)],1)],1)})),1)},e=[],c=(a("c740"),a("a434"),a("205f")),n=a("6197"),r=a("4918"),o=a("d6e4"),l=a("aa59"),d=a("1947"),u=a("4360"),m=a("ed09"),p=a("e316"),C={components:{BCard:c["a"],BCardBody:n["a"],BImg:r["a"],BCardText:o["a"],BLink:l["a"],BButton:d["a"]},setup:function(){var t=Object(p["b"])(),i=t.handleWishlistCartActionClick,a=Object(m["ref"])([]),s=Object(p["a"])(),e=s.removeProductFromWishlist,c=function(t){e(t.id).then((function(){var i=a.value.findIndex((function(i){return i.id===t.id}));a.value.splice(i,1)}))},n=function(){u["a"].dispatch("app-ecommerce/fetchWishlistProducts").then((function(t){a.value=t.data.products}))};return n(),{products:a,handleWishlistCartActionClick:i,removeProductFromWishlistClick:c}}},v=C,b=(a("ee37"),a("2877")),f=Object(b["a"])(v,s,e,!1,null,null,null);i["default"]=f.exports},d368:function(t,i,a){},d6e4:function(t,i,a){"use strict";a.d(i,"a",(function(){return l}));var s=a("2b0e"),e=a("b42e"),c=a("c637"),n=a("a723"),r=a("cf75"),o=Object(r["d"])({textTag:Object(r["c"])(n["u"],"p")},c["u"]),l=s["default"].extend({name:c["u"],functional:!0,props:o,render:function(t,i){var a=i.props,s=i.data,c=i.children;return t(a.textTag,Object(e["a"])(s,{staticClass:"card-text"}),c)}})},ee37:function(t,i,a){"use strict";a("d368")}}]);
//# sourceMappingURL=chunk-2e93b6ca.d8545e31.js.map