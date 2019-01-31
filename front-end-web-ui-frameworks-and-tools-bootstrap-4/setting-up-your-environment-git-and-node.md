# Setting up your Environment: Git and Node

## Setting up Git

* 確認git版本資訊

```
git --version
git version 2.19.0.windows.1
```

To configure your user name to be used by Git

* 設置你的姓名與Email

```
git config --global user.name "Your Name"
git config --global user.email <your email address>
```

* 在透過指令list進行確認

```
git config --list
```

---

## Basic Git Commands

* create a folder named git-test

* add **index.html** in this folders\(git-test\)
  * index.html like this:

  ```
  <!DOCTYPE html>
  <html>
      <head></head>

      <body>
          <h1>This is a Header</h1>
      </body>
  </html>
  ```



* init the folder as a Git repository

```
git init
Initialized empty Git repository in C:/Users/User/Documents/GitHub/Learn-for-Full-Stack-Web-and-Multiplatform-Mobile-App-Development-Notes/git-test/.git/
```

* git status

  * check out your git reponsitory's status

  ```
  git status
  On branch master

  No commits yet

  Untracked files:
    (use "git add <file>..." to include in what will be committed)

          index.html

  nothing added to commit but untracked files present (use "git add" to track)

  ```



* git add

  * add files to the staging area of your Git repository



