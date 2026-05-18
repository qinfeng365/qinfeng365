<script setup lang="ts">
interface ButtonItem {
  text: string;
  to: string;
}

interface DescImg {
  src: string;
  alt: string;
}

interface DescItem {
  text: string;
  img?: DescImg;
}

interface Props {
  avatar: string;
  name: string;
  descriptions: DescItem[];
  buttons: ButtonItem[];
}

defineProps<Props>();
</script>

<template>
  <div class="meBox">
    <div class="headPhoto" :style="{ backgroundImage: `url(${avatar})` }"></div>
    <div class="meBox-title">
      <p>{{ name }}</p>
      <div class="fg"></div>
    </div>
    <div class="meBox-text">
      <p v-for="(desc, index) in descriptions" :key="index">
        {{ desc.text
        }}<img
          v-if="desc.img"
          :src="desc.img.src"
          :alt="desc.img.alt"
          class="inline-icon"
          :class="{ 'icon-sm': desc.img.alt === '冰激凌' }"
        />
      </p>
    </div>
    <div class="meBox-Button">
      <router-link v-for="btn in buttons" :key="btn.text" :to="btn.to">
        {{ btn.text }}
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="less">
.meBox {
  width: 20rem;
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--radius);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  text-align: center;
  padding-bottom: 20px;
  box-shadow: var(--shadow);

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
    border-color: rgba(255, 255, 255, 0.3);

    .headPhoto {
      transform: scale(1.08) rotate(360deg);
      box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.15);
    }
  }

  .headPhoto {
    width: 8rem;
    height: 8rem;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    position: relative;
    top: -2.5rem;
    margin: 0 auto;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.6);
    border: 3px solid rgba(255, 255, 255, 0.8);
  }

  .meBox-title {
    width: auto;
    margin: -1.5rem auto 0;

    p {
      font-size: 1.2rem;
      font-weight: 600;
      border-right: 2px solid var(--primary);
      width: 12ch;
      white-space: nowrap;
      overflow: hidden;
      animation: typing 2s steps(20, end),
        blink-caret 0.6s step-end infinite alternate;
      margin: 0 auto;
      display: inline-block;
      transition: color 0.3s;
    }

    .fg {
      width: 60%;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--primary), transparent);
      margin: 12px auto 0;
    }
  }

  .meBox-text {
    width: 80%;
    overflow: hidden;
    text-align: center;
    color: var(--text-secondary);
    animation: meBox-text 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    margin: 16px auto 0;
    line-height: 1.8;
    font-size: 0.92rem;

    p {
      margin-top: 4px;
    }

    .inline-icon {
      width: 20px;
      vertical-align: middle;
    }

    .icon-sm {
      width: 15px;
    }
  }

  .meBox-Button {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 20px;
    padding: 0 20px;

    a {
      display: inline-block;
      flex: 1;
      max-width: 140px;
      height: 42px;
      line-height: 42px;
      text-decoration: none;
      color: var(--text-secondary);
      font-size: 0.9rem;
      font-weight: 500;
      border-radius: 12px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

      &:hover {
        background: rgba(0, 0, 0, 0.08);
        color: var(--text-primary);
        border-color: rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
      }
    }
  }
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}

@keyframes meBox-text {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 1120px) {
  .meBox {
    margin: 60px auto 0;

    &:hover {
      transform: translateY(-4px);
    }
  }
}

@media screen and (max-width: 768px) {
  .meBox {
    width: 90%;
    max-width: 300px;

    .meBox-Button a {
      height: 38px;
      line-height: 38px;
      font-size: 0.85rem;
    }

    .meBox-text {
      font-size: 0.88rem;
    }
  }
}
</style>
