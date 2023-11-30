export const inResAddClassApi = new Promise((resolve) => {
    const data = [
        {
            name: '布洛妮娅',
            sex: '女',
            age: '12',
            job: '炮形态女武神',
            education: 0, // 学历 0不限 1专科 2本科 3硕士 4博士
            status: 0, // 状态 0未准备 1已准备 2游戏中 3结算中
            detail: '除了战斗之外布洛妮娅一无所有',
        },
        {
            name: '德莉莎',
            sex: '女',
            age: '16',
            job: '十字架形态女武神',
            education: 1, // 学历 0不限 1专科 2本科 3硕士 4博士
            status: 1, // 状态 0未准备 1已准备 2游戏中 3结算中
            detail: '我这把犹大下去你们都得死',
        },
        {
            name: '琪亚娜',
            sex: '女',
            age: '15',
            job: '枪形态女武神',
            education: 2, // 学历 0不限 1专科 2本科 3硕士 4博士
            status: 2, // 状态 0未准备 1已准备 2游戏中 3结算中
            detail: '终于轮到我了吗',
        },
        {
            name: '芽衣',
            sex: '女',
            age: '17',
            job: '长剑形态女武神',
            education: 3, // 学历 0不限 1专科 2本科 3硕士 4博士
            status: 3, // 状态 0未准备 1已准备 2游戏中 3结算中
            detail: '我愿坠入黑暗，还你回到光明',
        },
        {
            name: '丽塔',
            sex: '女',
            age: '19',
            job: '镰刀形态女武神',
            education: 4, // 学历 0不限 1专科 2本科 3硕士 4博士
            status: 4, // 状态 0未准备 1已准备 2游戏中 3结算中
            detail: '苏醒吧，冰霜的主人',
        },
    ]
    resolve(data)
})