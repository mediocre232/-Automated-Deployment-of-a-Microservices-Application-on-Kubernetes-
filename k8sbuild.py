#This script automates Building and Pushing Docker Images and deploying with Kubernetes cluster

import os

import subprocess

def run_command(command):

try:

     subprocess.run(command, check=True)

except subprocess.CalledProcessError as e:

     print(f"An error occurred: {e}")

def build_and_push_docker_images():

services = ['frontend', 'backend']

for service in services:

     # Build Docker image

     run_command(['docker', 'build', '-t', f'mediocre232/{service}:latest', f'./{service}'])

     # Push to registry

     run_command(['docker', 'push', f'mediocre232/{service}:latest'])

def deploy_to_kubernetes():

# Assuming you have similar k8s deployment files for both services

k8s_manifests = ['frontend/frontend-deployment.yaml', 'backend/backend-deployment.yaml']

for manifest in k8s_manifests:

     # Apply Kubernetes manifests

     run_command(['kubectl', 'apply', '-f', manifest])

def main():

build_and_push_docker_images()

deploy_to_kubernetes()

if __name__ == "__main__":

main()


