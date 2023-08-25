const productarr = [
  {
    category: "Shoes",
    products: [
      {
        productName: "LV Trainer Sneaker",
        productImage:
          "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker-shoes--BP9U3PGC22_PM2_Front%20view.png?wid=1090&hei=1090",
        productPrice: "₹ 120,000",
      },
      {
        productName: "Rivoli Sneaker",
        productImage:
          "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-rivoli-sneaker-shoes--BORU1PMI45_PM2_Front%20view.png?wid=1090&hei=1090",
        productPrice: "₹ 86,500",
      },
      {
        productName: "LV Trainer Sneaker",
        productImage:
          "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker-shoes--BO9U1PSR41_PM1_Interior%20view.png?wid=2400&hei=2400",
        productPrice: "₹ 480,000",
      },
      {
        productName: "LV Racer Moccasin",
        productImage:
          "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-racer-moccasin-shoes--BPBL1MAG20_PM2_Front%20view.png?wid=1090&hei=1090",
        productPrice: "₹ 81,500",
      },
      {
        productName: "Rivoli Sneaker",
        productImage:
          "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-rivoli-sneaker-shoes--BPRU1PPC02_PM2_Front%20view.png?wid=1090&hei=1090",
        productPrice: "₹ 93,000",
      },
    ],
  },
  {
    category: "T-Shirt",
    products: [
      {
        productName: "Tricolor Monogram T-Shirt ",
        productImage:
          "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-tricolor-monogram-t-shirt%20-ready-to-wear--FPJT97AKA985_PM2_Front%20view.png?wid=1090&hei=1090",
        productPrice: "₹ 124,000",
      },
      {
        productName: "Oversized LV Chain T-Shirt ",
        productImage:
          "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-oversized-lv-chain-t-shirt%20-ready-to-wear--FPTS43OB0601_PM2_Front%20view.png?wid=1090&hei=1090",
        productPrice: "₹ 77,500",
      },
      {
        productName: "Graphic Cotton Short-Sleeved T-Shirt",
        productImage:
          "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-graphic-cotton-short-sleeved-t-shirt-ready-to-wear--HPY30WY93920_PM2_Front%20view.png?wid=1090&hei=1090",
        productPrice: "₹ 92,500",
      },
      {
        productName: "LV Frequency Graphic T-Shirt",
        productImage:
          "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-graphic-cotton-short-sleeved-t-shirt-ready-to-wear--HPY30WY93920_PM2_Front%20view.png?wid=1090&hei=1090",
        productPrice: "₹ 83,500",
      },
    ],
  },

  //   {
  // category : "Jeans" ,
  // products : [
  //     {
  //         productName: "",
  //         productImage:
  //           "",
  //         productPrice: "",
  //       },
  //     {
  //         productName: "",
  //         productImage:
  //           "",
  //         productPrice: "",
  //       },
  //     {
  //         productName: "",
  //         productImage:
  //           "",
  //         productPrice: "",
  //       },
  //     {
  //         productName: "",
  //         productImage:
  //           "",
  //         productPrice: "",
  //       },
  //     {
  //         productName: "",
  //         productImage:
  //           "",
  //         productPrice: "",
  //       },
  // ]
  //   }
];

let cnt = 1;
let productEle = document.querySelector(".product");
console.log(productEle);
productarr.forEach((element, index) => {
  element.products.forEach((ele, index) => {
    let div = document.createElement("div");
    div.classList.add(`feature-product`);
    div.classList.add(`item${cnt}`);
    let a = document.createElement("a");
    let img = document.createElement("img");
    let divinner = document.createElement("div");
    divinner.classList.add("detail-about-product");
    let p = document.createElement("p");
    let divreview = document.createElement("div");
    divreview.classList.add("review");
    divreview.innerHTML = `<i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>`;
    // console.log(divreview);
    let divprice = document.createElement("div");
    divprice.classList.add("price");
    img.src = ele.productImage;
    a.appendChild(img);
    p.innerHTML = ele.productName;
    divprice.innerHTML = ele.productPrice;
    divinner.appendChild(p);
    divinner.appendChild(divreview);
    divinner.appendChild(divprice);
    div.appendChild(a);
    div.appendChild(divinner);
    productEle.appendChild(div);
    cnt++;
  });
});

