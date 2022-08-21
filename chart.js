const horizontalBarChart = (target, labelData, categoriesData) => {
  // TARGET LOCATION
  const targetLocation = document.getElementById(target);

  targetLocation.innerHTML +=
    "<div class='hbc-row-wrapper' ></div> <div class='hbc-category-wrapper' ></div>";

  const targetRowLocation =
    targetLocation.querySelectorAll(".hbc-row-wrapper")[0];
  const targetCategoryLocation = targetLocation.querySelectorAll(
    ".hbc-category-wrapper"
  )[0];

  // PERCENT DATA
  let percentData = [];

  labelData.map((item) => {
    percentData.push(item.percent);
  });

  // FIND TRUE PERCENT FROM MAX VALUE
  const findTruePercent = (currentPercent) => {
    let maxPercent = Math.max(...percentData);
    return {
      percent: currentPercent,
      truePercent: Math.round((currentPercent * 100) / maxPercent),
    };
  };

  // FIND COLOR FROM CATEGORY NAME
  const findCategoryColor = (categoryName) => {
    return categoriesData.find((item) => item.name == categoryName).color;
  };

  // ROW ITEM DOM ELEMET
  const barRowItem = (label, percent, color) => {
    return `<div class="hbc-row"><div class="hbc-label">${label}</div><div class="hbc-bar"><span style="width: ${percent.truePercent}%;background-color: ${color}" >%${percent.percent}</span></div></div>`;
  };

  // CATEGORY ITEM DOM ELEMET
  const categoryRowItem = (name, color) => {
    return `<div class="hbc-category-item"><span class="hbc-category-point" style="background-color: ${color}" ></span>${name}</div>`;
  };

  labelData.map((item, i) => {
    targetRowLocation.innerHTML += barRowItem(
      item.name,
      findTruePercent(percentData[i]),
      findCategoryColor(item.category)
    );
  });

  categoriesData.map((item) => {
    targetCategoryLocation.innerHTML += categoryRowItem(item.name, item.color);
  });
};
