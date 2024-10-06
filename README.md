# SaaS Microfrontend Project

## Overview

This project demonstrates the implementation of a microfrontend architecture using JavaScript frameworks. It showcases how to build, integrate, and deploy multiple independent frontend applications as part of a larger, cohesive system.

## Key Features / Technologies

- Microfrontend architecture with React and Vue
- Webpack Module Federation for runtime integration
- Independent deployment of microfrontends
- AWS-based hosting and distribution (S3 and CloudFront)
- Automated CI/CD pipeline using GitHub Actions

## Project Structure

The project consists of four microfrontends, each located in the `apps` folder:

1. **Container** (React): The main application shell
2. **Marketing** (React): Handles marketing-related features
3. **Authentication** (React): Manages user authentication
4. **Dashboard** (Vue): Provides user dashboard functionality

## Architecture Principles

1. Zero coupling between child applications
2. Near-zero coupling between container and child applications
3. Scoped CSS to prevent style conflicts
4. Version control agnostic (works with monorepo or separate repos)
5. Flexible versioning of microfrontends in the container app

## Getting Started

1. Clone the repository
2. Navigate to each app in the `apps` folder and run `npm install`
3. Start the development servers for each app using `npm run start`

For detailed instructions, refer to the documentation in each microfrontend's directory.

## Deployment

The project is set up for deployment to AWS:

1. Microfrontends are built and uploaded to Amazon S3
2. Amazon CloudFront is used for content distribution
3. GitHub Actions automate the build and deployment process

Refer to the `.github/workflows` directory for CI/CD configuration details.

## Learning Outcomes

This project serves as a practical example for:

1. Building and integrating microfrontends using JavaScript frameworks
2. Configuring navigation for microfrontends both in isolation and integration.
3. Lazyloading microfrontend apps only when they are actually needed.
4. Implementing independent deployment of microfrontends to AWS
5. Setting up an automated CI/CD pipeline with GitHub Actions

## Contributing

Contributions are welcome! Please read the contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
