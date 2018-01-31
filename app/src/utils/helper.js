export const AD_WORDS = {
  title: '全部纳米学位项目和单项课程',
  body:
    '学习由 Google、亚马逊、Facebook 等全球领先科技企业参与制作的纳米学位项目和单项课程，从零开始发成为人工智能、机器学习、无人驾驶车、机器人开发工程师，或网站开发、移动开发工程师和数据分析师，获得行业领导者的认可和认证，成为改变世界的抢手人才。',
};

export const LEVEL_ARRAY = ['初级', '中级', '高级'];
export const TRACK_ARRAY = [
  { name: '数据科学', router: 'data-science' },
  { name: 'Android', router: 'android' },
  { name: '网站开发', router: 'web-development' },
  { name: '软件工程', router: 'software-engineering' },
  { name: 'iOS', router: 'ios' },
  {
    name: '佐治亚理工学院计算机科学硕士',
    router: 'georgia-tech-masters-in-cs',
  },
  { name: '非技术类', router: 'non-tech' },
];

// return an array of 0 and 1, to indicate level icons
export const getIconArr = levelStr => {
  const levelNum = LEVEL_ARRAY.indexOf(levelStr) + 1;
  const emptyArr = [0, 0, 0];
  const iconArr = emptyArr.map((each, index) => {
    if (index < levelNum) {
      return 1;
    }
    return 0;
  });
  return iconArr;
};

export const searchRule = (course, userInput) => {
  const title = course.title;
  const lowerTitle = title.toLowerCase();
  const lowerUserInput = userInput ? userInput.toLowerCase() : '';
  const match = lowerTitle.includes(lowerUserInput);

  return match;
};
