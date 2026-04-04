pipeline {
    agent { label 'xiya' }

    environment {
        IMAGE = "devcloudy/task-frontend:latest"
    }

    stages {

        stage('Clone') {
            steps {
                git url: 'https://github.com/Cloud-Skylark/Task-Manager-frontend.git', branch: 'main'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t $IMAGE .'
            }
        }

        stage('Docker Login & Push') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    docker push $IMAGE
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                
                sh 'kubectl create ns task-manager-aplication'

                sh 'kubectl apply -f k8s/frontend-deployment.yaml'
            }
        }
    }
}
