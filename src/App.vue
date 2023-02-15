<template>
    <div class="video">
        <video-player
            cclass="video-player vjs-big-play-centered"
            :src="video_src"
            poster="https://vjs.zencdn.net/v/oceans.png"
            crossorigin="anonymous"
            playsinline
            controls
            :volume="0.6"
            :height="320"
            :playback-rates="[0.7, 1.0, 1.5, 2.0]"
            @mounted="handleMounted"
            @ready="handleEvent($event)"
            @play="handleEvent($event)"
            @pause="handleEvent($event)"
            @ended="handleEvent($event)"
            @loadeddata="handleEvent($event)"
            @waiting="handleEvent($event)"
            @playing="handleEvent($event)"
            @canplay="handleEvent($event)"
            @canplaythrough="handleEvent($event)"
            @timeupdate="handleEvent(player?.currentTime())"
        />
    </div>
</template>

<script setup lang="ts">
import { shallowRef, ref } from 'vue';
import { VideoPlayer } from '@videojs-player/vue';
import 'video.js/dist/video-js.css';

let video_src = ref('https://vjs.zencdn.net/v/oceans.mp4');

// video_src = ref('http://vfx.mtime.cn/Video/2019/03/21/mp4/190321153853126488.mp4');

const player = shallowRef();

const handleMounted = payload => {
    player.value = payload.player;
    console.log('Basic player mounted', payload);
};

const handleEvent = log => {
    console.log('Basic player event', log);
};
</script>

<style lang="less" scoped>
.video {
    width: 100%;
    display: flex;
    justify-content: center;
    &-player {
        width: 900px;
        height: 500px;
    }
}
</style>
