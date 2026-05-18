<script setup lang="ts">
import { ref, onMounted } from "vue";
import { aboutLines } from "../data";

const skills = [
  { name: "HTML / CSS", level: 85, color: "#e44d26" },
  { name: "JavaScript", level: 75, color: "#f0db4f" },
  { name: "Vue", level: 70, color: "#42b883" },
  { name: "C#", level: 60, color: "#68217a" },
  { name: "Raspberry Pi", level: 65, color: "#c51a4a" },
  { name: "Linux", level: 55, color: "#7abfee" },
  { name: "Node.js", level: 50, color: "#68a063" },
  { name: "Git", level: 60, color: "#f05032" },
];

const animated = ref(false);

onMounted(() => {
  requestAnimationFrame(() => {
    animated.value = true;
  });
});
</script>

<template>
  <div class="page">
    <div class="page-card fade-in">
      <h1>关于我</h1>
      <div class="divider"></div>
      <div class="about-content">
        <p v-for="(line, index) in aboutLines" :key="index">{{ line }}</p>
      </div>
      <div class="skills">
        <h2>技能墙</h2>
        <div class="skill-wall">
          <div
            class="skill-item"
            v-for="(skill, index) in skills"
            :key="skill.name"
            :style="{ animationDelay: 0.4 + index * 0.08 + 's' }"
          >
            <div class="skill-header">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
            <div class="skill-bar">
              <div
                class="skill-fill"
                :class="{ animate: animated }"
                :style="{
                  '--target-width': skill.level + '%',
                  '--bar-color': skill.color,
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/" class="back-btn">
        <span class="arrow">&larr;</span> 返回首页
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="less">
.page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  overflow: hidden;
}

.page-card {
  width: 620px;
  max-width: 92%;
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--radius);
  padding: 44px;
  box-shadow: var(--shadow);

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.5px;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-top: 28px;
  }

  .divider {
    width: 48px;
    height: 3px;
    background: var(--primary);
    border-radius: 2px;
    margin: 14px 0 22px;
    animation: dividerGrow 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
  }

  .about-content {
    color: var(--text-secondary);
    line-height: 1.9;
    font-size: 0.92rem;

    p {
      margin-bottom: 6px;
    }
  }

  .skill-wall {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 16px;

    .skill-item {
      animation: fadeSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
      padding: 10px 14px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: var(--radius-sm);
      border: 1px solid rgba(0, 0, 0, 0.04);
      transition: all 0.3s;

      &:hover {
        background: rgba(255, 255, 255, 0.8);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
      }

      .skill-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;

        .skill-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-level {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
      }

      .skill-bar {
        width: 100%;
        height: 5px;
        background: rgba(0, 0, 0, 0.06);
        border-radius: 3px;
        overflow: hidden;

        .skill-fill {
          height: 100%;
          border-radius: 3px;
          width: 0;
          background: var(--bar-color);
          transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);

          &.animate {
            width: var(--target-width);
          }
        }
      }
    }
  }

  .back-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 28px;
    padding: 10px 22px;
    text-decoration: none;
    color: var(--text-primary);
    font-size: 0.9rem;
    font-weight: 500;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

    .arrow {
      transition: transform 0.3s;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.08);
      color: var(--text-primary);
      border-color: rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

      .arrow {
        transform: translateX(-3px);
      }
    }
  }
}

.fade-in {
  animation: fadeSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes dividerGrow {
  from {
    width: 0;
  }
  to {
    width: 48px;
  }
}
</style>
