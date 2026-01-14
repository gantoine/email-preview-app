# Email Preview App

This app allows you to preview email templates in different email clients like Gmail and Outlook. It provides a simple interface to switch between different email clients and view the rendered HTML of the email.

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repo
   ```sh
   git clone https://github.com/gantoine/email-preview-app.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Run the development server
   ```sh
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

Here is a brief overview of the project structure:

- **app/**: Contains the core application code
  - **components/**: Contains all the reusable components
  - **emails/**: Contains the email templates that are displayed in the previewer
  - **lib/**: Contains utility functions
- **public/**: Contains all the static assets like images and fonts
