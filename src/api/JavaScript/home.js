/** tab页 */
export const tabListApi = new Promise((resolve) => {
  const data = {
    top: [
      {
        id: 0,
        name: 'CSS',
        routerName: 'JavaScript-CSS'
      },
      {
        id: 1,
        name: 'JS',
        routerName: 'JavaScript-JS'
      },
      {
        id: 2,
        name: 'VUE2',
        routerName: 'JavaScript-VUE2'
      },
      {
        id: 3,
        name: 'VUE3',
        routerName: 'JavaScript-VUE3'
      },
    ],
    bottom: [
      {
        id: 0,
        name: 'Element',
        routerName: 'JavaScript-Element'
      },
      {
        id: 1,
        name: 'Exercises',
        routerName: 'JavaScript-Exercises'
      },
      {
        id: 2,
        name: 'WorkQuesstion',
        routerName: 'JavaScript-WorkQuesstion'
      },
      {
        id: 3,
        name: 'stealTeacher',
        routerName: 'JavaScript-StealTeacher'
      },
    ]
  };
  resolve(data);
});
/** 推荐轮播图 */
export const carouselApi = new Promise((resolve) => {
  const data = [
    {
      id: 0,
      name: "1",
      src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      routerName: 'JavaScript-CSS'
    },
    {
      id: 1,
      name: "2",
      src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      routerName: ''
    },
    {
      id: 2,
      name: "3",
      src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cHQeyaWWRaHmpUL81krjaQHaEX?w=197&h=116&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      routerName: ''
    },

  ];
  resolve(data);
});
/** 推荐右侧 */
export const recommendRightApi = new Promise((resolve) => {
  const data = [
    {
      id: 0,
      name: "1",
      src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-11-15",
      routerName: ''
    },
    {
      id: 1,
      name: "2",
      src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-11-15",
      routerName: ''
    },
    {
      id: 2,
      name: "3",
      src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cHQeyaWWRaHmpUL81krjaQHaEX?w=197&h=116&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-11-15",
      routerName: ''
    },
    {
      id: 3,
      name: "1",
      src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-11-15",
      routerName: ''
    },
    {
      id: 4,
      name: "2",
      src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-11-15",
      routerName: ''
    },
    {
      id: 5,
      name: "3",
      src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cHQeyaWWRaHmpUL81krjaQHaEX?w=197&h=116&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-11-15",
      routerName: ''
    },

  ];
  resolve(data);
});
/** 内容列表 */
export const constListApi = new Promise((resolve) => {
  const data = {
    /** CSS */
    cssList: {
      title: 'CSS',
      routerName: '',
      data: [
        {
          id: 0,
          name: "1",
          src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 1,
          name: "2",
          src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 2,
          name: "3",
          src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cHQeyaWWRaHmpUL81krjaQHaEX?w=197&h=116&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 3,
          name: "1",
          src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 4,
          name: "2",
          src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
      ],
    },
    /** JS*/
    jsList: {
      title: 'JS',
      routerName: '',
      data: [
        {
          id: 0,
          name: "1",
          src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 1,
          name: "2",
          src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 2,
          name: "3",
          src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cHQeyaWWRaHmpUL81krjaQHaEX?w=197&h=116&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 3,
          name: "1",
          src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 4,
          name: "2",
          src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
      ],
    },
    /** VUE2*/
    VUE2: {
      title: 'VUE2',
      routerName: '',
      data: [
        {
          id: 0,
          name: "1",
          src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 1,
          name: "2",
          src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 2,
          name: "3",
          src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cHQeyaWWRaHmpUL81krjaQHaEX?w=197&h=116&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 3,
          name: "1",
          src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 4,
          name: "2",
          src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
      ],
    },
    /** VUE3*/
    VUE3: {
      title: 'VUE3',
      routerName: '',
      data: [
        {
          id: 0,
          name: "1",
          src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 1,
          name: "2",
          src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 2,
          name: "3",
          src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cHQeyaWWRaHmpUL81krjaQHaEX?w=197&h=116&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 3,
          name: "1",
          src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 4,
          name: "2",
          src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
      ],
    },
    /** Element*/
    Element: {
      title: 'Element',
      routerName: '',
      data: [
        {
          id: 0,
          name: "1",
          src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 1,
          name: "2",
          src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 2,
          name: "3",
          src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cHQeyaWWRaHmpUL81krjaQHaEX?w=197&h=116&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 3,
          name: "1",
          src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 4,
          name: "2",
          src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
      ],
    },
    /** Exercises*/
    Exercises: {
      title: 'Exercises',
      routerName: '',
      data: [
        {
          id: 0,
          name: "1",
          src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 1,
          name: "2",
          src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 2,
          name: "3",
          src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cHQeyaWWRaHmpUL81krjaQHaEX?w=197&h=116&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 3,
          name: "1",
          src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 4,
          name: "2",
          src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
      ],
    },
    /** workQuesstion*/
    workQuesstion: {
      title: 'workQuesstion',
      routerName: '',
      data: [
        {
          id: 0,
          name: "1",
          src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 1,
          name: "2",
          src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 2,
          name: "3",
          src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cHQeyaWWRaHmpUL81krjaQHaEX?w=197&h=116&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 3,
          name: "1",
          src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 4,
          name: "2",
          src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
      ],
    },
    /** stealTeacher*/
    stealTeacher: {
      title: 'stealTeacher',
      routerName: '',
      data: [
        {
          id: 0,
          name: "1",
          src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 1,
          name: "2",
          src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 2,
          name: "3",
          src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cHQeyaWWRaHmpUL81krjaQHaEX?w=197&h=116&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 3,
          name: "1",
          src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
        {
          id: 4,
          name: "2",
          src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          date: "2023-11-15",
          routerName: ''
        },
      ],
    },
  };
  resolve(data);
});
/** CSS 数据 */
export const cssListApi = new Promise((resolve) => {
  const data = [
    {
      id: 0,
      name: "动态添加class样式",
      src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-03-15",
      routerName: 'activeAddClass',
      path: '/css/activeAddClass',
      title: 'class和style动态样式的更改？',
        content: [
            '1.注意基本都是以对象的形式接收 也有例外style的动态样式要注意驼峰式的写法;;',
            '2.详情见代码注释',
        ],
        level: "easily"
    },
    {
      id: 1,
      name: "选中Tab后的样式变化",
      src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-03-07",
      routerName: 'activeTab',
      path: '/css/activeTab',
      title: '如何给选中tab一个样式？',
        content: [
            '1.定义点击事件，将当前点击元素的index传入;',
            '2.再data里定义一个属性，把传入的index值赋值上去',
            '3.再动态class里做三元判断，如果属性值等于当前index值那么就有变化后的class名，否则为空',
        ],
        level: "easily"
    },
    {
      id: 2,
      name: "添加动画效果",
      src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cHQeyaWWRaHmpUL81krjaQHaEX?w=197&h=116&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-05-09",
      routerName: 'animationEffect',
      path: '/css/animationEffect',
      title: 'transition的过度效果和animation',
        content: [
            '1.display是没有过度效果的;',
        ],
        level: "easily"

    },
    {
      id: 3,
      name: "修改滚动条样式",
      src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-04-27",
      routerName: 'changeScrollbar',
      path: '/css/changeScrollbar',
      title: '修改滚动条的样式',
        content: [
            '1.详情见注释;',
        ],
        level: "easily"

    },
    {
      id: 4,
      name: "如何让盒子居中",
      src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-04-18",
      routerName: 'divCenter',
      path: '/css/divCenter',
      title: '如何让一个盒子居中，父元素没有宽高？',
        content: [
            '1.利用flex布局;;',
            '2.利用定位position和transform: translate(x, y)属性',
            '3.外边距结合定位来实现',
            '4.如果是第二层的元素是子元素且也无高度时，父元素H5页面高度给100%，pc端给100vh',
        ],
        level: "easily"

    },
    {
      id: 5,
      name: "省略号的使用",
      src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cHQeyaWWRaHmpUL81krjaQHaEX?w=197&h=116&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-03-07",
      routerName: 'ellipsisUsed',
      path: '/css/ellipsisUsed',
      title: '单行省略号和多行省略号？',
        content: [
            '1.-webkit-line-clamp: xx; //来规定几行显示省略号;',
        ],
        level: "easily"
    },
    {
      id: 6,
      name: "一个父元素里的第一个元素和第一个子元素等等的写法",
      src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-03-15",
      routerName: 'firstOrNthChild',
      path: '/css/firstOrNthChild',
      content: [
        `1. + 相邻选择器（相邻兄弟元素）：选中对应元素的下一个兄弟元素<br />
        ①.所涉及相邻兄弟元素必须是该元素的同级元素<br />
        ②.所涉及的相邻兄弟元素必须是相邻的兄弟元素，中间如果有其他元素隔开的会导致失效<br />
        ③3.元素A对应的相邻兄弟元素之间需要 + 隔开<br />`,
        `2. ~ 查找某一个指定元素的后面的所有兄弟结点<br />`,
        `3. & 指当前元素<br />`,
        `4.①xxx :first-child 某元素出现的第一次<br />
        ②xxx :nth-child(n)某元素出现的第n次 2n+1代表奇数次数 2n代表偶数<br />
        ③ xxx :last-child 某元素出现的最后一次<br />`,
        `5.①:nth-of-type(n) 正数这个元素的第几个<br />
        ②:nth-last-child(n) 倒数这个元素的第几个<br />`,
    ],
    level: "just_soso"
    },
    {
      id: 7,
      name: "flex布局详解",
      src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-04-18",
      routerName: 'flexUsed',
      path: '/css/flexUsed',
      title: 'flex属性详情',
        content: [
            '1.flex:1 其对应的缩写是：flex-grow flex-shrink flex-basis;',
            `2.flex-grow:这个属性规定了 flex-grow 项在 flex
            容器中分配剩余空间的相对比例。
            主尺寸是项的宽度或高度，这取决于flex-direction值。<br />
            剩余空间是 flex 容器的大小减去所有 flex
            项的大小加起来的大小。如果所有的兄弟项目都有相同的 flex-grow
            系数，那么所有的项目将剩余空间按相同比例分配，否则将根据不同的 flex-grow
            定义的比例进行分配。<br />`,
            `3.flex-shrink：分配的是溢出的空间，父容器放不下，那就缩减弹性元素的尺寸。有多少空间放不下，就按flex-shrink标明的分量减少弹性元素的尺寸（flex
            元素仅在默认宽度之和大于容器的时候才会发生收缩）<br />
            flex-shrink: 0; 来固定元素不被挤压，一般用于图片防止变形<br />`,
            `4.flex-basis：指定了 flex 元素在主轴方向上的初始大小。如果不使用
            box-sizing 改变盒模型的话，那么这个属性就决定了 flex
            元素的内容盒（content-box）的尺寸。单位为px<br />
            当一个元素同时被设置了 flex-basis (除值为 auto 外) 和 width (或者在
            flex-direction: column 情况下设置了height) , flex-basis 具有更高的优先级
            <br />
            "flex-basis:auto" 的含义是 "参照我的width和height属性".
            <br />"flex-basis:0" 的含义是 "相当于无padding". <br />"flex-basis:xxx px"
            的含义是 "设置width情况下优先使用basis".`,
            `5.flex-direction：属性指定了内部元素是如何在 flex
            容器中布局的，定义了主轴的方向 (正方向或反方向)。<br />
            初始值：row 可选值：column <br />`,
            `6.flex-wrap 属性指定 flex
            元素单行显示还是多行显示。如果允许换行，这个属性允许你控制行的堆叠方向。<br />
            初始值：nowrap 可选值：wrap、wrap-reverse`,
        ],
        level: "just_soso"
    },
    {
      id: 8,
      name: "imgNotChangShape",
      src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cHQeyaWWRaHmpUL81krjaQHaEX?w=197&h=116&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-03-14",
      routerName: 'imgNotChangShape',
      path: '/css/imgNotChangShape',
      title: '怎么才能保持图片不变形？',
      content: [
          '1.给父元素display;',
          '2.子元素里flex-shrink:0 就不会压缩',
      ],
      level: "easily"
    },
    {
      id: 9,
      name: "一行三列自适应如何实现？",
      src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-03-14",
      routerName: 'inResAddClass',
      path: '/css/inResAddClass',
      title: '一行三列自适应如何实现？2.根据接口返回的值添加对应的class',
        content: [
            '1.详情见注释',
        ],
        level: "easily"
    },
    {
      id: 10,
      name: "一个盒子只有五个卡片做自适应",
      src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-03-16",
      routerName: 'onlyDivHaveNumCard',
      path: '/css/onlyDivHaveNumCard',
      title: '一个盒子规定只有五个卡片如何做自适应？',
        content: [
            '1.将两个表单域套在一个div里，display给flex布局，justify-content:space-between;;',
            '2.每一个盒子都给flex:1',
        ],
        level: "easily"
    },
    {
      id: 11,
      name: "缩小至一定宽度显示滚动条",
      src: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cHQeyaWWRaHmpUL81krjaQHaEX?w=197&h=116&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-03-14",
      routerName: 'reduceWidthShowScroll',
      path: '/css/reduceWidthShowScroll',
      title: '缩小至一定的宽度展示滚动条',
        content: [
            '1.需要给父元素overflow-x或者overflow-y这个属性(visible不裁剪内容，可能会显示在内容框之外。hidden裁剪内容 - 不提供滚动机制。 scroll裁剪内容 - 提供滚动机制。 auto如果溢出框，则应该提供滚动机制。no-display如果内容不适合内容框，则删除整个框。no-content如果内容不适合内容框，则隐藏整个内容。);',
            '2.子元素需要给最小宽高',
        ],
        level: "just_soso"
    },
    {
      id: 12,
      name: "使用粘性布局",
      src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-04-05",
      routerName: 'stictyUsed',
      path: '/css/stictyUsed',
      title: '粘性布局sticty详解?',
        content: [
            '1.粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。须指定top, right, bottom 或 left四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。;',
            '2.一个 sticky元素会“固定”在离它最近的一个拥有“滚动机制”的祖先上（当该祖先的 overflow 是hidden、scroll、auto 或 overlay时），即便这个祖先不是最近的真实可滚动祖先。这有效地抑制了任何“sticky”行为',
            '3.最外层div设置了overflow(hidden,scroll,auto)的后三个属性的话，内部的所有属性都不会去依据内部元素滚动。而是最外层div发生滚动。',
            '4.通俗点讲就是1.这个设定粘性定位的元素的父元素必须是最外层的div',
            '5.最外层的这个div的overflow不能设置hidden,scroll,auto'
        ],
        level: "just_soso"
    },
    {
      id: 13,
      name: "一行两列表单各占一半且有间距",
      src: "https://tse3-mm.cn.bing.net/th/id/OIP-C.biqS-pyyyrRXac9_eAobZgHaDn?w=197&h=96&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-2-23",
      routerName: 'usedFormItemWidth',
      path: '/css/usedFormItemWidth',
      title: '在一个表单里如何使两个表单域宽度平均且有一定的margin间距？',
        content: [
            '1.将两个表单域套在一个div里，display给flex布局，justify-content: space-between;',
            '2.两个表单域里的类型width全为100',
            '3.分别给两个表单域添加class',
            '4.给添加的class的witdth设置计算宽度：calc(50% - 12px),注意：这里的12px指的是两个表单域的margin，这里写的12px实际上是24px',
            '5.或者给每一个表单域的class的flex:1,在给一个外边框24px'
        ],
        level: "easily"
    },
  ];
  resolve(data);
});
/** JS 数据 */
export const jsListApi = new Promise((resolve) => {
  const data = [
    {
      id: 0,
      name: "数组和对象的用法",
      src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-05-9",
      routerName: 'arrAndObject',
      path: '/js/arrAndObject',
      title: '数组和对象的用法',
      level: "just_soso",
        content: [],
        children:[
          {
            id: 0,
            name: "数组的拷贝",
            src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            date: "2023-04-14",
            routerName: 'arrCopy',
            path: '/js/arrAndObject/arrCopy',
            title: '数组的拷贝',
            level: "just_soso",
              content: [],
          },
          {
            id: 1,
            name: "数组去重",
            src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            date: "2023-04-13",
            routerName: 'arrRepeat',
            path: '/js/arrAndObject/arrRepeat',
            title: '数组去重',
            level: "just_soso",
              content: [],
          },
          {
            id: 2,
            name: "数组转对象",
            src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            date: "2023-03-20",
            routerName: 'arrShiftObject',
            path: '/js/arrAndObject/arrShiftObject',
            title: '数组转对象',
            level: "just_soso",
              content: [],
          },
          {
            id: 3,
            name: "对象长度",
            src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            date: "2023-03-20",
            routerName: 'objectLength',
            path: '/js/arrAndObject/objectLength',
            title: '对象长度',
            level: "just_soso",
              content: [],
          },
          {
            id: 4,
            name: "对象去重",
            src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            date: "2023-04-13",
            routerName: 'objectRepeat',
            path: '/js/arrAndObject/objectRepeat',
            title: '对象去重',
            level: "just_soso",
              content: [],
          },
          {
            id: 5,
            name: "对象转数组",
            src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            date: "2023-03-20",
            routerName: 'objectShifArr',
            path: '/js/arrAndObject/objectShifArr',
            title: '对象转数组',
            level: "just_soso",
              content: [],
          },
          {
            id: 6,
            name: "对象复制",
            src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            date: "2023-04-14",
            routerName: 'objetCopy',
            path: '/js/arrAndObject/objetCopy',
            title: '对象复制',
            level: "just_soso",
              content: [],
          },
        ]
    },
    {
      id: 1,
      name: "回到顶部",
      src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-05-9",
      routerName: 'backTop',
      path: '/js/backTop',
      title: '回到顶部',
      level: "just_soso",
        content: [
            '1、监听页面滚动事件',
            '2、当滚动值大于某个值时，变量为true显示出来',
            '3、设置其点击事件让其滚动到0的位置',
        ]
    },
    {
      id: 2,
      name: "回到顶部",
      src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-05-9",
      routerName: 'backTop',
      path: '/js/backTop',
      title: '回到顶部',
      level: "just_soso",
        content: [
            '1、监听页面滚动事件',
            '2、当滚动值大于某个值时，变量为true显示出来',
            '3、设置其点击事件让其滚动到0的位置',
        ]
    },

  ];
  resolve(data);
});
/** VUE2 数据 */
export const vue2ListApi = new Promise((resolve) => {
  const data = [
    {
      id: 0,
      name: "watch监听的使用",
      src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-03-18",
      routerName: 'watchUsed',
      path: '/vue2/watchUsed',
      title: 'watch的使用',
      level: "just_soso",
      content: [
        '1、可以侦听指定名称属性值(data/computed)的变化,属性值一旦发生变化时就会触发侦听器,然后侦听器执行相应的业务代码',
        '2、有俩个参数一个是当前最新值，一个是上一个的老值',
        '3、watch中的函数名称必须和属性名称一致,且不能人为调用',
        '4、没有返回值,如需使用处理结果,必须将结果赋值给data中的成员再进行使用',
        '5、简单监听语法： xxx(newVal,oldVal){} ',
        `6、深度监听（针对对象的监听），有两种：<br />
        ①:第一种：监听整个对象，对象里的每个属性值的变化都会执行handler <br />
        语法：
        "xxx":{immediate:true(立即执行),deep:true(开启深度监听，可以监测对象下的所有属性),handler(newValue,
        oldValue){} } <br />
        ②:第二种：第二种方式：监听对象的某个属性，被监听的属性值发生变化就会执行函数
        <br />
        语法：
        "xxx.xxx":{immediate:true(立即执行),deep:true(开启深度监听，可以监测对象下的所有属性),handler(newValue,
        oldValue){} } <br />`
    ]
    },
  ];
  resolve(data);
});
/** VUE3 数据 */
export const vue3ListApi = new Promise((resolve) => {
  const data = [
    {
      id: 0,
      name: "vue3demo",
      src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-11-29",
      routerName: 'vue3demo',
      path: '/vue3/demo',
      title: 'vue3demo',
      level: "just_soso",
      content: []
    },
  ];
  resolve(data);
});
/** Element 数据 */
export const ElementListApi = new Promise((resolve) => {
  const data = [
    {
      id: 0,
      name: "ElementDemo",
      src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-11-29",
      routerName: 'ElementDemo',
      path: '/Element/demo',
      title: 'ElementDemo',
      level: "just_soso",
      content: []
    },
  ];
  resolve(data);
});
/** Exercises 数据 */
export const ExercisesListApi = new Promise((resolve) => {
  const data = [
    {
      id: 0,
      name: "ExercisesDemo",
      src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-11-29",
      routerName: 'ExercisesDemo',
      path: '/Exercises/demo',
      title: 'ExercisesDemo',
      level: "just_soso",
      content: []
    },
  ];
  resolve(data);
});
/** StealTeacher 数据 */
export const StealTeacherListApi = new Promise((resolve) => {
  const data = [
    {
      id: 0,
      name: "StealTeacherDemo",
      src: "https://tse2-mm.cn.bing.net/th/id/OIP-C.UY4e1hO3ZUZ_DA6b-rDH9QHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "2023-11-29",
      routerName: 'StealTeacherDemo',
      path: '/StealTeacher/demo',
      title: 'StealTeacherDemo',
      level: "just_soso",
      content: []
    },
  ];
  resolve(data);
});