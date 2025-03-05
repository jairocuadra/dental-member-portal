# Dental Claims Application

A responsive React application for viewing dental insurance claims. This application allows users to:

- Select a member from a dropdown
- View a list of recent claims
- Expand/collapse claim cards to see details
- Expand/collapse sub-claims to see financial details
- Download claim statements

## Features

- Responsive design that works on mobile, tablet, and desktop
- Expandable/collapsable claim cards
- Nested expandable sub-claims with detailed information
- Color-coded status indicators (green for approved, purple for pending, red for denied)
- Member selection dropdown

## Technologies Used

- React
- TypeScript
- Vite
- CSS-in-JS (inline styles)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
# or
yarn
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at http://localhost:5173

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

- `src/components/` - React components
- `src/types/` - TypeScript type definitions
- `src/data/` - Mock data for the application
- `src/assets/` - Static assets like images and icons

## Future Enhancements

- Add authentication
- Implement real API integration
- Add search functionality
- Add filtering options
- Implement pagination for large claim lists
- Add detailed claim view page
