# Git

Git is a cloud based software repository library where users can collaborate and share their works.  You can fork their software (gives you a copy) and then you can do you own changes and submit them, or if you find issues with the software you can report bugs.  Give your thanks to Linus

## Getting Started

Git has a command line interface thats built into most Linux distros.  For Windows you'll have to install it on your system via Git Bash or some other method.  If you are working with the WSL, you can install GIT into that via the package manager.

### First time setting up :  

1.  Set up your identity and changes (if you want) => https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup  
2.  Set up your SSH key and add that to your list of public keys => https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account  
3.  G2G
   
## Doing stuff

  When you either create a repository or fork one, it'll create a new master branch in your Git profile.  From here you can clone it by selecting the Code button and selecting one of the 3 options.  In the example I use the ssh method and work from my terminal:  

### Git Clone
    
  
  ```
  //Creates a local copy of your git repository at the location you are at. //It'll create a folder for this repository
  $git clone "blahblah.git" 

  //To update  your local to the master branch
  git checkout "name.got"
  git merge origin/master
  ```


