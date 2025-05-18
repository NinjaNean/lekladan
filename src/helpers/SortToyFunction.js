function sortToysBy(filter, list) {
  let sorted = [...list];

  switch (filter) {
    case "price-asc": {
      sorted.sort((a, b) => {
        return a.price - b.price;
      });
      break;
    }
    case "price-desc": {
      sorted.sort((a, b) => {
        return b.price - a.price;
      });

      break;
    }
    case "name-asc": {
      sorted.sort((toy1, toy2) => {
        let toyName1 = toy1.name;
        let toyName2 = toy2.name;

        if (toyName1 < toyName2) {
          return -1;
        }
        if (toyName1 > toyName2) {
          return 1;
        }
        return 0;
      });
      break;
    }
    case "name-desc": {
      sorted.sort((toy1, toy2) => {
        let toyName1 = toy1.name;
        let toyName2 = toy2.name;

        if (toyName1 < toyName2) {
          return 1;
        }
        if (toyName1 > toyName2) {
          return -1;
        }
        return 0;
      });
      break;
    }
  }

  return sorted;
  // setRenderedList(sorted);
}

export default sortToysBy;
