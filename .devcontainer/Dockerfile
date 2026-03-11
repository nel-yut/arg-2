FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bookworm

# Generate the Japanese UTF-8 locale before exporting it.
RUN apt-get update \
  && apt-get install -y --no-install-recommends locales \
  && sed -i 's/^# *ja_JP.UTF-8 UTF-8/ja_JP.UTF-8 UTF-8/' /etc/locale.gen \
  && locale-gen ja_JP.UTF-8 \
  && update-locale LANG=ja_JP.UTF-8 LC_ALL=ja_JP.UTF-8 \
  && rm -rf /var/lib/apt/lists/*

# Ensure consistent locale for Japanese content
ENV LANG=ja_JP.UTF-8
ENV LC_ALL=ja_JP.UTF-8
