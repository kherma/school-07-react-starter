export const settings = {
  defaultHeaderIcon: 'th-list',
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'Easiest things to do',
  subtitle: 'make you REACT & REDUCE your stress',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

export const info = {
  title: 'About Our App',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  content: [
    {
      id: 'info-1',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum scelerisque bibendum. Integer tempus, tortor ac pellentesque hendrerit, enim velit tincidunt dolor, nec consectetur lectus purus vel sem. Integer in arcu hendrerit, placerat dolor et, tincidunt dui. Proin vitae ipsum eros. Mauris laoreet bibendum lorem, sed viverra metus malesuada vitae. Nunc vel sollicitudin mi. Integer euismod tempus tellus, non ornare tortor gravida a. Vivamus auctor magna sit amet nulla sagittis tempus.`,
    },
    {
      id: 'info-2',
      text: `Suspendisse ac libero lobortis, pretium enim vitae, iaculis dolor. Cras tempor non lorem eu condimentum. Aenean sed sapien sit amet tortor consectetur viverra. Donec ornare convallis aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dapibus auctor malesuada. Ut eu justo quis sem lacinia maximus eu nec ipsum. Fusce dolor urna, posuere vitae consectetur id, venenatis et diam. Pellentesque suscipit elit et diam vehicula, ut eleifend nisi aliquet. Sed nec lacus eu quam faucibus maximus faucibus vel dui. Phasellus eu laoreet eros.`,
    },
    {
      id: 'info-3',
      text: `In nec magna purus. Sed ac mi erat. Pellentesque quis tortor orci. Sed dignissim nisi et porta convallis. Duis eleifend at mi non porta. Vestibulum sapien purus, feugiat ac purus sit amet, ullamcorper dignissim orci. Aliquam posuere pulvinar ex non euismod. In varius non dolor ac cursus. Ut ullamcorper dignissim ante ac vestibulum. Nullam sollicitudin massa eu diam pharetra molestie. In ac finibus neque, eu auctor nibh. Donec eu tempor dolor, ac eleifend est. Sed congue molestie quam elementum varius. Nam maximus et nunc eget dapibus. Donec non egestas elit.`,
    },
  ],
};

export const faq = {
  title: 'FAQ',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  faqs: [
    {
      id: 'faq-1',
      question: `1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      answer: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      id: 'faq-2',
      question: `2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      answer: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      id: 'faq-3',
      question: `3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      answer: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: { ...pageContents },
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
