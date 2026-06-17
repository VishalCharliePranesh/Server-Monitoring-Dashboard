# AWS Server Health Monitoring System

## Overview

The AWS Server Health Monitoring System is a cloud-based monitoring solution designed to track the health and performance of Amazon EC2 instances. The project leverages AWS services such as CloudWatch, SNS, CloudFormation, and Infrastructure Composer to provide real-time monitoring, automated alerts, and infrastructure automation.

## Features

* Real-time EC2 server monitoring
* CPU utilization tracking using Amazon CloudWatch
* Automated email notifications using Amazon SNS
* Infrastructure as Code (IaC) using AWS CloudFormation
* Visual architecture design using AWS Infrastructure Composer
* Automated deployment and configuration
* Scalable and cost-effective monitoring solution

## Architecture

EC2 Instance
↓
Amazon CloudWatch
↓
CloudWatch Alarm
↓
Amazon SNS
↓
Email Notification

## AWS Services Used

* Amazon EC2
* Amazon CloudWatch
* Amazon SNS
* AWS CloudFormation
* AWS Infrastructure Composer
* AWS IAM

## Project Workflow

1. Launch an EC2 instance.
2. Configure CloudWatch monitoring for CPU utilization.
3. Create CloudWatch alarms for high CPU usage.
4. Configure SNS topics and email subscriptions.
5. Trigger email alerts when CPU usage exceeds the defined threshold.
6. Manage infrastructure using CloudFormation templates.
7. Visualize architecture using Infrastructure Composer.

## Prerequisites

* AWS Account
* IAM User with appropriate permissions
* Basic knowledge of AWS services
* Email address for SNS notifications

## Deployment Steps

### Step 1: Create an EC2 Instance

* Launch an Amazon EC2 instance.
* Configure security groups and IAM roles.

### Step 2: Configure CloudWatch

* Enable detailed monitoring.
* Create CloudWatch metrics and alarms.

### Step 3: Configure SNS

* Create an SNS Topic.
* Add an email subscription.
* Confirm the subscription from the received email.

### Step 4: Create CloudWatch Alarm

* Set a CPU utilization threshold (e.g., 80%).
* Associate the alarm with the SNS topic.

### Step 5: Deploy Infrastructure

* Use AWS Infrastructure Composer to design the architecture.
* Export the design as a CloudFormation template.
* Deploy the stack using AWS CloudFormation.

## Testing

Generate CPU load on the EC2 instance:

```bash
sudo yum install stress -y
stress --cpu 2 --timeout 300
```

Verify that:

* CloudWatch detects increased CPU usage.
* Alarm state changes to ALARM.
* SNS sends an email notification.

## Sample Alert

Subject: AWS Notification - High CPU Usage

Message:
CPU utilization on the EC2 instance has exceeded the configured threshold. Immediate attention may be required.

## Learning Outcomes

* AWS Monitoring and Observability
* Infrastructure as Code (IaC)
* Cloud Automation
* Event-Driven Architecture
* AWS Security Best Practices
* Cloud Operations and Incident Management

## Future Enhancements

* Memory and Disk Monitoring
* Slack/Teams Notifications
* Grafana Dashboard Integration
* AWS Lambda Auto-Remediation
* Multi-Server Monitoring
* Centralized Logging with CloudWatch Logs
## License

This project is licensed under the MIT License.

Copyright (c) 2026 M.Vishal Charlie Pranesh

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Author
M.Vishal Charlie Pranesh 
Cloud & DevOps Enthusiast | AWS Certified Cloud Practitioner
