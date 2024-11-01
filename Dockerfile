# Use the official Node 18 image as the base
FROM node:18

# Install necessary dependencies for Playwright
RUN apt-get update && \
    apt-get install -y libnss3 libxss1 libasound2 libatk-bridge2.0-0 libgtk-3-0 libgbm-dev

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Playwright and its dependencies
RUN npx playwright install --with-deps

# Copy the rest of the application code
COPY . .

# Set the environment variable to run Playwright in a non-headless mode (optional)
ENV PLAYWRIGHT_HEADLESS=1