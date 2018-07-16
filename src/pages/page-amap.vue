<template>
    <div class="amap-page-container">
      <el-amap ref="amp" vid="amap" :zoom="zoom" :center="center" class="amap-demo">
        <!-- <el-amap-ground-image v-for="(groundimage, index) in groundimages" :key=index :url="groundimage.url" :bounds="groundimage.bounds" :events="groundimage.events"></el-amap-ground-image> -->
        <el-amap-marker v-for="(marker, index) in markers" :key=index :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :vid="index"></el-amap-marker>
      </el-amap>
       <div class="toolbar">
        <button @click="getMap()">get map</button>
      </div>
    </div>
  </template>

  <style>
    .amap-demo {
      height: 300px;
    }
  </style>

  <script>
  import Vue from 'vue'
import { AMapManager } from 'vue-amap'
let amapManager = new AMapManager()
export default {
    data () {
      return {
        amapManager,
        zoom: 17,
        center: [121.5273285, 31.21515044],
        groundimages: [
          {
            url: '//faas.elemecdn.com/desktop/media/img/appqc.95e532.png',
            bounds: [[121.5273285, 31.21515044], [122.9273285, 32.31515044]],
            events: {
              click () {
                alert('click groundimage')
              }
            }
          }
        ],
        markers: [
          {
            position: [121.5273285, 31.21515044],
            events: {
              click: () => {
                alert('click marker')
              },
              dragend: (e) => {
                console.log('---event---: dragend')
                this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
              }
            },
            visible: true,
            draggable: false,
            template: '<span>1</span>'
          }
        ]
      }
    },
    methods: {
      setCenter (lon, lat) {
        console.log(amapManager.getMap())
        amapManager.getMap().setCenter(lon, lat)
      },
      getMap () {
          // amap vue component
        console.log(amapManager._componentMap)
        // gaode map instance
        console.log(11, amapManager)

        var _self = this
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
        function (position) {
          var longitude = position.coords.longitude
          var latitude = position.coords.latitude
          console.log(longitude)
          console.log(latitude)
          Vue.set(_self.markers, 0, {
            position: [longitude, latitude],
            events: {
              click: () => {
                alert('click marker')
              }
            },
            visible: true,
            draggable: false,
            template: '<span>1</span>'
          })
          _self.center = [longitude, latitude]
        },
            function (e) {
              var msg = e.code
              var dd = e.message
              console.log(msg)
              console.log(dd)
            }
      )
        }
      }
    },
    mounted () {
    }
  
  }
</script>

<style scoped>
  .amap-page-container {
    width: 200px;
    height: 200px;
  }
</style>