// let productss = document.querySelectorAll('.feature-product p');
// console.log(productss[0].textContent);

let productfilter = document.querySelector(".product-filtered");
let rt = document.querySelector(".rt");
rt.addEventListener("click", (e) => {
  rt.childNodes[1].style.borderRadius = "6px";
  productfilter.style.display = "block";
});
rt.addEventListener("mouseleave", (e) => {
  console.log(e.target, "leave");
  rt.childNodes[1].style.borderRadius = "18px";
  productfilter.style.display = "none";
});

// ...

// Clear the productfilter before adding new search results
function clearSearchResults() {

  while (productfilter.firstChild) {
    productfilter.removeChild(productfilter.firstChild);
  }
}
function clritems(){
  while (productEle.firstChild) {
    productEle.removeChild(productEle.firstChild);
  }
}
function quest(value) {
  clearSearchResults();
  arr = [];
  productarr.forEach((element, index) => {
    element.products.forEach((ele, index) => {
      if (ele.productName.toUpperCase().includes(value.toUpperCase())) {
        let obj = {
          link: ele.productImage,
          proname: ele.productName,
        };
        arr.push(obj);
      }
    });
  });

  for (let x of arr) {
    let div = document.createElement("div");
    div.classList.add("product-filter");
    let divimg = document.createElement("div");
    divimg.classList.add("pro-img"); // Corrected this line, used classList.add instead of div.classList.add
    let img = document.createElement("img");
    let divname = document.createElement("div");
    divname.classList.add("pro-name"); // Corrected this line, used classList.add instead of div.classList.add
    img.src = x.link;
    divimg.appendChild(img);
    divname.innerHTML = x.proname;
    div.appendChild(divimg);
    div.appendChild(divname);
    productfilter.appendChild(div);
  }
}
function pricemake(val) {
  let newval = "";
  for (let i = 0; i < val.length; i++) {
    if (val[i] >= "0" && val[i] <= "9") {
      newval += val[i];
    }
  }
  return newval;
}

function sortPrice() {
  clritems();
  productarr.forEach((element, index) => {
    element.products.forEach((ele, index) => {
      console.log(pricemake(ele.productPrice));
      let num = pricemake(ele.productPrice);
      num = Number(num);
      console.log(num);
      if (num > 100000) {
        let div = document.createElement("div");
        div.classList.add(`feature-product`);
        div.classList.add(`item${cnt}`);
        let a = document.createElement("a");
        let img = document.createElement("img");
        let divinner = document.createElement("div");
        divinner.classList.add("detail-about-product");
        let p = document.createElement("p");
        let divreview = document.createElement("div");
        divreview.classList.add("review");
        divreview.innerHTML = `<i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star-half-stroke"></i>`;
        // console.log(divreview);
        let divprice = document.createElement("div");
        divprice.classList.add("price");
        img.src = ele.productImage;
        a.appendChild(img);
        p.innerHTML = ele.productName;
        divprice.innerHTML = ele.productPrice;
        divinner.appendChild(p);
        divinner.appendChild(divreview);
        divinner.appendChild(divprice);
        div.appendChild(a);
        div.appendChild(divinner);
        productEle.appendChild(div);
        cnt++;
      }
    });
  });
}
const select = document.getElementById("select");
console.log(select.value);
select.addEventListener("change", (e) => {
  if(select.value==='Sort by price'){

    sortPrice();
  }
  else if(select.value ==='Default Shopping '){
    window.location.reload();
  }
  console.log(select.value);
});

// Use input event instead of change event for real-time search
inputBox.addEventListener("input", (e) => {
  // arr = [];
  // clearSearchResults();
  quest(inputBox.value);
});

// ...
