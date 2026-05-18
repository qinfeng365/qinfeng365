<script setup lang="ts">
interface Props {
  title?: string;
}

withDefaults(defineProps<Props>(), {
  title: "nutssss - bash",
});
</script>

<template>
  <div class="cmd">
    <div class="title-bar">
      <div class="click">
        <div class="red"></div>
        <div class="yellow"></div>
        <div class="green"></div>
      </div>
      <div class="title">
        <span>{{ title }}</span>
      </div>
    </div>
    <div class="cmdText">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="less">
.cmd {
  width: 100%;
  height: 400px;
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: none;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  font-size: 13.5px;
  color: #111;
  position: relative;
  box-shadow: none;

  &:hover {
    transform: translateY(-4px);
  }

  .title-bar {
    display: flex;
    align-items: center;
    width: 100%;
    height: 38px;
    background: rgba(255, 255, 255, 0.15);
    padding: 0 14px;
  }

  .title {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #555;
  }

  .click {
    display: flex;
    gap: 8px;

    div {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      transition: all 0.2s;
    }

    .red {
      background-color: #ff5f57;

      &:hover {
        box-shadow: 0 0 6px rgba(255, 95, 87, 0.5);
      }
    }

    .yellow {
      background-color: #febc2e;

      &:hover {
        box-shadow: 0 0 6px rgba(254, 188, 46, 0.5);
      }
    }

    .green {
      background-color: #28c840;

      &:hover {
        box-shadow: 0 0 6px rgba(40, 200, 64, 0.5);
      }
    }
  }

  .cmdText {
    padding: 14px 18px;
    height: calc(100% - 38px);
    overflow-y: auto;
    line-height: 1.7;
    font-family: "Fira Code", "Cascadia Code", "JetBrains Mono", Consolas, monospace;
    color: #111;
  }
}

@media screen and (max-width: 768px) {
  .cmd {
    width: 90%;
    margin: 0 auto;
    height: 350px;

    &:hover {
      transform: none;
    }
  }
}
</style>
