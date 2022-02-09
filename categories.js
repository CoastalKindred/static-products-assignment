const url = "http://kea-alt-del.dk/t7/api/categories/";

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data){
        handleCategoryList(data)
    })

function handleCategoryList(data){
    data.forEach(showCategory);
    console.log(data);
}

function showCategory(product) {
    //grab the template
    const template = document.querySelector("template").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content
    copy.querySelector("a").textContent = product.category;  
 

    // URLSearchParams 
    // https://kea-alt-del.dk/t7/api/products/665
    copy.querySelector("a").href = `productList.html?category=${product.category}`;
    

    //grab parent
    const parent = document.querySelector(".categories");
    //append
    parent.appendChild(copy);
    
}


