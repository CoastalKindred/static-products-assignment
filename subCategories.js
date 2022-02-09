const url = "http://kea-alt-del.dk/t7/api/subcategories/";

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data){
        handleSubCategoryList(data)
    })

function handleSubCategoryList(data){
    data.forEach(showSubCategory);
    console.log(data);
}

function showSubCategory(product) {
    //grab the template
    const template = document.querySelector("template").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content
    copy.querySelector("a").textContent = product.subcategory;  
 

    // URLSearchParams 
    // https://kea-alt-del.dk/t7/api/products/665
    copy.querySelector("a").href = `productList.html?subcategory=${product.subcategory}`;
    

    //grab parent
    const parent = document.querySelector(".subCategories");
    //append
    parent.appendChild(copy);
    
}


