# WDIO Test automation framework

  
## Steps followed to create sample wdio automation framework
Install NodeJS (preferably NVM)

1. Create project folder
    ``` bash
    mkdir wdio_automation_framework
    cd wdio_automation_framework
    ```
1. Init `npm` inside folder
    ``` bash
    npm init -y
    ```
1. Init `git` inside folder
    ```
    git init
    git add .
    git commit -m "initial commit"
    git remote add origin <git_url>
    git push --set-upstream origin master
    ```
1. Install `@wdio/cli`
    ```
    npm i --save-dev @wdio/cli
    ```
1. Generate default configuration file. The configurator will install all required packages for you and create a config file called `wdio.conf.js`
    ```
    npx wdio config -y
    ```

1. To execute the default test from `npx`
    ```
    npx wdio wdio.conf.js
    ```
    (or) <br>
    To execute using `npm`, update `wdio wdio.conf.js` to test under `package.json` and execute below command
    ```
    npm test
    ```

