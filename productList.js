const urlParams = new URLSearchParams(window.location.search);
const productID = urlParams.get("category");

const url = `http://kea-alt-del.dk/t7/api/products?category=${productID}`;

// const productID = urlParams.get("subcategory");

// const url = `http://kea-alt-del.dk/t7/api/products?subcategory=${productID}`;

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data){
        handleProductList(data)
    })

function handleProductList(data){
    data.forEach(showProduct);
    console.log(data);

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

    // URLSearchParams 
    // https://kea-alt-del.dk/t7/api/products/665
    copy.querySelector(".smallProduct a").href = `product.html?id=${product.id}`;
    

    // soldout onsale
    if(product.soldout){
        copy.querySelector("article").classList.add("soldOut");
    }
    if(product.discount > 0){
        copy.querySelector("article").classList.add("onSale");
    }

    document.querySelector("h2").textContent = product.category;


    //grab parent
    const parent = document.querySelector(".articles");
    //append
    parent.appendChild(copy);
    console.log("discount is "+ product.discount);
    console.log(Math.floor(product.price - (product.price * (product.discount/100))));
    console.log("product is "+ product.soldout);

    
}


