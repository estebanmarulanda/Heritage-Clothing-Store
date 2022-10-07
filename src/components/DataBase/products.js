class Product{
    constructor(id,foto,nombre,precio,precioFinal,cantidad,precioFinalCOP){
        this.id = id
        this.foto = foto
        this.nombre = nombre
        this.precio = precio
        this.precioFinal = precioFinal
        this.precioFinalCOP = precioFinalCOP
        this.cantidad = cantidad

    }
}
export const arrProducts =[]

function loadProducts(){
    arrProducts.push(new Product(1,"https://http2.mlstatic.com/D_NQ_NP_873695-MLA48049389829_102021-O.jpg","Monitor LG UltraGear",1000))
    arrProducts.push(new Product(2,"https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/11/26125525/17098374.jpg", "TECLADO GAMER MICRONICS FRANTIC" ,200))
    arrProducts.push(new Product(3,"https://http2.mlstatic.com/D_NQ_NP_966392-MLA45258548473_032021-V.jpg", "Logitech G Series G935 negro y azul con luz rgb LED", 150))
    arrProducts.push(new Product(4,"https://i.linio.com/p/eaa7a6152696b75c14429394a3f427c8-product.jpg", "Mouse Logitech G502",  100,500))
    arrProducts.push(new Product(5,"https://http2.mlstatic.com/D_NQ_NP_893811-MLA49178738697_022022-O.jpg", "2x8 Trident memory ram 3200mhz", 900))
    arrProducts.push(new Product(6,"https://bluegeek.co/wp-content/uploads/2020/02/intel-core-i9-10900k-review10.png", "intel-core-i9-10900k", 1200))
    arrProducts.push(new Product(7,"https://images.evga.com/products/gallery/24G-P5-3987-KR_XL_1.jpg", "EVGA GeForce RTX 3090 FTW3 ULTRA GAMING", 1500))
    arrProducts.push(new Product(8,"https://i.blogs.es/b8a112/corsair/450_1000.jpg", "Refrigeracion liquida Corsair",  700))
}

loadProducts();