# 📸 ALONG Collage Maker

> A sleek, high-performance web tool built for the gaming community to scan rosters, manage skin libraries, and generate high-quality profile collages.

Perfect for players, esports teams, and gaming storefronts looking to showcase their premium collections (Legend, Collector, Zenith, Epic, etc.) with a highly customizable, drag-and-drop interface.

---

## ✨ Best Points & Core Features

* **🔍 Smart Roster Scanner:** Upload a screenshot of your in-game roster. The app simulates a scan to quickly mark detected items in your library.
* **📚 Extensive Skin Library:** Search and filter through a dynamic database hosted directly on GitHub. Items are automatically color-coded by rarity (Legend, Collector, Starlight, etc.).
* **🛠️ Drag & Drop Collage Builder:** Effortlessly organize your collage. Sort skins, add a custom profile banner, and adjust the grid layout (4 to 12 columns) in real-time.
* **💾 Persistent State:** Accidentally refreshed? No problem. Your selected and owned items are saved locally in the browser so you never lose your work.
* **📸 HD Export:** Powered by `html2canvas`, export your final seamless or spaced collage as a high-quality image ready for social media or storefront promos.
* **📱 Fully Responsive:** A premium glassmorphism UI that works flawlessly on both desktop and mobile devices.

---

## 🚀 How to Use

Using the ALONG Collage Maker is broken down into three simple steps:

### Step 1: Scan Your Account

Navigate to the **Scan Account** tab. Drag and drop (or tap to upload) a screenshot of your hero roster. The tool will "scan" your image and automatically detect the items you own.

### Step 2: Browse the Skin Library

Move to the **Skin Library** tab. Here you can search by hero name or item tag (e.g., "Gusion" or "Collector").

* Tap any card to add it to your collage selection.
* Selected items are highlighted with a glowing border and a checkmark.

### Step 3: Build & Export Your Collage

Head over to the **Build Collage** tab to finalize your design.

1. **Upload a Profile Banner:** Add your profile header to sit at the top of the collage.
2. **Adjust Layout:** Choose your column count and tweak the grid spacing (set gap to `0px` for a seamless look).
3. **Sort:** Click and drag the images to reorder them exactly how you want.
4. **Export:** Hit **Export High-Q Image** to download your final masterpiece.

---

## 💻 Tech Stack

This project is built to be lightweight and fast, requiring no heavy backend infrastructure:

* **Frontend:** HTML5, CSS3 (Custom Glassmorphism UI), Vanilla JavaScript
* **Libraries:**
* [html2canvas](https://html2canvas.hertzen.com/) (For HD image rendering)
* [SortableJS](https://sortablejs.github.io/Sortable/) (For smooth drag-and-drop functionality)


* **Database Engine:** GitHub API (Fetches image directories dynamically from the `alongbots/Collage` repository).
* **Fonts:** Orbitron & Poppins (Google Fonts)

---

## 🛠️ Installation & Setup

Because this is a standalone HTML application, installation is incredibly simple:

1. Clone or download this repository.
2. Place your skin images in the `images/` folder on your GitHub repository (ensure they are named properly, e.g., `HeroName-SkinName-Epic.jpg`).
3. Open `index.html` in any modern web browser.
4. *Note: To ensure the GitHub API fetches correctly, ensure your repository is public or properly authenticated.*

---

*Built by [Along Bots](https://www.google.com/search?q=https://github.com/alongbots) | Optimized for mobile and desktop.*
