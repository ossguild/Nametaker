# Welcome to the Open Source Beginners Repository

If you're new to GitHub and open source, you're in the right place! This repository is designed to help you get started with your open source journey. You'll learn how to make your first contribution by adding your name and a small piece of information about yourself to a tiny file.

<img width="1024" alt="bg-readme" src="https://github.com/ossguild/Nametaker/assets/66284362/d6ae7a30-1e9b-4aa3-8bd9-b7a2710a84ae">


## Getting Started

### Prerequisites

Before you begin, make sure you have the following:

- A GitHub account (if you don't have one, you can [sign up here](https://github.com/join))
- Basic knowledge of Git and GitHub (you can learn the basics [here](https://guides.github.com/activities/hello-world/))
- A text editor or code editor of your choice

### How to Contribute

0. Star the Repo -> ⭐. It will help others find the project.

1. **Fork the Repository**: Click the "Fork" button at the top right corner of this repository to create your own copy.

2. **Clone Your Fork**: Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/ossguild/Nametaker.git

   ```
3. **Edit `contributors.ts`**: Open the `contributors.ts` file and add your name and a brief description about yourself in the following format:

```js
{
  name: 'Joshua Omobola',
  emoji: '🌵',
  favoriteQuote: 'I believe in unicorns',
  twitterUrl: 'https://twitter.com/kohawithstuff',
},
```
4. **Commit Your Changes**: Save your changes, commit them, and push to your GitHub repository:
```bash
git add *
git commit -m "feat: Add [Your Name] to contributors"
git push origin main
```

5. **Create a Pull Request**: Go back to the original repository on GitHub. You should see a notification prompting you to create a pull request. Click it, and submit your changes.

6. **Wait for Approval**: Once you've submitted your pull request, our team will review your contribution. If everything looks good, your changes will be merged into the main repository.

***Important Note***: Do not make any changes to the index.html file in this repository. This file is here as a part of the project and should remain untouched by contributors.

### Run the Website Locally: To view your contributions locally:

* **Install Node.js**: If you don't have Node.js and npm installed, download it [here](https://nodejs.org/en). If you using Linux, from your terminal, run
```bash
sudo apt update
sudo apt install nodejs
sudo apt install npm
```
* **Install project dependencies**: In your project directory, from your terminal, run:
```bash
npm install
```
* **Start the development server**:
```bash
npm run dev
```
Open your web browser and visit http://localhost:5173 to see your contributions in action.

## Learning Resources:

**GitHub Learning Lab**: A great resource for learning GitHub interactively.

**How to Create a Pull Request on GitHub**: Detailed guide on creating pull requests.
We're excited to have you on board! Happy contributing! 🚀

## License:
This project is licensed under the MIT License - see the LICENSE file for details.

