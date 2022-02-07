const url = "http://kea-alt-del.dk/t7/api/products/";

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data){
        handleProductList(data)
    })

function handleProductList(data){
    data.forEach(showProduct);
}

function showProduct(product) {
    //grab the template
    const template = document.querySelector("template").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content
    copy.querySelector(".subtle").textContent = `${product.subcategory} | ${product.brandname}`;
    copy.querySelector(".productImage img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    copy.querySelector(".productImage img").alt = product.productdisplayname;
    copy.querySelector("h3").textContent = product.productdisplayname;
    copy.querySelector(".originalPrice").textContent = `DKK ${product.price}-,`;
    copy.querySelector(".discounted p").textContent = `DKK ${Math.floor(product.price - (product.price * (product.discount/100)))}-,`;
    copy.querySelector(".discounted p:last-child").textContent = `-${product.discount}%`;
    // soldout onsale
    if(product.soldout){
        copy.querySelector("article").classList.add("soldOut");
    }
    if(product.discount > 0){
        copy.querySelector("article").classList.add("onSale");
    }

    document.querySelector("h2").textContent = product.subcategory;


    //grab parent
    const parent = document.querySelector(".articles");
    //append
    parent.appendChild(copy);
    console.log("discount is "+ product.discount);
    console.log(Math.floor(product.price - (product.price * (product.discount/100))));
    console.log("product is "+ product.soldout);

}

