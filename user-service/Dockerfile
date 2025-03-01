FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Command to run the app
CMD ["node", "index.js"]

# Expose the port the app will run on
EXPOSE 4000
