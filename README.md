🚀 Along Collage Maker

Banner Version License

Along Collage Maker is a high-performance web application designed for Mobile
Legends: Bang Bang players to create stunning, HD-quality skin showcases.
Featuring a smart roster scanner, a dynamic library, and a drag-and-drop editor.

Live Demo ➔ (https://collage-20.vercel.app/)

🌟 Key Features

  - 📸 Smart Roster Scanner: Upload your in-game screenshots, and the tool
    identifies your skins automatically.
  - 🎨 HD Collage Builder: Create seamless grids (up to 12 columns) with zero
    quality loss.
  - 🖼️ Profile Integration: Add your in-game profile banner at the top of your
    collage for a personalized touch.
  - 💎 Rarity Color Coding: Skins are automatically tagged and styled by rarity
    (Legend, Collector, Zenith, Starlight, etc.).
  - 🖱️ Drag-and-Drop: Reorder your skins easily using an intuitive visual
    interface.
  - 💾 State Persistence: Your selections and scans are saved locally, so you
    don’t lose progress on refresh.

📸 Preview

| 1\. Scan & Detect                                                           | 2\. Library Selection                                                        | 3\. HD Customization                                                         |
| :-------------------------------------------------------------------------: | :--------------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
| ![Scan Example](https://via.placeholder.com/300x200?text=Scanner+Interface) | ![Library Example](https://via.placeholder.com/300x200?text=Skin+Library+UI) | ![Export Example](https://via.placeholder.com/300x200?text=Final+HD+Collage) |

🛠️ How To Use

Follow these simple steps to create your professional skin showcase:

Step 1: Scan Your Account

Navigate to the Scan Account tab. Upload a screenshot of your hero roster. The
AI-simulated scanner will detect visible skins and mark them as "Owned" in your
library.

Step 2: Choose Your Skins

Go to the Skin Library. You can search for specific heroes or filter by skin
names. Tap on any skin to select it.

Tip: You can select skins manually even if you didn't use the scanner!

Step 3: Design the Layout

In the Build Collage tab:

  - Upload Profile: Add a screenshot of your game profile to act as a header.
  - Adjust Columns: Choose between 4 to 12 columns for your grid.
  - Spacing: Adjust the "Grid Spacing" slider for a seamless or framed look.
  - Reorder: Drag and drop images to arrange them exactly how you want.

Step 4: Export in HD

Click the Export High-Q Image button. The app will render a high-definition PNG
file (4x scale) directly to your device.

💡 Best Practices for Best Results

  - For the Scanner: Use clear, high-brightness screenshots from the in-game
    Hero Roster page.
  - For the Header: Crop your profile screenshot to focus on the name and level
    for a cleaner banner look.
  - For Exporting: Use 12 Columns (Seamless) for the most professional
    "full-grid" aesthetic often used by top collectors.
  - Browser: Works best on Chrome, Safari, and high-end mobile browsers.

🛠️ Built With

  - HTML5/CSS3: Glassmorphism UI and Responsive Grid Layout.
  - Vanilla JavaScript: Core logic and state management.
  - Sortable.js: For the smooth drag-and-drop experience.
  - html2canvas: For high-definition image rendering.

📂 Repository Structure

├── index.html          # Main application file (All-in-one)
├── images/             # Folder containing skin assets (fetched via API)
└── README.md           # Documentation

🤝 Contributing

If you want to add more skins to the database:

1.  Fork the repository.
2.  Add the skin image to the /images folder following the naming convention:
    HeroName-SkinName-Rarity.png.
3.  Create a Pull Request.

Developed with ❤️ by AlongBots
