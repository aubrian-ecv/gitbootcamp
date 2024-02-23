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