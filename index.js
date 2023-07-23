// code your solution here
// 1) Define saturdayFun function declaration
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// 4) Define mondayWork function expression
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// 7) Define wrapAdjective function
function wrapAdjective(wrapper = "*") {
  return function (adjective) {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}
