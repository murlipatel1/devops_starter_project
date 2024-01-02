# Node.js App

This is a basic Node.js application that demonstrates how to build a Docker image and deploy it in Kubernetes.

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js
- Docker
- Kubernetes
-Jenkins
- Prometheus

## Getting Started

1. Clone this repository:

    ```bash
    git clone https://github.com/murlipatel1/devops_starter_project.git
    ```

2. Install the dependencies:

    ```bash
    cd devops_starter_project
    npm install
    ```

3. Build the Docker image:

    ```bash
    docker build -t nodejs-app-name .
    ```

4. Run the Docker container:

    ```bash
    docker run -p 3000:3000 -d nodejs-app-name
    ```

5. Access the application in your browser at `http://localhost:3000`.

## Jenkinsfile to run a Node.js app using Kubernetes alternative for running locally and creating pipeline

pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // Checkout code from version control system
                checkout scm
                
                // Install dependencies
                sh 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                // Deploy to Kubernetes cluster
                sh 'kubectl apply -f deployment.yaml'
            }
        }
    }
}

## Deploying in Kubernetes

1. Create a Kubernetes deployment:

    ```bash
    kubectl create deployment nodejs-app-name --image=nodejs-app-name
    ```

2. Expose the deployment as a service:

    ```bash
    kubectl expose deployment nodejs-app-name --port=3000
    ```

3. Access the application in your browser using the exposed service.


4. Configure Prometheus to scrape metrics from the application:

    ```yaml
    scrape_configs:
      - job_name: 'your-job-name'
         static_configs:
            - targets: ['your-service-name:8080']
    ```

5. Start Prometheus:

    ```bash
    prometheus --config.file=prometheus.yml
    ```

6. Access the Prometheus UI and view the metrics:

    ```bash
    http://localhost:9090
    ```

# Terraform file structure explanation

1. main.tf: 
This file is the main configuration file for your Terraform project. It defines the infrastructure resources you want to create, such as virtual machines, networks, or storage. It specifies the desired state of your infrastructure.

2. variables.tf: This file is used to declare input variables for your Terraform project. Input variables allow you to parameterize your infrastructure configuration, making it more flexible and reusable. They can be used to customize the behavior of your infrastructure resources.

3. output.tf: This file is used to define the output values that you want to extract from your Terraform configuration. Outputs can be used to retrieve information about the resources created by Terraform, such as IP addresses or resource IDs. They are useful for sharing information between different parts of your infrastructure or with other systems.


## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
