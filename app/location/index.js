/**
 * Created by zhaofeng on 16/5/18.
 */
import Vue from 'vue';
import Template from './template.html';

import {location1, location2, location3} from '../../config/location';

// global style
import '../index.less';

// single style
import './style.less';
let locations = [location1, location2, location3];

let location = location1;

new Vue({
    el: '#app',
    template: Template,
    data: {
        map: null,
        active: 'ruiguang'
    },
    ready: function () {
        this.map = new AMap.Map('mapContainer', {
            resizeEnable: true,
            zoom: location.zoom,
            center: [location.x, location.y]

        });

        locations.forEach(location => {
            let marker = new AMap.Marker({
                icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                position: [location.x, location.y]
            });
            marker.setMap(this.map);

            //label默认蓝框白底左上角显示，样式className为：amap-marker-label
            marker.setLabel({
                //修改label相对于maker的位置
                offset: new AMap.Pixel(location.markerX, location.markerY),
                content: location.markerLabel
            });
        })
    },
    methods: {
        ruiguang: function () {
            this.map.setZoomAndCenter(location1.zoom, [location1.x, location1.y]);
            this.active = 'ruiguang';
        },
        ruiyuan: function () {
            this.map.setZoomAndCenter(location2.zoom, [location2.x, location2.y]);
            this.active = 'ruiyuan';
        },
        ruihua: function () {
            this.map.setZoomAndCenter(location3.zoom, [location3.x, location3.y]);
            this.active = 'ruihua';
        }
    }
})