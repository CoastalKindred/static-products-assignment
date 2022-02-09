const urlParams = new URLSearchParams(window.location.search);
const productID = urlParams.get("id");


const url = `http://kea-alt-del.dk/t7/api/products/${productID}`;


fetch(url)
    .then((res) => res.json())
    .then((data) => showProduct(data));


    function showProduct(product){
        document.querySelector(".breadcrumbs .category a").textContent=product.category;
        document.querySelector(".breadcrumbs .subCategory a").textContent=product.subcategory;

        document.querySelector(".breadcrumbs .category a").href=`productList.html?category=${product.category}`;
        document.querySelector(".breadcrumbs .subCategory a").href=`productList.html?subcategory=${product.subcategory}`;


        document.querySelector(".articleType").textContent=`${product.articletype} | ${product.brandname}`;
        document.querySelector(".productInfo h3").textContent=product.productdisplayname;
        document.querySelector(".productImage img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
        document.querySelector(".productImage img").alt = product.productdisplayname;
        document.querySelector(".name").textContent=product.productdisplayname;
        document.querySelector(".color").textContent = product.basecolour;
        document.querySelector(".id").textContent = product.id;
        document.querySelector(".originalPrice").textContent = `DKK ${product.price}-,`;
        document.querySelector(".discounted p").textContent = `DKK ${Math.floor(product.price - (product.price * (product.discount/100)))}-,`;
        document.querySelector(".discounted p:last-child").textContent = `-${product.discount}%`;


        // soldout onsale
    if(product.soldout){
        document.querySelector(".product").classList.add("soldOut");
    }
    if(product.discount > 0){
        document.querySelector(".product").classList.add("onSale");
    }
    }

 



