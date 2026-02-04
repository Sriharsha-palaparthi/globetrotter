# 3D Network Globe Dashboard

A high-performance 3D visualization dashboard built with React 19, Vite, Tailwind CSS 4.0, and react-globe.gl.

## 🚀 Getting Started

If you have cloned this from GitHub, follow these steps to run the project.

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1.  **Install dependencies**
    ```bash
    npm install
    ```
    *Note: If you encounter peer dependency warnings (common with React 19 RC), you can run:*
    ```bash
    npm install --legacy-peer-deps
    ```

2.  **Start the development server**
    ```bash
    npm run dev
    ```

3.  **Open the application**
    Open your browser and navigate to `http://localhost:5173` (or the URL shown in the terminal).

## 🛠 Tech Stack

-   **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
-   **3D Engine**: [react-globe.gl](https://github.com/vasturiano/react-globe.gl) (Three.js)
-   **Animation**: [Motion](https://motion.dev/) (formerly Framer Motion)

## 📂 Project Structure

-   `src/components/GlobeView.jsx` - Configures the 3D Globe, arcs, and camera control.
-   `src/components/Sidebar.jsx` - The glassmorphism sidebar with search and animated metrics.
-   `src/data/locations.js` - Mock data for cities, arcs, and country metrics.
-   `src/App.jsx` - Main layout handling the 70/30 split and responsive state.

## ✨ Features

-   **Dual-Pane Layout**: Interactive 3D globe (left) + BI Sidebar (right).
-   **Globe Navigation**: Clicking a search result in the sidebar smoothly flies the camera to that country.
-   **Visuals**: Custom dark-themed globe with arcs connecting major hubs (NY, London, Tokyo, Singapore, Dubai).
-   **Responsive**: Sidebar adjusts to bottom overlay on mobile devices.
