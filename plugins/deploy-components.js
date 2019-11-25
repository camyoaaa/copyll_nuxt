import Vue from "vue";
import taskTypesTab from "@/components/deployComponents/mainContent/typesTab.vue";
import formItem from "@/components/deployComponents/mainContent/formItem";
import doubleFormItem from "@/components/deployComponents/mainContent/doubleFormItem";
import keywordsFormItem from "@/components/deployComponents/mainContent/keywordsFormItem";
import hrefFormItem from "@/components/deployComponents/mainContent/hrefFormItem";
import timerFormItem from "@/components/deployComponents/mainContent/timerFormItem";

import typesBtnGroup from "@/components/deployComponents/mainContent/typesBtnGroup";
import formTools from "@/components/deployComponents/mainContent/formTools";
import taskDatePicker from "@/components/deployComponents/mainContent/taskDatePicker";
import taskCalc from "@/components/deployComponents/mainContent/taskCalc";

import linkSearch from "@/components/deployComponents/mainContent/linkSearch";
import productShow from "@/components/deployComponents/mainContent/productShow";
import keywords from "@/components/deployComponents/mainContent/keywords";
import taskTimer from "@/components/deployComponents/mainContent/taskTimer";
import commonSelect from "@/components/deployComponents/mainContent/commonSelect";
import scanDeepSelect from "@/components/deployComponents/mainContent/scanDeepSelect";

import deployRow from "@/components/deployComponents/mainContent/deployRow";
// collapse 展开折叠
import CollapseTransition from "element-ui/lib/transitions/collapse-transition";

Vue.component(taskTypesTab.name, taskTypesTab);
Vue.component(formItem.name, formItem);
Vue.component(doubleFormItem.name, doubleFormItem);
Vue.component(keywordsFormItem.name, keywordsFormItem);
Vue.component(hrefFormItem.name, hrefFormItem);
Vue.component(timerFormItem.name, timerFormItem);

Vue.component(typesBtnGroup.name, typesBtnGroup);
Vue.component(formTools.name, formTools);
Vue.component(taskDatePicker.name, taskDatePicker);
Vue.component(taskCalc.name, taskCalc);
Vue.component(linkSearch.name, linkSearch);
Vue.component(productShow.name, productShow);
Vue.component(keywords.name, keywords);
Vue.component(taskTimer.name, taskTimer);
Vue.component(commonSelect.name, commonSelect);
Vue.component(scanDeepSelect.name, scanDeepSelect);
Vue.component(deployRow.name, deployRow);
Vue.component(CollapseTransition.name, CollapseTransition);

Vue.prototype.$fillArray = function(arr, value) {
    for (let index = 0; index < arr.length; index++) {
        arr[index] = value;
    }

    return arr;
};