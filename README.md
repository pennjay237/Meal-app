# Food Ordering App with MealDB API

![App Screenshot](screenshot.png)

This is a **React-based food ordering application** that uses the MealDB API to display and manage meals. The app includes both **customer-facing and admin interfaces**, along with a favorites system, search functionality, and persistent local storage.

---

## Features

- **Landing Page**: Browse available meals with images and prices  
- **Product Details**: View meal details, nutritional information, and ingredients  
- **Favorites**: Mark/unmark meals as favorites and view them separately  
- **Search Functionality**: Real-time filtering of meals by name  
- **Checkout Flow**: Complete payment for orders  
- **Admin Dashboard**: Add, update, and delete meals with password protection  
- **Responsive Design**: Works on mobile, tablet, and desktop  
- **Context API**: Global state management throughout the application  
- **Local Storage**: All meals, orders, and favorites persist in the browser  

---

## Technologies Used

- **React (v18+)** – Frontend framework  
- **React Router (v6+)** – Routing  
- **Context API** – Global state management  
- **CSS Modules** – Component-scoped styling  
- **MealDB API** – Fetch meals and their data  
- **Local Storage** – Persistent browser storage  
- **React Icons / Lucide React** – Icons for favorites and navigation  

---

## Getting Started

### Prerequisites

- Node.js (v16+)  
- npm (v8+)  

### Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/food-ordering-app.git
   ```

2. Navigate into the project directory:  
   ```bash
   cd food-ordering-app
   ```

3. Install dependencies:  
   ```bash
   npm install
   ```

4. Start the development server:  
   ```bash
   npm run dev
   ```

5. Open the app in your browser:  
   ```
   http://localhost:5173
   ```

---

## Project Requirements / Checks

- **Clean Code**: Proper indentation, reusable components, and readable structure  
- **UI/UX**: Visually appealing, responsive, and consistent design  
- **Context API Usage**: Effective management of global state (`MealContext`, `FavoriteContext`, `AuthContext`)  
- **Code Structure**: Modular and well-organized directories for components, context, and pages  
- **Favorites Feature**: Users can mark/unmark meals as favorites and view them in a dedicated page  
- **Search Functionality**: Real-time filtering of meals by name  
- **CRUD Operations for Admin**: Admin can add, update, and delete meals  
- **Persistence**: Data remains in the browser using **localStorage**  
- **Responsiveness**: App works seamlessly across desktop, tablet, and mobile screens  
- **Animations & Interactivity**: Smooth transitions, hover effects, and subtle animations where appropriate  

---

## License

This project is open source and available under the MIT License.
