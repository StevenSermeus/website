---
author: Sermeus Steven
pubDatetime: 2024-04-14T16:49:47.400Z
modDatetime: 2024-04-14T17:45:47.400Z
title: How to sign commits with GPG key
slug: signing-commits
featured: true
draft: false
tags:
  - Git
  - GPG
  - Security
description: Learn how to sign your commits with a GPG key to prove that you are the author of the commit.
---

# Why sign commits?

Signing commits with a GPG key is a way to prove that you are the author of the commit. It is a way to ensure that the code you are committing is coming from you and not someone else. This is especially important when you are working on a project with multiple contributors. All the commands will be for linux and mac users. If you are using windows, bad luck, you will have to figure it out yourself.

**Note that you will have to manage and secure your GPG key properly to ensure that no one else can use it to sign commits on your behalf.**

# Prerequisites

Before you can sign your commits with a GPG key, you need to have a GPG key pair. For that you need to have GPG installed on your system. [Here](https://gnupg.org/download/) you can find the installation instructions for your operating system.

After you have installed GPG, you can create a new temporary GPG directory.

```bash
GNUPGHOME=$(mktemp -d -t gnupg-$(date +%Y-%m-%d)-XXXXXXXXXX)
cd $GNUPGHOME
```

# Generate a GPG key pair

The identity information you provide when generating the GPG key pair should match the information you use for your git commits. (name and email)

```bash
IDENTITY="Your Name <yourname@email.com>"
```

You also need to provide a passphrase to protect your private key. You can generate a secure passphrase with the following command or use your own passphrase.

```bash
CERTIFY_PASS=$(LC_ALL=C tr -dc 'A-Z1-9' < /dev/urandom | \
  tr -d "1IOS5U" | fold -w 30 | sed "-es/./ /"{1..26..5} | \
  cut -c2- | tr " " "-" | head -1) ; echo "$CERTIFY_PASS"
```

Now you can generate the GPG key pair. We will use RSA 4096 as the encryption algorithm and set the key to never expire. If you are concerned about the security of your key, you can choose a different encryption algorithm or set an expiration date for the key.

```bash
gpg --batch --passphrase "$CERTIFY_PASS" \
    --quick-generate-key "$IDENTITY" rsa4096 cert never
```

You can list the keys in your keyring to verify that the key pair was created successfully.

```bash
gpg -K
```

It's also possible to create subkeys for signing and encryption. This is a more secure way to manage your GPG key pair. You can find more information about subkeys [here](https://wiki.debian.org/Subkeys).

# Configure Git to use the GPG key

You need to configure Git to use the GPG key to sign your commits. You can do this by setting the `user.signingkey` configuration option in your Git configuration.

```bash
KEYID=$(gpg -k --with-colons "$IDENTITY" | awk -F: '/^pub:/ { print $5; exit }')
git config --global user.signingkey $KEYID
```

Now that you have configured Git to use the GPG key, you need to add the GPG key to your [GitHub account](https://github.com/settings/keys) and/or [GitLab account](https://gitlab.com/-/profile/gpg_keys). You can export the public key with the following command. You need to copy the output and paste it into the GPG key field on your GitHub or GitLab account.

```bash
gpg --armor --export $KEYID
```

From now on, to sign your commits, you can use the `-S` flag with the `git commit` command.

```bash
git commit -S -m "Your commit message"
```

Success! 🚀
