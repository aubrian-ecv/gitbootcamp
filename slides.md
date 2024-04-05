## <span style="color: #638889">How to initialise a new repository</span>

- Initialize a new repository.
```sh
git init
```

---

## How to review changes

- Check the status of the repository using 
```sh
git status
```
- View the changes made to files using
```sh
git diff
```
- Review the commit history 
```sh
git log
```

---

## How to commit changes

- Add files to the repository. 
```sh
git add <file> | git add .
```
- Commit the changes using 
```sh
git commit -m "Initial commit"
```

---

## Create a new branch

- Create a new branch using
```sh
git checkout -b <branch_name>
```

---

## Work on a branch

- Make your changes
- Commit your changes on the branch
- Push your commit

---

## Merge branch on main

- Checkout to main
```sh
git checkout main
```
- Merge your branch on main
```sh
git merge <branch_name>
```

---

## Delete branch

- Delete your branch
```sh
git branch -d <branch_name>
```

---

## Pushing changes to remote

- Push your changes using
```sh
git push origin <branch_name>
```

---

## Pulling changes from remote
- Pull your changes using
```sh
git pull origin <branch_name>
```

---

## Text 

This is a text

---

## List

- Non sorted list

```
- List item 1
+ List item 2
* List item 3
```
<br />

- Sorted List
```
1. List item 1
2. List item 2
```

--- 

## Images

- Remote url

![Remote github logo.](https://logo.clearbit.com/github.com)
```sh
![Remote github logo.](https://logo.clearbit.com/github.com)
```

---

## Images

- Local url, images must be in public directory

![Local github logo.](github.png)
```sh
![Local github logo.](github.png)
```

---

## Headers

- # Heading 1
```md
# Heading 1
```
- #### Heading 4
```md
#### Heading 4
```

---

## Quotes

> This is a quote

```
> This is a quote
```

---

## Code

- Wrap your code with ``` to format in code block 

```
This is a code block
```

---

## Extras

- Write in **bold**
```md
**Hello World!**
```

- Write in _italic_
```md
__Hello World!__
```

- ~~Linethrough~~ your text
```md
~~Hello World!~~
```

---

## How to automate issue closing

- Use keyword "close" with issue id in your commit message

Example :
```
gcmsg "close #2"
```

---

## How to apply commit

- Use the cherry-pick command with the commit SHA1

```
git cherry-pick YOURSHA1
```

---

## How to use git fragments

- To create a fragment use 
```
git stash
```
- To retrieve a fragment after your work use `
```
git stash pop
```

---

## How to fix the last commit message

- To fix the last commit message use
```
git commit --amend
```
or
```
git commit --amend -m "Your new message"
```

---

## How to rebase

- To rebase use
```
git rebase -i <earlier SHA>
```