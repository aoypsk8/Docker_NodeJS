# Base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app code
COPY . .

# If using .env, install dotenv package and load it in your app

# Expose the backend port
EXPOSE 5001

# Run the server
CMD ["npm", "run", "dev"]


