---
layout: post
title: 常用Linux Commands
author: Shao Zelian
date: 2025-10-05
parent: 💻 Technologies
tags: [tools]
excerpt: 常用Linux Commands（持续更新）
---

[54 Essential Linux Commands ![youbube]({{ '/assets/images/logos/youtube.webp' | relative_url }}){: width="16px"}](https://youtu.be/F7rMWdB1s08?si=-sFvtPMw3j10Aptj)

- pwd: Show current working directory.
- ls: list all files under the current working directly.
  - ls -l: show more details.
  - ls - lh: with more readable file size, like 3k, 20K, etc.
  - ls -a: show all files including hidden ones.
  - ls --color=auto: highlight folders using colors automatically.
- clear: clear up current screen. Shortcut: Ctrl + l.
- mkdir: create new directory.
- cd: change current working directory.
  - cd {directory name}
  - cd {part of directory} and press tab: automatically match if there is.
  - cd -: back to previous directory.
  - cd / cd ~: change to home directory.
- alias: make alias. For example,
  - alias ls="ls --color=auto"
  - alas cls="clear"
- which: show the path of executable path, for example, which pwd, which cd, etc.
- whereis: show exectuable file, for example, whereis mkdir, whereis clear, etc.
- man: get help on commands, for example, man clear, man ls, etc.
- whatis: give quick summary about command. For example, whatis cd, whatis mkdir, etc.
- touch: to create a new file.
- echo: print messages or strings. For exmple,
  - echo "hello world".
  - echo "hello world" > file.txt: the string will replace content in file.txt.
  - echo "hello world" >> file.txt: the string will be appended to file.txt.
- cat: view content of file.
- less: view content of file with pager. Continuous operation keys,
  - j: scroll down
  - k: scroll up
  - f: move down a page
  - b: move up a page
  - /: search
  - q: quit
- nano: edit a file.
- vim: edit filr using vim editor.
- cp: copy file.
- mv: move or rename file.
- rm: remove file.
- rmdir: remove empty directory.
- rm -r {dir}: to remove non-empty directory.
- rm -i: remove after confirmation.
- cmp: compare two files.
- diff: show difference abour the two files.
- whoami: show username.
- adduser: add new user.
- sudo: execute command using administrator, password is asked to provide.
- su: switch user, password is to be provided.
- exit: logout user.
- userdel: remove user. For example, sudo userdel -r: delete user and everything of the user.
- passwd: change password.
- uname: show system name.
- uname -a: show details of system.
- apt
  - sudo apt update: list all upgradable packages.
  - sudo apt upgrade: upgrade packages.
  - sudo apt install {package name}
- wget: download file from internet, wget {url}
- grep: search. For example, ls \| grep xxx.
- chmod: change file permission
  - r: read
  - w: write
  - x: execution
- ln
- curl
- jq
- awk
- sed
- zip
- unzip
- find
- ip
- ping
- free
- df
- ps
- kill
- pkill
- top
- htop
- systemctl
- history
- Outro