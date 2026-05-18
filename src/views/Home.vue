<script setup lang="ts">
import { ref, onMounted } from "vue";
import ProfileCard from "../components/ProfileCard.vue";
import Terminal from "../components/Terminal.vue";
import {
  profileData,
  aboutLines,
} from "../data";

const hitokoto = ref("");

onMounted(async () => {
  try {
    const res = await fetch("https://v1.hitokoto.cn/");
    const data = await res.json();
    hitokoto.value = data.hitokoto;
  } catch {
    hitokoto.value = "加载失败了呢...";
  }
});
</script>

<template>
  <div id="box">
    <div>
      <ProfileCard
        :avatar="profileData.avatar"
        :name="profileData.name"
        :descriptions="profileData.descriptions"
        :buttons="profileData.buttons"
      />
    </div>

    <div id="cmdBox">
      <Terminal>
        <span class="prompt-user">root@nutssss</span>
        <span class="prompt-path">~</span>
        <span class="prompt-cmd">./hitokoto.sh</span>
        <p class="hitokoto-text">{{ hitokoto || "加载中..." }}</p>
        <br />
        <span class="prompt-user">root@nutssss</span>
        <span class="prompt-path">~</span>
        <span class="prompt-cmd">cat /me.txt</span>
        <p v-for="(line, index) in aboutLines" :key="index">{{ line }}</p>
        <span class="prompt-user">root@nutssss</span>
        <span class="prompt-path">~</span>
        <span class="prompt-cmd">sudo rm -rf /过去的自己/*</span>
      </Terminal>
    </div>
  </div>
</template>

<style scoped lang="less">
#box {
  width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

#cmdBox {
  width: 680px;
}

.prompt-user {
  color: #1b5e20;
}

.prompt-path {
  color: #0d47a1;
}

.prompt-cmd {
  color: #222;
}

.hitokoto-text {
  margin: 8px 0;
  padding: 6px 0;
  color: var(--text-secondary);
  font-style: italic;
  font-size: 13px;
}

@media screen and (max-width: 1250px) {
  #box {
    width: 100%;
  }

  #cmdBox {
    margin-right: 3%;
  }
}

@media screen and (max-width: 1120px) {
  #box {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  #cmdBox {
    width: auto;
    margin: 0 auto 60px;
  }
}

@media screen and (max-width: 768px) {
  #box {
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
    min-height: auto;
  }

  #cmdBox {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
  }
}
</style>
