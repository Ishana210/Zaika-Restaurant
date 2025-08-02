document.addEventListener("DOMContentLoaded", function () {
  // Sticky Navbar
  window.addEventListener("scroll", function () {
    const header = document.querySelector("nav");
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  // Auto year update
  document.getElementById("autodate").textContent = new Date().getFullYear();

  // Veg Menu Items
  const menuItems = [
    {
      name: "Cheese Pizza",
      price: 250,
      image: "https://tse2.mm.bing.net/th/id/OIP.0xeRXsGv08MKQI_HUFyoTAHaFj?pid=Api&P=0&h=220"
    },
    {
      name: "Veg Burger",
      price: 120,
      image: "https://tse3.mm.bing.net/th/id/OIP.Lpb5CLKfS2RXOdNoAmq-9AHaHa?pid=Api&P=0&h=220"
    },
    {
      name: "Hakka Noodles",
      price: 220,
      image: "https://tse3.mm.bing.net/th/id/OIP.SXtS5tDhI4RypeoriVKIKgHaE8?pid=Api&P=0&h=220" 
    },
    {
      name: "Cold Coffee",
      price: 80,
      image: "https://tse4.mm.bing.net/th/id/OIP.q26Il8k5HNHwSGN4niT-cwHaHa?pid=Api&P=0&h=220"
    },
    {
      name: "Grilled Sandwich",
      price: 90,
      image: "https://tse2.mm.bing.net/th/id/OIP.VguxQ_3Tnb-l87HOfDaUIQHaEK?pid=Api&P=0&h=220"
    },
    {
      name: "French Fries",
      price: 80,
      image: "https://tse1.mm.bing.net/th/id/OIP.T96-l_gUGQYf8e0GFOosngHaHm?pid=Api&P=0&h=220"
    },
    {
      name: "Veg Pasta",
      price: 150,
      image: "https://aseasonedgreeting.com/wp-content/uploads/2020/08/Closer-view-of-creamy-vegetable-pasta.jpg"
    },
    {
        name: "Dessert",
        price: 120,
        image: "https://tse4.mm.bing.net/th/id/OIP.b5y1Xiwr82EZU2gA1haZJgHaFj?pid=Api&P=0&h=220"
    },
    
    {
      name: "Ice Cream Sundae",
      price: 100,
      image: "https://tse4.mm.bing.net/th/id/OIP.l4_Tfe5m6OVgqK3T5ZUoEQHaLH?pid=Api&P=0&h=220"
    }
  ];

  const menuContainer = document.getElementById("menu-items");
  const billItems = document.getElementById("bill-items");
  const totalAmount = document.getElementById("total-amount");
  const clearButton = document.getElementById("clear-bill");

  let total = 0;

  function updateTotal() {
    totalAmount.textContent = total;
  }

  function createMenuItemCard(item) {
    const col = document.createElement("div");
    col.className = "col-md-4";

    const card = `
      <div class="card">
        <img src="${item.image}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">₹${item.price}</p>
          <button class="btn btn-success order-btn" data-name="${item.name}" data-price="${item.price}">Order Now</button>
        </div>
      </div>
    `;
    col.innerHTML = card;
    menuContainer.appendChild(col);
  }

  function addToBill(name, price) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "bill-item";
    itemDiv.innerHTML = `
      <span>${name} - ₹${price}</span>
      <span class="remove-btn">&times;</span>
    `;

    const removeBtn = itemDiv.querySelector(".remove-btn");
    removeBtn.addEventListener("click", () => {
      itemDiv.remove();
      total -= price;
      updateTotal();
    });

    billItems.appendChild(itemDiv);
    total += price;
    updateTotal();
  }

  menuItems.forEach(createMenuItemCard);

  menuContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("order-btn")) {
      const name = e.target.getAttribute("data-name");
      const price = parseInt(e.target.getAttribute("data-price"));
      addToBill(name, price);
    }
  });

  clearButton.addEventListener("click", () => {
    billItems.innerHTML = "";
    total = 0;
    updateTotal();
  });
});
