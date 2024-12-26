# Use the official Node.js 20 image as base
FROM node:20

# Copy package.json and package-lock.json to the working directory (This is done separately to avoid copying node_modules if it already exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server code to the working directory
COPY . .

# Expose the port the server runs on
EXPOSE 80

# Command to run the server
CMD ["node", "index.js"]