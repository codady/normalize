
# @codady/normalize

A modern alternative to normalize.css, focused on typography, form usability, and cross-browser consistency.

### Demos

[See all demos](https://unpkg.com/@codady/normalize/examples/index.html)


### 📥 Installation

Install via npm:

```bash
npm install normalize
```

Or using yarn:

```bash
yarn add normalize
```

Or using pnpm:

```bash
pnpm add normalize
```

---

### 🚀 Usage

Import the stylesheet in your project:

```js
import '@codady/normalize';
```

Or:


```js
import '@codady/normalize/tailwind';
```

👉 This will automatically apply @codady/normalize styles.

---

### 🌐 CDN Usage (Optional)

You can also use @codady/normalize via CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/@codady/normalize/dist/normalize.min.css">
```

Or:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@codady/normalize/dist/normalize.min.css">
```

---

## ✨ Philosophy

@codady/normalize is designed with the following principles:

- Fix browser inconsistencies
- Provide a clean typography baseline
- Improve form & media usability
- Stay layout-neutral (no layout opinion)

---

## 🚀 Features

- Modern CSS defaults (e.g. `accent-color`, `text-wrap`)
- Improved form control consistency
- Better typography baseline
- Built-in multilingual font optimization (CJK, Arabic)
- Sensible defaults without over-styling

---

## 🎯 Goals

@codady/normalize is **not**:

- ❌ A CSS framework
- ❌ A design system
- ❌ A UI component library

@codady/normalize **is**:

- ✅ A foundational CSS layer
- ✅ A better normalize/reset
- ✅ A clean starting point for any project

---

## 🧩 Variable System

@codady/normalize uses a minimal and intentional variable system.

### Public Override Tokens

These variables are designed to be overridden by users:

```css
:root {
  --default-font-family: "Inter", sans-serif;
  --default-mono-font-family: "Fira Code", monospace;
  --default-accent-color: #2563eb;
  --default-border-color: #ccc;
}
````

### Internal Tokens

These variables are used internally and should generally not be modified:

```css
:root {
  --font-sans: system-ui;
  --font-zh-sc: "PingFang SC", "Microsoft YaHei";
  --lh-normal: 1.5;
}
```

---

## 📦 Usage

```html
<link rel="stylesheet" href="normalize.css">
```

---

## 🎨 Customization Example

```css
:root {
  --default-font-family: "Inter", sans-serif;
  --default-accent-color: hotpink;
}
```

---

## ⚖️ Comparison

| Feature             | @codady/normalize | normalize.css | reset.css |
| ------------------- | -------- | ------------- | --------- |
| Modern CSS support  | ✅        | ❌             | ❌         |
| Typography baseline | ✅        | ⚠️ Minimal    | ❌         |
| Form improvements   | ✅        | ❌             | ❌         |
| Layout opinion      | ❌        | ❌             | ❌         |

---

## 📄 License

MIT License

---

# 中文说明

一个现代化的 normalize.css 替代方案，专注于排版、表单可用性以及跨浏览器一致性。

### 演示

[查看所有演示](https://unpkg.com/@codady/normalize/examples/index.html)


### 📥 安装

通过 npm 安装：

```bash
npm install normalize
```

或者使用 yarn：

```bash
yarn add normalize
```

或者使用 pnpm：

```bash
pnpm add normalize
```

---

### 🚀 使用方式

在项目中直接引入：

```js
import '@codady/normalize';
```

或者

```js
import '@codady/normalize/tailwind';
```

👉 即可自动生效 @codady/normalize 样式。

---

### 🌐 CDN 使用（可选）

你也可以通过 CDN 使用：

```html
<link rel="stylesheet" href="https://unpkg.com/@codady/normalize/dist/normalize.min.css">
```

或者：

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@codady/normalize/dist/normalize.min.css">
```


## ✨ 设计理念

@codady/normalize 的设计目标：

* 修正浏览器默认样式差异
* 提供干净统一的排版基线
* 优化表单与媒体元素体验
* 尽量不干涉布局（保持中立）

---

## 🚀 特性

* 使用现代 CSS（如 `accent-color`、`text-wrap`）
* 改进表单控件一致性
* 更合理的默认排版
* 内建多语言字体优化（中日韩 / 阿拉伯语）
* 提供基础能力但不过度设计

---

## 🎯 项目定位

@codady/normalize 不是：

* ❌ UI 框架
* ❌ 设计系统
* ❌ 组件库

@codady/normalize 是：

* ✅ 基础样式层
* ✅ 更现代的 normalize
* ✅ 项目的起点

---

## 🧩 变量系统

@codady/normalize 提供两类变量：

### 可覆盖变量（Public API）

```css
:root {
  --default-font-family
  --default-mono-font-family
  --default-accent-color
  --default-border-color
}
```

👉 用于用户自定义全局行为

---

### 内部变量（Internal Tokens）

```css
:root {
  --font-sans
  --font-zh-sc
  --lh-normal
}
```

👉 用于内部实现，不建议直接修改

---

## 📦 使用方式

```html
<link rel="stylesheet" href="normalize.css">
```

---

## 🎨 自定义示例

```css
:root {
  --default-accent-color: hotpink;
}
```

---

## ⚖️ 对比

* 比 normalize.css 更现代
* 比 reset.css 更温和
* 不像 UI 框架那样侵入性强

---

## 📄 许可

MIT License

```