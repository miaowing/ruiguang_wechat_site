/**
 * Created by zhaofeng on 16/5/18.
 */
import Vue from 'vue';
import Template from './template.html';
import {infos} from '../../config/contact';

// global style
import '../index.less';

// single style
import './style.less';

new Vue({
    el: '#app',
    template: Template,
    data: {
        infos: infos,
        showInfo: false
    },
    compiled: function () {

    },
    ready: function () {
        this.showInfo = true;
    }
});