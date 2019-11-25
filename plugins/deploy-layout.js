import Vue from 'vue';
import topHeader from "@/components/deployComponents/topHeader/index.vue";
import siderBar from "@/components/deployComponents/siderBar/index.vue";
import pageFooter from "@/components/deployComponents/pageFooter/index.vue";

Vue.component(topHeader.name,topHeader);
Vue.component(siderBar.name,siderBar);
Vue.component(pageFooter.name,pageFooter);