# 📝 Todo Web 应用

一个简单易用的待办事项管理应用，使用 Next.js + TypeScript + TailwindCSS 构建。

## ✨ 功能特点

- ✅ 添加新任务
- ✅ 标记任务完成/未完成
- ✅ 删除任务
- ✅ 本地存储（刷新页面数据不丢失）
- ✅ 响应式设计
- ✅ 现代化 UI 界面

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. **进入项目目录**
   ```bash
   cd todo-app
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **打开浏览器访问**
   ```
   http://localhost:3000
   ```

## 📁 项目结构

```
todo-app/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── page.tsx           # 主页 - Todo 应用主界面
│   │   └── layout.tsx         # 根布局
│   ├── components/            # React 组件
│   │   ├── TodoInput.tsx      # 任务输入组件
│   │   └── TodoList.tsx       # 任务列表组件
│   ├── hooks/                 # 自定义 Hooks
│   │   └── useTodos.ts        # Todo 状态管理和本地存储
│   ├── types/                 # TypeScript 类型定义
│   │   └── todo.ts            # Todo 相关类型
│   └── ...
├── public/                    # 静态资源
├── package.json               # 项目依赖和脚本
└── README.md                 # 项目文档
```

## 🛠️ 主要技术栈

- **Next.js 15** - React 全栈框架
- **TypeScript** - 类型安全的 JavaScript
- **TailwindCSS** - 实用优先的 CSS 框架
- **React Hooks** - 状态管理
- **LocalStorage** - 本地数据存储

## 💡 使用说明

### 添加任务
在输入框中输入任务内容，点击"添加任务"按钮或按 Enter 键即可添加新任务。

### 完成任务
点击任务前面的复选框可以标记任务为完成状态，再次点击可取消完成。

### 删除任务
点击任务右侧的"删除"按钮可以删除该任务。

### 数据持久化
所有任务数据会自动保存到浏览器本地存储中，即使刷新页面或重新打开应用，数据也不会丢失。

## 🎯 开发脚本

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 运行代码检查
npm run lint
```

## 🔧 自定义配置

- 修改 `tailwind.config.ts` 来自定义 TailwindCSS 配置
- 修改 `next.config.js` 来自定义 Next.js 配置
- 在 `src/types/todo.ts` 中添加新的类型定义

## 🌐 部署与环境说明

本项目支持两个独立的 Vercel 部署环境：

### 1）测试环境（Trae → Vercel 部署 A）

- **用途**：由 Trae 直接部署到 Vercel，用于快速预览和测试
- **访问地址**：`https://traetodo-app-traev188.vercel.app`
- **使用流程**：
  1. 使用 Trae 输入 Prompt 修改代码
  2. 在本地通过 `npm run dev` 查看效果
  3. 需要线上测试时，通过 Trae 部署到测试环境

### 2）正式生产环境（GitHub → Vercel 部署 B）

- **用途**：通过 GitHub 仓库连接到 Vercel 的生产环境
- **触发方式**：
  ```bash
  git add .
  git commit -m "feat: 描述修改内容"
  git push
  ```
- **构建流程**：Vercel 自动从 GitHub 拉取代码并构建部署
- **生产环境地址**：`<在这里填入你的生产 URL，例如 https://your-prod.vercel.app>`

## 🛠 推荐开发流程

1. **使用 Trae 编写 Prompt**，自动修改代码
2. **本地开发验证**：
   ```bash
   npm install   # 首次需要
   npm run dev   # 启动开发服务器
   ```
   访问 http://localhost:3000 查看效果
3. **线上测试**：通过 Trae 部署到测试环境（部署 A）
4. **发布正式版本**：
   ```bash
   git add -A
   git commit -m "feat: 新增功能描述"
   git push
   ```
   等待 GitHub → Vercel 完成生产构建（部署 B）

## 📱 响应式设计

应用采用移动优先的响应式设计，在不同设备上都有良好的用户体验：

- 📱 手机端：单列布局，触摸友好的按钮
- 💻 平板端：适中的间距和字体大小
- 🖥️ 桌面端：更宽的容器，更好的视觉层次

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目！

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

---

**享受使用 Todo 应用吧！🎉**