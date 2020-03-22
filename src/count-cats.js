module.exports = function countCats(backyard) {
  let i=0;backyard.map((s) => s.map((element) => { i+= element === '^^' ?1:0 }));return i;
};
