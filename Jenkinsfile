pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/Cloud-Skylark/Task-Manager-frontend.git'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t devcloudy/task-frontend:latest .'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push devcloudy/task-frontend:latest'
            }
        }

        stage('Deploy') {
            steps {
                sh 'kubectl apply -f k8s/frontend-deployment.yaml'
            }
        }
    }
}