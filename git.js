console.log('Git Fundamentals');
// ----------------------------------------------------------------------------------------------------------------

//                                                 GIT

// ----------------------------------------------------------------------------------------------------------------

// Git is a tool that allows developers to keep track of versions of their code over time. This is
//      useful for both keeping track of your own updates to code, as well as working in groups to
//      let others see how the code has evolved over time, and understand how/why changes are made
//      or revert to earlier versions.

// ----------------------------------------------------------------------------------------------------------------

//      VERSION CONTROL SYSTEM

// The type of program git is is called a version control system, or VCS, which is why you'll see
//      this acronym very often when reading about git.

// ----------------------------------------------------------------------------------------------------------------

//      GIT INIT

// To initialize git, enter "git init" inside a folder. This will create a .git folder, and you can
//      then use git in said folder. Be sure not to put the .git folder in the wrong area, such as
//      your home folder or desktop.

// ----------------------------------------------------------------------------------------------------------------

//      WORK FLOW

// To check where our files are in regards to the work flow, use the "git status" command.
//      Untracked files will be in red text, files that are tracked but not committed will be in 
//      green text, and committed files will no longer show in the working directory.

// 1. "git status" - what files have been modified/added?
// 2. "git diff" - of those files, what has been changed?
// 3. "git add <file_name>" - add file_name to the staging area
// 4. "git commit" - commit the file with a message
// 5. "git log" (optional) - see a log of all the commits
// 6. "git diff" (optional) - see the specific changes from the previous version to the new one

// --------------------------------------------------------------

// WORKING DIRECTORY

// Files that are being worked on but haven't been saved to git are here. As they are edited, git
//      can see the edits, but the changes aren't recorded. To move a file from the working
//      directory to the staging area, use the "git add" command.

// --------------------------------------------------------------

//  STAGING AREA

// Files that are completed and ready to be commited to a final version are placed here via the
//      "git add" command. If the file needs to be changed again, it will have to be added to the
//      staging area again, or the changes won't be saved. When the file is absolutely finished 
//      and no more changes will be made, we use the "git commit" command. To summarize the changes,
//      we add a message with the -m flag and type a summary of the changes that were made in that
//      commit.

// --------------------------------------------------------------

// REPOSITORY

// A completed version of your finals will be composited into a repository. These files are 
//      considered complete. And any changes made will be considered a new version rather than a
//      change to the current version.

// ----------------------------------------------------------------------------------------------------------------

//      .GITCONFIG SETTINGS

// There's a file called .gitconfig, usually in your home directory, where your git settings are
//      stored.

// 1. Add author name and email:
//      git config --global user.name "NAME"
//      git config --global user.email "EMAIL"

// ----------------------------------------------------------------------------------------------------------------

//      BRANCHING AND MERGING

// ----------------------------------------------------------------------------------------------------------------

// BRANCHING

// --------------------------------------------------------------

// So far, each of the git version saved have been on the same "branch", which usually isn't optimal. When
//      working with a team or trying to do experimental work with specific features, you want to be able to
//      do your work without messing up every other aspect of the code. You can do this by creating a branch
//      off the code, dedicated to whatever individual coder or purpose. You can see all the branches in your
//      local code with the "git branch" command, and see all the remote branches as well with the -a flag.

// To create a new branch, use the "git checkout" command with the -b flag, followed by the name you want to 
//      give your new branch. The placement of your branch is important because all code on ther current 
//      branch will be included in the new one. 

// To move between branches, simply remove the -b flag and enter "git checkout BRANCH_NAME". Note that if you
//      try to leave a branch with unsaved work, you'll get an error message, so the easiest way around this
//      is to commit your work to the current branch before moving on to the next.

// ----------------------------------------------------------------------------------------------------------------

// MERGING

// If the changes you make on a different branch end up being desirable, the next step is to merge that 
//      branch into the master branch. Or, if you want two experimental branches together to see how the code
//      works together, you can merge those. Either way, isolated branches typically aren't meant to stay
//      isolated, so branches will often be merged into other branches. The command to put two branches
//      together is "git merge" followed by the branch you want to add, while on the branch you want to add
//      the other branch to. For example, there's an 'html' branch where paragraph elements are added to the
//      html files. If we want to add those elements to the master branch, we go to the master branch and
//      enter "git merge html".

// Be sure that all your changes are committed or otherwise accounted for before you merge.

// 1. Fast-forward Merge:
//      the basic merge, takes a set of commits from one branch and adds them to the list of the other 
//      branch's commits chronologically.

// 2. Recursive Merge:
//      if the commits aren't clear and chronological, a recursive merge is run instead

