export default {
    taskType: {
        show: true,
        buttons: [{
                label: "直播热度",
                value: "hot_live",
                icon: "lion-fire"
            },
            {
                label: "达人关注",
                value: "daren_live",
                icon: "lion-zhibo"
            },
            {
                label: "直播观看",
                value: "watch_live",
                icon: "lion-guankan"
            },
            {
                label: "微淘点赞",
                value: "dianzan_live",
                icon: "lion-dianzan"
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
    liveTip: {
        show: ['hot_live']
    },
    taskDatePicker: {
        show: true
    },
    linkSearch: {
        show: true,
        type: {
            hot_live: 'taobao_live',
            daren_live: 'taobao_daren_shop',
            watch_live: 'taobao_live',
            dianzan_live: 'taobao_weitao'
        }

    },
    taskDaily: {
        show: true
    },
    taskDuration: {
        show: true
    },
    remark: {
        show: true
    }
}