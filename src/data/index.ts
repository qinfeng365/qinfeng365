import fishImg from "../assets/img/fish.png";
import iceCreamImg from "../assets/img/002.png";

export const profileData = {
  avatar: "https://q1.qlogo.cn/g?b=qq&nk=1656071287&s=640",
  name: "I'm N0ts",
  descriptions: [
    { text: "一条咸鱼", img: { src: fishImg, alt: "咸鱼" } },
    { text: "爱好篮球，计算机" },
    { text: "瞎折腾浪费时间最在行" },
    { text: "最爱", img: { src: iceCreamImg, alt: "冰激凌" } },
  ],
  buttons: [
    { text: "关于", to: "/about" },
    { text: "联系", to: "/contact" },
  ],
};

export const terminalLinks = [
  { name: "Blog", url: "https://blog.n0ts.top/" },
  { name: "Love", url: "https://lovexhj.top/" },
  { name: "Note", url: "https://note.n0ts.top/" },
  { name: "Mc", url: "https://mc.n0ts.top/" },
  { name: "McBlog", url: "https://mc.n0ts.top/blog/" },
];

export const aboutLines = [
  "爱好计算机，会去自学自己感兴趣的一切东西",
  "略懂H5，C#开发；爱好折腾去解决一切问题",
  "同时我也很喜欢玩硬件，raspberry是我的最爱",
  "这条路我才刚刚迈开了我的第一步",
  "路上的坎一定会非常多，但",
  "在我眼里",
  "没有什么问题是尝试不能解决的，如果有那就多尝试几次甚至上百次",
  "即使前方的路看似绝境，也要有硬生生给自己开出一条路的勇气",
];
