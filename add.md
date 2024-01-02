# Terraform Basic Documentation with AWS

1. main.tf: 
This file is the main configuration file for your Terraform project. It defines the infrastructure resources you want to create, such as virtual machines, networks, or storage. It specifies the desired state of your infrastructure.

2. variables.tf: This file is used to declare input variables for your Terraform project. Input variables allow you to parameterize your infrastructure configuration, making it more flexible and reusable. They can be used to customize the behavior of your infrastructure resources.

3. output.tf: This file is used to define the output values that you want to extract from your Terraform configuration. Outputs can be used to retrieve information about the resources created by Terraform, such as IP addresses or resource IDs. They are useful for sharing information between different parts of your infrastructure or with other systems.


## main.tf

## Define the provider
provider "aws" {
  access_key = "YOUR_ACCESS_KEY"
  secret_key = "YOUR_SECRET_KEY"
  region     = "us-west-2"
}

## Create an EC2 instance
resource "aws_instance" "example" {
  ami           = "ami-0c94855ba95c71c99"
  instance_type = "t2.micro"
  key_name      = "my-key-pair"
  subnet_id     = "subnet-0123456789abcdef0"
}

## Create a security group
resource "aws_security_group" "example" {
  name        = "example"
  description = "Allow inbound traffic on port 80 and 22"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}


## variables.tf

## Define variables for access key and secret key
variable "access_key" {
    description = "AWS access key"
    type        = string
}

variable "secret_key" {
    description = "AWS secret key"
    type        = string
}

## Define variable for instance type
variable "instance_type" {
    description = "EC2 instance type"
    type        = string
    default     = "t2.micro"
}

## Define variable for subnet ID
variable "subnet_id" {
    description = "Subnet ID"
    type        = string
}

[]: # FILEPATH: /D:/0000 devops project  tutorial videos/project1/terraform/output.tf

## output.tf

## Output the instance ID
output "instance_id" {
    description = "EC2 instance ID"
    value       = aws_instance.example.id
}

## Output the security group ID
output "security_group_id" {
    description = "Security group ID"
    value       = aws_security_group.example.id
}
