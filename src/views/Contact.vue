<script setup lang="ts">
import { terminalLinks } from "../data";

const contacts = [
  { label: "QQ", value: "1656071287", icon: "💬" },
  { label: "Blog", value: "blog.n0ts.top", url: "https://blog.n0ts.top/", icon: "📝" },
  { label: "GitHub", value: "N0ts", url: "https://github.com/N0ts", icon: "💻" },
];
</script>

<template>
  <div class="page">
    <div class="page-card fade-in">
      <h1>联系我</h1>
      <div class="divider"></div>
      <div class="contact-list">
        <div
          class="contact-item"
          v-for="(item, index) in contacts"
          :key="item.label"
          :style="{ animationDelay: 0.2 + index * 0.1 + 's' }"
        >
          <span class="icon">{{ item.icon }}</span>
          <div class="info">
            <span class="label">{{ item.label }}</span>
            <a v-if="item.url" :href="item.url" target="_blank">{{ item.value }}</a>
            <span v-else class="value">{{ item.value }}</span>
          </div>
        </div>
      </div>
      <div class="sites">
        <h2>我的站点</h2>
        <div class="site-links">
          <a
            v-for="(link, index) in terminalLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            :style="{ animationDelay: 0.5 + index * 0.08 + 's' }"
          >
            {{ link.name }}
            <span class="link-arrow">&rarr;</span>
          </a>
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

  .contact-list {
    .contact-item {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 16px;
      border-radius: var(--radius-sm);
      animation: fadeSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
      transition: all 0.3s;

      &:hover {
        background: rgba(255, 255, 255, 0.5);
        transform: translateX(4px);
      }

      .icon {
        font-size: 1.3rem;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(66, 184, 131, 0.08);
        border-radius: 10px;
        flex-shrink: 0;
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 2px;

        .label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .value {
          color: var(--text-primary);
          font-size: 0.92rem;
        }

        a {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.92rem;
          transition: color 0.3s;
          text-decoration: underline;
          text-underline-offset: 3px;

          &:hover {
            color: #000;
          }
        }
      }
    }
  }

  .sites {
    h2 {
      margin-top: 28px;
    }

    .site-links {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 14px;

      a {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 10px 20px;
        background: rgba(255, 255, 255, 0.5);
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 12px;
        text-decoration: none;
        color: var(--text-primary);
        font-size: 0.88rem;
        font-weight: 500;
        animation: fadeSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

        .link-arrow {
          transition: transform 0.3s;
          font-size: 0.8rem;
        }

        &:hover {
          background: rgba(0, 0, 0, 0.08);
          color: var(--text-primary);
          border-color: rgba(0, 0, 0, 0.15);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);

          .link-arrow {
            transform: translateX(3px);
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
