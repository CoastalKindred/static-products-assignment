const url = "http://kea-alt-del.dk/t7/api/products/1163";


fetch(url)
    .then((res) => res.json())
    .then((data) => showProduct(data));


    function showProduct(product){
        document.querySelector(".breadcrumbs .category a").textContent=product.category;
        document.querySelector(".breadcrumbs .subCategory a").textContent=product.subcategory;
        document.querySelector(".articleType").textContent=`${product.articletype} | ${product.brandname}`;
        document.querySelector(".productInfo h3").textContent=product.productdisplayname;
        document.querySelector(".productImg img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
        document.querySelector(".productImg img").alt = product.productdisplayname;
        document.querySelector(".name").textContent=product.productdisplayname;
        document.querySelector(".color").textContent = product.basecolour;
        document.querySelector(".id").textContent = product.id;
    }





