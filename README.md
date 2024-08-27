# Dominic Thompson's Portfolio

Welcome to the repository of my professional portfolio website. This site showcases my skills, experience, and achievements as a Full-Stack Software Engineer and Technology Executive.

![Portfolio Screenshot](/portfolio.PNG)

## 🌟 Features

- **Responsive Design**: Looks great on both desktop and mobile devices
- **Interactive UI**: Engaging user interface with smooth animations
- **Modular Architecture**: Built with reusable React components for easy maintenance and scalability
- **Performance Optimized**: Fast loading times and smooth interactions
- **SEO Friendly**: Structured for optimal search engine visibility

## 🛠️ Technologies Used

- React.js
- Tailwind CSS
- Framer Motion for animations
- Lucide React for icons
- Google Fonts (Inter & Poppins)

## 🚀 Quick Start

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Navigate to the project directory:
   ```
   cd portfolio
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🔧 Customization

To customize this portfolio for your own use:

1. Update the `AboutMe` component with your personal information.
2. Modify the `TechnicalSkills`, `ProfessionalExperience`, and `KeyProjects` components with your own details.
3. Replace the placeholder image in `AboutMe` with your own photo.
4. Adjust the color scheme in `index.css` to match your personal brand.

## 🚀 Deployment

This portfolio is set up for automatic deployment using GitHub Actions. Every push to the `main` branch triggers a build and deploy process to GitHub Pages.

### GitHub Actions Workflow

The `.github/workflows/deploy.yml` file contains the workflow configuration:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Install and Build
        run: |
          npm ci
          npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.5
        with:
          branch: gh-pages
          folder: build
```

This workflow does the following:
1. Triggers on every push to the `main` branch
2. Sets up the project and installs dependencies
3. Builds the project
4. Deploys the built files to the `gh-pages` branch

To use this feature:
1. Ensure your repository is set up for GitHub Pages in the Settings tab.
2. Push your changes to the `main` branch.
3. GitHub Actions will automatically build and deploy your updated site.

You can monitor the deployment process in the "Actions" tab of your GitHub repository.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 About Me

I'm Dominic Thompson, a Full-Stack Software Engineer and Technology Executive with over 15 years of experience. I specialize in:

- Frontend & Backend Development
- Cloud Architecture & DevOps
- AI/ML Integration
- Team Leadership & Project Management

Connect with me:
- [GitHub](https://github.com/onlythompson)
- [LinkedIn](https://linkedin.com/in/thompsondominic)
- [Email](mailto:onlythompson@gmail.com)

## 🤝 Contributing

While this is a personal portfolio, I'm open to suggestions and improvements. Feel free to open an issue or submit a pull request.

---

Built with ❤️ by Dominic Thompson