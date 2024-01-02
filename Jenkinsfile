pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'your-docker-username/node-app:latest'
        KUBE_NAMESPACE = 'your-kubernetes-namespace'
        KUBE_DEPLOYMENT_NAME = 'node-app-deployment'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-username/your-node-app-repo.git'
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        sh "docker build -t ${DOCKER_IMAGE} ."
                        sh "docker push ${DOCKER_IMAGE}"
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    withKubeConfig([credentialsId: 'your-kubeconfig-credentials', serverUrl: 'your-kubernetes-api-server-url']) {
                        sh "kubectl set image deployment/${KUBE_DEPLOYMENT_NAME} ${KUBE_DEPLOYMENT_NAME}=${DOCKER_IMAGE} --namespace=${KUBE_NAMESPACE}"
                    }
                }
            }
        }

        stage('Apply Kubernetes Manifests') {
            steps {
                script {
                    withKubeConfig([credentialsId: 'your-kubeconfig-credentials', serverUrl: 'your-kubernetes-api-server-url']) {
                        sh "kubectl apply -f deployment.yaml --namespace=${KUBE_NAMESPACE}"
                        sh "kubectl apply -f service.yaml --namespace=${KUBE_NAMESPACE}"
                    }
                }
            }
        }
    }
}
