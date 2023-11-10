console.log('Git Fundamentals');
// ----------------------------------------------------------------------------------------------------------------

//      GIT

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