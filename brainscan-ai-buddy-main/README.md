# Brain Tumor Detection - AI-Powered Medical Imaging Analysis

![Project Status](https://img.shields.io/badge/Status-Development-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Tech](https://img.shields.io/badge/Built%20With-React%20%7C%20Vite%20%7C%20Supabase-blueviolet)

A modern, AI-powered web application designed to analyze medical imaging (MRI and CT scans) for the detection of brain tumors. Built with high performance and accuracy in mind, this platform leverages advanced machine learning integration within a responsive web interface.


## 🌟 Features

* **AI Analysis:** Rapid detection algorithms for analyzing MRI and CT brain scans.
* **Medical Visualization:** Interactive data visualization using **Recharts**.
* **Modern UI/UX:** Built with **Shadcn UI** and **Radix Primitives** for an accessible and beautiful interface.
* **Responsive Design:** Fully responsive layout using **Tailwind CSS**.
* **Secure Authentication:** User management and security handled by **Supabase**.
* **Interactive Elements:** Includes carousels, toast notifications (`Sonner`), and smooth transitions.

## 🛠️ Tech Stack

This project is built using the latest web technologies:

* **Frontend:** [React 18](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/), [Class Variance Authority (CVA)](https://cva.style/)
* **UI Components:** [Shadcn UI](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/) (Icons)
* **Backend & Auth:** [Supabase](https://supabase.com/)
* **State Management:** [TanStack Query](https://tanstack.com/query/latest)
* **Form Handling:** [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/) (Validation)

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

* Node.js (v18 or higher)
* npm or bun

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yourusername/brainscan-ai-buddy.git](https://github.com/yourusername/brainscan-ai-buddy.git)
    cd brainscan-ai-buddy
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory. You will need your Supabase credentials.
    
    ```bash
    touch .env
    ```
    
    Add the following variables to your `.env` file:
    ```env
    VITE_SUPABASE_URL=your_supabase_project_url
    VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
    VITE_SUPABASE_PROJECT_ID=your_project_id
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

    Open [http://localhost:8080](http://localhost:8080) (or the port shown in your terminal) to view it in the browser.

## 📂 Project Structure

```text
├── src/
│   ├── components/      # Reusable UI components (Shadcn, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities (Supabase client, utils.ts)
│   ├── pages/           # Application pages/routes
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Entry point
├── public/              # Static assets
├── .env                 # Environment variables (do not commit this)
├── eslint.config.js     # ESLint configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
