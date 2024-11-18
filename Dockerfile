# Step 1: Use an official Node.js image from Docker Hub
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy the package.json (no package-lock.json)
COPY package.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the entire application to the working directory inside the container
COPY . .

# Step 6: Expose the port the app will run on
EXPOSE 3000

# Step 7: Run the app
CMD ["node", "app.js"]