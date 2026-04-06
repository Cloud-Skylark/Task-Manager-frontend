pipeline {
    agent { label 'xiya' }

    environment {
        IMAGE = "devcloudy/task-frontend:latest"
        NAMESPACE = "task-manager"
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
                sh 'kubectl apply -f k8s/namespace.yml'

                sh 'kubectl delete deployment frontend -n $NAMESPACE || true'
                sh 'kubectl delete svc frontend-service -n $NAMESPACE || true'

                sh 'kubectl apply -f k8s/frontend-deployment.yml'
                sh 'kubectl apply -f k8s/frontend-service.yml'

                sh 'kubectl rollout status deployment/frontend -n $NAMESPACE'
            }
        }
    }
}