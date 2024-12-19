# Base image with Java and Maven
FROM maven:3.6.3-openjdk-11-slim as builder

# Copy the project files to the container
COPY ./ /usr/src/app/

# Set the working directory
WORKDIR /usr/src/app/

# Build the application
RUN mvn clean package -DskipTests

# Use OpenJDK for the runtime
FROM openjdk:11-jre-slim
COPY --from=builder /usr/src/app/target/*.jar /usr/app/app.jar
WORKDIR /usr/app

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "app.jar"]
