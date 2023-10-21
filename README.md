## This is a Playwright/TypeScript project that executes a few UI tests on Lennar's website.


Pre-requisites: 
- A code editor, [VSCode](https://code.visualstudio.com/download) is my favorite
-  [Git](https://git-scm.com/downloads) (use default settings when installing)
-  [Node.js](https://nodejs.org/en/download/current) (use default settings when installing)
-  [Create a GitHub account](https://github.com/join) if you do not have one.



1. Open VSCode and click the button that says "Clone Repository"
2. Click "Clone from GitHub" at the top of the window
3. Your browser will open to Github's website, sign in with your credentials
4. Once you are navigated back to VSCode, select the lennar-project repository
5. Select a folder to clone the repository into
6. Open the repository
7. Open a terminal window by clicking Terminal > New Terminal at the top
8. In the terminal run this command to install the project's packages
  
        npm install

9. Run this command to install playwright

       npx playwright install

10. Run this command to run the tests

        npx playwright test
