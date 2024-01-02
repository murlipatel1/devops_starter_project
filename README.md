# Node.js App

This is a basic Node.js application that demonstrates how to build a Docker image and deploy it in Kubernetes.

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js
- Docker
- Kubernetes

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


## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
