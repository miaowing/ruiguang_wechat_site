/**
 * 产品中心
 * Created by zhaofeng on 16/5/28.
 */

/**
 * SP湿法复合非织造布
 * @type {{imgs: string[], description: string, params: *[]}}
 */
export let spProduct = {
    imgs: [
        `<img src="./images/product/2.1.png">`,
        `<img src="./images/product/2.2.png">`
    ],
    description: `
        将湿法形成的木浆纤维直接通过水刺种植至纺粘产品的空隙中，产品经过高温花纹热轧机后，既具备了纺织面料的特点，又不掉绒，既形成了超高的吸液能力，又有高强力作为支撑,是医用、工业理想擦布产品。
    `,
    params: [
        {
            key: '生活用品',
            value: '揩步、湿面巾、肉类垫步、厨房擦布等。'
        },
        {
            key: '医疗卫生',
            value: '消毒湿巾'
        },
        {
            key: '工业用品',
            value: '精密仪器、电子行业、印刷行业等专业领域用擦布。'
        }
    ]
};

/**
 * 可冲散水刺法非织造布
 * @type {{imgs: string[], description: string, params: *[], detail: *[]}}
 */
export let kechongsan = {
    imgs: [
        `<img src="./images/product/1.1.png">`,
        `<img src="./images/product/1.2.png">`
    ],
    description: `
        "丝瑞洁"采用100%纤维素纤维，完整地体现了绿色、环保、低碳生活的理念，并已通过权威实验室可冲散性能的测试，是一款可冲散、可分解的水刺产品。
    `,
    params: [
        {
            key: '产能',
            value: '15000吨/年'
        },
        {
            key: '应用领域',
            value: '婴儿训练用湿巾、卫生用湿巾及其它个人防护、医疗用干湿擦布。'
        }
    ],
    detail: [
        {
            title: '平纹可冲散产品',
            img: `<img src="./images/product/1.3.png">`,
            description: `
                采用纤维素纤维、造纸浆等可降解的原材料，通过高压水针进行缠结，既保证了产品的强力，又保证了产品的可冲散性能。
            `
        },
        {
            title: '提花可冲散产品',
            img: `<img src="./images/product/1.3.png">`,
            description: `
                通过提花的方式，既增强了产品的布感和美感，又提高了产品的可冲散性能,是一款有特色的可冲散产品。
            `,
            type: '菱形提花'
        }
    ]

};

/**
 * 水刺法非织造布
 * @type {{description: string, params: *[], detail: Array}}
 */
export let shuiciProduct = {
    description: `
        集团公司水刺法非织造布产能为55000吨，均为欧洲一流供应商提供的交钥匙生产线，多种魔方组合形成了丰富的产品品种。
    `,
    params: [
        {
            key: '生活用品',
            value: '揩步、湿面巾、压缩毛巾、面膜、婴儿擦布、卫生巾及纸尿裤面料'
        },
        {
            key: '医疗卫生',
            value: '手术巾、纱布'
        },
        {
            key: '工业用品',
            value: '精密仪器、电子行业、印刷行业等专业领域擦布、服装内衬'
        }
    ],
    detail: [
        {
            title: '水刺平纹产品',
            img: `<img src="./images/product/3.3.png">`,
            description: `
                其采用粘胶、涤纶、双组份纤维、超细纤维以及竹纤维、天丝纤维等不同原材料，满足客户不同用途的各种功能性产品需求。
            `
        },
        {
            title: '水刺网孔产品',
            img: `<img src="./images/product/3.3.png">`,
            description: `
                采用17目、22目网孔产品，增加产品的透气性能和擦拭的摩擦力和表面积。
            `
        },
        {
            title: '水刺提花产品',
            img: `<img src="./images/product/3.3.png">`,
            description: `
                不同图案的产品体现了不同的市场定位，体现了不同的功能性需求，我们愿意和客户共同提出解决方案。
            `,
            type: '珍珠纹水刺提花产品、各种卡通提花'
        },
        {
            title: 'CPC/CSPC/CSC/FfPC多层复合产品',
            img: `<img src="./images/product/3.3.png">`,
            description: `
                梳理纤网，气流成网绒毛浆，其它类别的非织造布通过水刺方式结合，再辅以提花图案，体现产品的超强吸水性，高强力不变形、提花立体感强等特点。
            `,
            type: '平纹、网孔、三维立体提花CPC复合产品'
        }
    ]
};

/**
 * 纺熔法非织造布产品
 * @type {{description: string, params: *[], detail: *[]}}
 */
export let fangrongProduct = {
    description: `
        聚丙烯纺粘、熔喷由于其自身的特性，可通过热轧、胶合、涂覆等方式固结、与水刺产品、透气膜、PE膜复合，通过添加适当的添加剂，可赋予纺粘布抗静电、抗老化、抗菌、亲水、阻燃等多种功能。
    `,
    params: [
        {
            key: '医疗领域',
            value: '手术服、隔离衣、病员服、过滤材料、口罩、帽子、床单、枕套等'
        },
        {
            key: '卫生领域',
            value: '妇女卫生巾、婴儿尿裤、承认尿裤等'
        },
        {
            key: '工、农业',
            value: '鞋革衬布、西服套、沙发床垫用布、丰收布、汽车内装饰用布、吸油毡'
        }
    ],
    detail: [
        {
            title: '纺粘法非织造布',
            img: `<img src="./images/product/4.1.png">`,
            description: `
                <div class="list">
                    克重范围: 10gsm-200gsm<br>
                    幅宽: 最大3300mm<br>
                    花纹: 椭圆形<br>
                    颜色: 根据客户要求确定
                </div>
            `
        },
        {
            title: '熔喷法非织造布',
            img: `<img src="./images/product/4.2.png">`,
            description: `
                其采用进口熔喷模头及特殊的原材料、工艺制作而成的超细纤维非织造布，可满足BFE95，BFE99，N95，N99，P1，P2标准的要求。
            `
        },
        {
            title: '复合产品',
            img: `<img src="./images/product/4.3.png">`,
            description: `
                淋膜、胶合、热轧复合产线可生产多重复合材料，可以将纺粘产品、水刺产品、熔喷产品与透气膜、生活用纸、PE膜通过淋膜、胶合、热轧的方式复合。
            `
        }
    ]
};