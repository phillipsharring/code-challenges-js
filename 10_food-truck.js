const vendorMenus = [
  ["pizza", "pasta"],
  ["pizza", "calzones"],
  ["lobster"],
  ["calzones"],
];

function getMasterMenu(vendorMenus) {
  const uniqueItems = new Set();
  vendorMenus.map((vendorMenu) => {
    vendorMenu.forEach((item) => uniqueItems.add(item));
  });
  return uniqueItems;
}

function displayMasterMenu() {
  const combinedMenu = document.querySelector("#combined-menu");
  const combinedMenuItems = getMasterMenu(vendorMenus);
  for (let item of combinedMenuItems.values()) {
    const li = document.createElement("li");
    li.textContent = item;
    combinedMenu.appendChild(li);
  }
}

displayMasterMenu();
