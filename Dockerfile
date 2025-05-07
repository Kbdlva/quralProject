# Use Node.js for building the application
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies using standard npm install with verbose output
# Removed the --silent flag that was causing errors
RUN npm install

# Copy the entire project including public folder and src
COPY . .

# Build the application with full output for debugging
RUN npm run build

# Use Nginx for serving the application
FROM nginx:alpine

# Copy custom nginx config for React routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
