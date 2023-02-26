const quantityCategory = document.querySelector(".quantity-category");
const applyQty = document.querySelector(".apply-qty");
const qtySection = document.querySelector(".qty-section");
const categories = document.querySelector(".categories");

//об'єкт з категоріями
const categoriesInfo = {
  cost: [],
};

//хендлер для скриття першого вікна і показу вікна яке запитує назви категорії
const handlerApplyQty = () => {
  //перевіряю введену кількість
  const qty = quantityCategory.value;
  if (qty > 0) {
    qtySection.style.display = "none";

    const markup = `
        <label for="name">Назва витрати</label>
        <input id="name" />
        <label for="qty">Скільки витратили, грн</label>
        <input type="number" id="cost" />
        `;

    //формую елементи по введеної кількості
    for (let i = 0; i < qty; i++) {
      const category = document.createElement("div");
      category.classList.add("category");
      category.innerHTML = markup;
      categories.append(category);
      categories.classList.add("wrapper");
    }

    //додаю сабміт кнопку
    const applyInfo = document.createElement("button");
    applyInfo.classList.add("applyInfo");
    applyInfo.innerText = "Apply";
    categories.append(applyInfo);

    applyInfo.addEventListener("click", (e) => {
      handlerApplyInfo(e);
    });
  }
};

//хендлер для початку рахування сумми
const handlerApplyInfo = (e) => {
  e.preventDefault();
  const categoriesName = document.querySelectorAll("#name");
  const categoriesCost = document.querySelectorAll("#cost");

  //заношу данні із форми у об'єкт
  for (let i = 0; i < categoriesName.length; i++) {
    categoriesInfo.cost.push({
      name: categoriesName[i].value,
      money: categoriesCost[i].value,
    });
  }

  //рахую суму
  const total = categoriesInfo.cost.reduce((acc, currentItem) => {
    return acc + Number(currentItem.money);
  }, 0);

  //показую суму
  categories.style.display = "none";
  const response = document.querySelector(".response");
  response.classList.add("wrapper");
  response.innerHTML = `3a минулий місяць Ви витратили ${total} грн`;
};

applyQty.addEventListener("click", handlerApplyQty);
