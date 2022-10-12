class Product{
    constructor(id,picture,name,price,stock,category){
        this.id = id
        this.picture = picture
        this.name = name
        this.price = price
        this.stock = stock
        this.category = category

    }
}
export const arrProducts =[]

function loadProducts(){
    arrProducts.push(new Product(1,"https://www.asmc.com/media/image/5f/33/64/15014-0.jpg","Gray Tshirt XL",50,100, "men"))
    arrProducts.push(new Product(2,"https://store.juventus.com/data/store/product/3/37813/product.jpg", "Classic Blue Jeans (Men)" ,75,200, "men"))
    arrProducts.push(new Product(3,"https://www.kapruka.com/cdn-cgi/image/width=700,quality=93,f=auto/shops/specialGifts/additionalImages/large/1602571490664_DSC_2091_M.jpg", "High Waist Jean (Women)", 95,300, "women"))
    arrProducts.push(new Product(4,"https://media.cntraveler.com/photos/60088d408ebb4b589a89b54e/master/w_2100,h_1500,c_limit/LightweightJackets-2021-Uniqlo.jpg", "Winter Jacket",  43,150, "men"))
    arrProducts.push(new Product(5,"https://media.gq.com/photos/622f729743716a8f1697bd92/master/w_2000,h_1333,c_limit/GQ-shorts-9.jpg", "Shorts (Men)", 35,180, "men"))
    arrProducts.push(new Product(6,"https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/8c282a22_011e.jpg", "shorts (Women)", 57,350, "women"))
    arrProducts.push(new Product(7,"https://d49ohm0ne1s0e.cloudfront.net/layouts/dragon/content-images/Dark-Burgundy-Red-Suit.jpg", "Classic man dress", 90,200, "men"))
    arrProducts.push(new Product(8,"https://ae01.alicdn.com/kf/HTB1dZ3XByOYBuNjSsD4q6zSkFXaf/V-Neck-Lace-Knee-Length-Women-s-Dresses-With-Short-Sleeves-Dress-For-Women-Dress-Female.jpg_Q90.jpg_.webp", "Classic woman dress",  100,125, "women"))
}

loadProducts();