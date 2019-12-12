<template>
    <div class="task-page scroll-full">
        <task-types-tab :tab-list="tabList" />
        <render-content></render-content>
    </div>
</template>

<script>
import flowTabConfig from "@/assets/deploy/taobao/flowTabConfig.js";
import favoTabConfig from "@/assets/deploy/taobao/favoTabConfig.js";
import cartTabConfig from "@/assets/deploy/taobao/cartTabConfig.js";
import liveTabConfig from "@/assets/deploy/taobao/liveTabConfig.js";
import artcTabConfig from "@/assets/deploy/taobao/artcTabConfig.js";

import renderComponent from "@/assets/deploy/renderFunction.js";
export default {
    data() {
        return {
            tabList: [
                { name: "流量", taskType: "flow" },
                { name: "收藏", taskType: "favorite" },
                { name: "加购", taskType: "cart" },
                { name: "直播", taskType: "live" },
                { name: "文章", taskType: "article" }
            ],
            form: {
                taskType: "",
                daterange: "",
                productInfo: {},
                keywords: [],
                scanTime: "",
                scanDeep: "",
                taskmark: "",
                taskDaily: 100,
                taskAlloc: [],
                planType: "",
                scanGoodsNum: 1
            }
        };
    },
    components: {
        renderContent: {
            render(h) {
                let currentTab = this.$parent.currentTab;
                let form = this.$parent.form;
                let config = {};
                switch (currentTab) {
                    case "flow":
                        config = flowTabConfig;
                        break;
                    case "favorite":
                        config = favoTabConfig;
                        break;
                    case "cart":
                        config = cartTabConfig;
                        break;
                    case "live":
                        config = liveTabConfig;
                        break;
                    case "article":
                        config = artcTabConfig;
                        break;
                    default:
                        break;
                }
                let renderComponentArray = [];
                for (let k in config) {
                    renderComponentArray.push(
                        renderComponent(
                            h,
                            currentTab,
                            form,
                            k,
                            config[k],
                            config
                        )
                    );
                }
                return (
                    <div class="scroll-viewer">
                        <div class="tab-content mbn task-content">
                            <div class="form-horizontal">
                                {renderComponentArray}
                            </div>
                        </div>
                        <deploy-row form={form} config={config}></deploy-row>
                    </div>
                );
            }
        }
    },
    computed: {
        currentTab() {
            let currentTab = this.$route.params.category || "flow";
            return currentTab;
        }
    }
};
</script>
