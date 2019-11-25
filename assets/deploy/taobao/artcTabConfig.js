export default {
    taskType: {
        show: true,
        buttons: [{
                label: "阅读次数",
                value: "times_artc",
                icon: "lion-guankan"
            },
            {
                label: "阅读人数",
                value: "nums_artc",
                icon: "lion-yonghu2"
            },
            {
                label: "引导进店",
                value: "guide_artc",
                icon: "lion-woyeyaokaidian"
            }
        ],
        tools: [{
                name: "示例",
                title: "查看任务示例",
                icon: "lion-help",
                click: () => {}
            },
            {
                name: "重置",
                title: "重置任务参数",
                icon: "lion-chongzhi",
                click: () => {}
            },
            {
                name: "批量",
                title: "批量发布任务",
                icon: "lion-battch-plus",
                click: () => {}
            },
            {
                name: "另存",
                title: "另存任务方案",
                icon: "lion-save",
                click: () => {}
            }
        ]
    },
    taskDatePicker: {
        show: true
    },
    linkSearch: {
        show: true,
        type: {
            times_artc: 'taobao_article',
            nums_artc: 'taobao_article',
            guide_artc: 'taobao_article',
        }

    },
    taskDailyPro: {
        show: true
    },
    taskDuration: {
        show: true
    },
    remark: {
        show: true
    }
}