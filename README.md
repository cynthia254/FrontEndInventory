# FrontEndInventory

A Vue.js frontend application for the Inventory Management System.

## Prerequisites

Before running the project, make sure you have installed:

- **Node.js** (preferably an active LTS version)
- **npm**, which is installed with Node.js
- **Git**
- A code editor such as Visual Studio Code

You can download Node.js from https://nodejs.org/ and Git from https://git-scm.com/.

To confirm that Node.js and npm are installed, run:

```bash
node --version
npm --version
```

## Getting Started

### 1. Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/cynthia254/FrontEndInventory.git
```

### 2. Navigate to the Project Directory

```bash
cd FrontEndInventory
```

### 3. Install Dependencies

Install the packages required by the application:

```bash
npm install
```

This command reads the `package.json` file and installs the project's dependencies.

### 4. Run the Application

Start the development server:

```bash
npm run serve
```

Once the server starts successfully, open the local URL displayed in the terminal. For a typical Vue CLI project, this is:

http://localhost:8080/

Keep the terminal running while using the application. Press `Ctrl + C` in the terminal to stop the development server.

> **Note:** If `npm run serve` is not available, check the `scripts` section of `package.json`. Depending on the project configuration, the development command may instead be `npm run dev`.

## Building for Production

To create an optimized production build, run:

```bash
npm run build
```

The generated production files are typically saved in the `dist/` directory. These files can be deployed to a compatible web server.

## Project Structure

The project follows a typical Vue.js application structure:

```text
FrontEndInventory/
├── public/          # Public static files
├── src/             # Application source code
│   ├── assets/      # Images, styles, and other assets
│   └── ...          # Vue components and application logic
├── package.json     # Project metadata and npm scripts
├── package-lock.json
├── babel.config.js  # Babel configuration
├── vue.config.js    # Vue CLI configuration
├── nginx.conf       # Nginx configuration, if used
├── Dockerfile       # Docker build configuration, if used
└── README.md        # Project documentation
```

The exact contents of `src/` may vary depending on the implementation.

## Troubleshooting

### Dependencies fail to install

Confirm that Node.js and npm are installed, then try:

```bash
npm install
```

### The development server does not start

Check the available scripts in `package.json` and use the appropriate command. For example:

```bash
npm run
```

This lists the scripts defined by the project.

### Changes are not appearing

Save your files and refresh the browser. If necessary, stop and restart the development server.

### Port 8080 is already in use

Vue CLI may offer another available port when starting the development server. Open the URL displayed in your terminal.

## Contributing

1. Clone the repository.
2. Create a new branch for your changes.
3. Install dependencies and run the application locally.
4. Commit your changes with a descriptive commit message.
5. Push your branch and open a pull request.

## License

No license has been specified for this project. Contact the repository owner for permission to reuse or redistribute the code.
