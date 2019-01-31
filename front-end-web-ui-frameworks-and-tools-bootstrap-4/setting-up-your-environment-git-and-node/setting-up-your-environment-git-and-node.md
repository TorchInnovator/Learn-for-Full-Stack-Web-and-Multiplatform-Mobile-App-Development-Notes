# Setting up your Environment: Git and Node

# Setting up Git

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

  ```
  git add .
  git status
  On branch master

  No commits yet

  Changes to be committed:
    (use "git rm --cached <file>..." to unstage)

          new file:   index.html
  ```

* git commit

  * To commit the current staging area to your Git repository

  ```
  git commit -m "Lerarn git first commit"
  [master (root-commit) 4526398] Lerarn git first commit
   1 file changed, 8 insertions(+)
   create mode 100644 index.html

   git status
   On branch master
  nothing to commit, working tree clean
  ```

* git log

  * To check the log of the commits to your Git repository

    * oneline

    ```
    git log --oneline
    4526398 (HEAD -> master) Lerarn git first commit

    git status
    On branch master
    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git checkout -- <file>..." to discard changes in working directory)

            modified:   index.html

    Untracked files:
      (use "git add <file>..." to include in what will be committed)

            templates/

    no changes added to commit (use "git add" and/or "git commit -a")
    ```

* Now, modify the \_index.html \_file as follows:

  * index.html

  ```
  <!DOCTYPE html>
  <html>
      <head></head>

      <body>
          <h1>This is a Header</h1>
          <p>This is a paragraph</p>
      </body>
  </html>
  ```

Add a file named \_test.html \_to the templates folder

* \_index.html \_file as follows 

```
<!DOCTYPE html>
<html>
    <head></head>

    <body>
        <h1>This is a Header</h1>
        <p>This is a paragraph</p>
        <p>This is a second paragraph</p>
    </body>
</html>
```

* And check git status then we add . create index.html

```
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        templates/

no changes added to commit (use "git add" and/or "git commit -a")
```

* after git add.

```
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   index.html
        new file:   templates/test.html
```

* second commit

```
git commit -m "second commit"
[master 41ca8fe] second commit
 2 files changed, 10 insertions(+)
 create mode 100644 templates/test.html
```

* after second commit's status and log

* ```
  git status
  On branch master
  nothing to commit, working tree clean

  git log --oneline
  41ca8fe (HEAD -> master) second commit
  4526398 Lerarn git first commit

  git log
  commit 41ca8fef0299617cb8b3c6160f01018aecfef488 (HEAD -> master)
  Author: Jay <flamesunrises@gmail.com>
  Date:   Thu Jan 31 13:34:48 2019 +0800

      second commit

  commit 452639872df0d68ccc75532312cb8dcadd183383
  Author: Jay <flamesunrises@gmail.com>
  Date:   Thu Jan 31 13:30:49 2019 +0800

      Lerarn git first commit
  ```
* Now, modify index.html file as follows

  * ```
    <!DOCTYPE html>
    <html>
        <head></head>

        <body>
            <h1>This is a Header</h1>
            <p>This is a paragraph</p>
            <p>This is a second paragraph</p>
        </body>
    </html>
    ```

* repeat add , status , commit and log

* ```
  git status
  On branch master
  Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)

          modified:   index.html

  git commit -m "third commit"
  [master 2f16bed] third commit
   1 file changed, 1 insertion(+)

   git log --oneline
  2f16bed (HEAD -> master) third commit
  41ca8fe second commit
  4526398 Lerarn git first commit
  ```
* reset to second commit

  * git checkput

  * git reset

Resetting the Git repository

* reset to second commit

  * get checkout \(second commit-41ca8fe \)

    * ```
      git checkout 41ca8fe index.html

      git status
      On branch master
      Changes to be committed:
        (use "git reset HEAD <file>..." to unstage)

              modified:   index.html
      ```

* To discard the effect of the previous operation and restore index.html to its state at the end of the third commit

  * ```
    git reset HEAD index.html

    git status
    On branch master
    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git checkout -- <file>..." to discard changes in working directory)

            modified:   index.html
    ```

* Then type the following at the prompt

  * ```
    git checkout -- index.html

    git status
    On branch master
    nothing to commit, working tree clean
    ```



