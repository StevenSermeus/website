---
author: Sermeus Steven
pubDatetime: 2024-04-15T10:00:00.400Z
title: How I handle my passwords
slug: how-i-handle-my-passwords
featured: true
draft: false
tags:
  - Security
  - Passwords
  - GPG
  - Encryption
  - Password Manager
  - pass
  - YubiKey
description: Passwords are a pain to manage. Learn how I handle my passwords to keep them secure and easy to access.
---

# Introduction

Passwords are a pain to manage. You need to remember them, keep them secure, and make sure they are unique for each account. In this article, I will explain how I handle my passwords to keep them secure and easy to access. And for the developers among us, I will show you how to use a password manager from the command line.

# Password Manager

There are many password managers available, like 1Password, LastPass, and Bitwarden. Some of them are self-hostable, like Bitwarden, and others are not. I prefer to use a self-hostable password manager because I want to have full control over my passwords. The solution I use is called [pass](https://www.passwordstore.org/). Pass uses GPG to encrypt your passwords and stores them in a simple directory structure. You can use Git to sync your passwords between devices.

# Pass

Disclaimer: I am not a security expert. The following is how I use pass to manage my passwords. If you have any concerns about the security of this setup, please let me know. This setup will require you to have a GPG key pair and manage it properly.

## Installation

You can install pass with the package manager of your operating system. For example, on Ubuntu, you can install pass with the following command:

```bash
sudo apt install pass
```

## Initialize pass

After you have installed pass, you can create a new GPG key pair. You can use the following command to create a new GPG key pair:

```bash
gpg --gen-key
```

Be sure to keep this passphrase secure, it'will be used to manage your keys and passwords.

After your ran the command before, a key ID will be printed on the screen. If you already cleared the screen, you can list your keys with the following command `gpg -K`. You will see a list of keys, and the key ID will be the last 8 characters of the key. You will need this key ID to initialize pass. By default, your GPG key will have an expiration date. You can set it to never expire with the following command:

```bash
gpg --edit-key <key ID>
# In the GPG prompt, type `expire` and set the expiration date to 0.
# Save the changes with the `save` command.
```

Now you can initialize pass with the following command:

```bash
pass init <key ID>
```

## Managing passwords

### Add a password

You can add an existing password to pass with the following command:

```bash
pass insert <password name>
```

### Generate a password

You can generate a password that is secure and use special characters with the following command:

```bash
pass generate <password name>
```

### Copy a password to the clipboard

You can copy a password to the clipboard with the following command:

```bash
pass -c <password name>
```

### Remove a password

You can remove a password with the following command:

```bash
pass rm <password name>
```

### List passwords

You can list all your passwords with the following command:

```bash
pass
```

You can perform a search with the following command:

```bash
pass grep <search term>
```

## Using pass for environments variables

You can use pass to store environment variables such as API keys and secrets that can be used in your scripts. One way to do this is to use aliases in your shell configuration file. This could be useful if you use aws-cli or Ansible,...

## Using pass with Git

You can use Git to sync your passwords between devices. You can initialize a Git repository in the pass directory with the following command:

```bash
pass git remote add origin <git repository>
```

The pass command provides a `git` command to interact with the Git repository. You can use all your git knowledge to manage your passwords.

## Usefull extensions

### Browser extension

You can use the [pass browser extension](https://github.com/browserpass/browserpass-extension) to fill in your passwords in the browser. The extension is available for Firefox and Chrome. A setup is required to use the extension but is well documented on the GitHub page.

### passforios && Android-Password-Store

You can use the [passforios](https://mssun.github.io/passforios/) app on iOS and the [Android-Password-Store](https://github.com/android-password-store/Android-Password-Store#readme) app on Android to access your passwords on your mobile device. You will need to sync and transfer your GPG key to your mobile device to use these apps.

# A note on YubiKey

You can use a YubiKey to store your GPG key and use it to decrypt your passwords. This way, you can keep your GPG key secure and use it only when you need it. If you are interested in using a YubiKey with pass, you can find more information on the [drduh/YubiKey-Guide](https://github.com/drduh/YubiKey-Guide) GitHub page. I followed this guide to set up my YubiKey with pass, and it works great. I alos use it to sign my commits on GitHub and GitLab.

# Conclusion

I hope this article has given you some insights into how I handle my passwords. I have been using pass for a while now, and I am happy with it. It is simple, secure, and easy to use. If you have any questions or suggestions, please let me know. I am always looking for ways to improve my setup.