// There are several possible conflicts with merging, such as when a file is being edited in two separate
//      branches, and both branches are merged into the master branch. For instance, we created a folder 
//      called "git_conflicts" and added a text file called "second.txt". We then made a new branch called
//      "new_branch" and created a new version of "second.txt" with different text inside. When we try to
//      merge the branches, we get an error saying the branches can't automatically merge until the conflicts
//      are resolved. If you open the second.txt file, it will say this:

//                                          <<<<<<< HEAD
//                                          something_else
//                                          =======
//                                          second_text
//                                          >>>>>>> new_branch

//      This displays the text we have from the branch we're trying to merge ("something_else" from 
//      new_branch) and the existing text in the branch we're trying to merge into ("second_text" from
//      master). In order to resolve the issue, delete all the lines except for the content you want to
//      keep. In this case, we'll keep "something_else", so delete the arrow and equal lines as well as 
//      "second_text". Then save the file and return to the terminal.

// Once a merge error occurs, it becomes the priority for the terminal, and you can't leave your branch until
//      the issue is resolved. So that you've manually resolved it, commit in the terminal again.

// --------------------------------------------------------------

// By default, a new git commit is saved under the "main" (or "master")* branch, but branches can be given
//      their own names relative to their purpose. However, when these branches are completed, we can
//      integrate them back in by merging them into the main branch.

// Once you've merged the branch, or if you decide not to merge it after all, you can delete it with the
//      -d branch, with "git branch -d BRANCH-NAME". If the work on the branch isn't committed anywhere else,
//      you'll get an error message, and the work around is to use -D instead of -d. You also can't delete
//      the branch you're currently on, so you need to move to a new branch before you delete it.

//                                                         *"master" was previously used in GitHub until 2020,
//                                                              when it was changed to "main". You'll still 
//                                                              use "master" with gits created before 2020
// ----------------------------------------------------------------------------------------------------------------

//      HOW BRANCHES WORK

// Make sure the html webpage for these notes are open and click the header. Nothing should happen. This is
//      because on the master branch, there isn't any functionality set to the header. Now enter "git branch"
//      into the terminal, and you'll see 'master' and 'add-js'. The add-js branch is an experimental branch
//      with JavaScript functions added to the webpage. If you enter "git checkout add-js", it will take you
//      to this branch, and clicking on the header will invert the colors. To go back to the master branch,
//      enter "git checkout master".

// ----------------------------------------------------------------------------------------------------------------

//                                                  GITHUB

// ----------------------------------------------------------------------------------------------------------------

// GitHub is a web-based git repository . It's useful because it allows you to save different code versions
//      in a way that can't be lost if your personal computer is lost/damaged, and in way that allows other
//      programmers collaborate. While GitHub uses git, it's also very different from local, self-contained
//      git.

// You can create a new repository with the url:

//              https://www.github.com/new

//      Here you can add a name for the repository, as well as change certain settings like readMe and 
//      making the repository public or private. Once your repository is created you have the option to 
//      start creating the content within the website itself, push a repository on your computer to the 
//      website, or take it from an existing online repository. GitHub will give you a recommended set of
//      parameters, as well as give you text to copy for each of the above options.

// For example, these notes are saved as a repository called "gitNotes", giving the url:

//              https://github.com/MarkBJohns/gitNotes

// The repository is empty as it's created, so if we wanted to fill it from scratch, we would enter the 
//      text given to us on the website into our terminal:

//              echo "# gitNotes" >> README.md
//              git init
//              git add README.md
//              git commit -m "first commit"
//              git branch -M main
//              git remote add origin https://github.com/MarkBJohns/gitNotes.git
//              git push -u origin main

// If we want to take something existing already, such as these notes, we're given:

//              git remote add origin https://github.com/MarkBJohns/gitNotes.git
//              git branch -M main
//              git push -u origin main

// ----------------------------------------------------------------------------------------------------------------

//      REMOTE

// Once the repository is created, rather than constantly going back to the webpage, we can set a "remote",
//      or a nickname for the website we're updating. The default nickname is "origin", but you can make it
//      whatever you want it to be. So the line "git remote add origin www.example.com" will create a remote
//      called "origin" that refers to www.example.com.

// To get your git code from your personal computer to GitHub, you use the "git push" command. When you use
//      push, you also need to specify which remote you want to push to, as well as the branch. The first
//      it will look something like "git push origin master". A shortcut you can use is to add the flag -u to
//      the push command the first time you push to the master branch. This makes it so you don't have to
//      type out the entire command every time and can just enter "git push".

// ----------------------------------------------------------------------------------------------------------------

//      CLONING

// Rather than pushing your own repository to somewhere else, you might want to take a repository that 
//      already exists and save a copy for yourself. You can do this using the 'clone' command. This is
//      useful for working on an open-source project, or if a personal computer is damaged and you want to 
//      pull your old code from GitHub to your new computer. You do this by finding the repository link, 
//      and entering "git clone https://www.example.com".