# Microfrontend Learning Project

## Overview

This project served as a hands-on learning exercise to explore and understand the concepts of microfrontend architecture using JavaScript frameworks. It demonstrates how to build, integrate, and deploy multiple independent frontend applications as part of a larger, cohesive system.

**Note:** This project focuses exclusively on frontend development and architecture. No real APIs are integrated, as the primary goal is to learn about microfrontend concepts and implementation.

## Learning Objectives

Through this project, I gained practical experience with:

1. Implementing microfrontend architecture using React and Vue
2. Utilizing Webpack Module Federation for runtime integration
3. Configuring independent deployment of microfrontends
4. Setting up AWS-based hosting and distribution (S3 and CloudFront)
5. Creating an automated CI/CD pipeline using GitHub Actions

## Project Structure

The project consists of four microfrontends, each located in the `apps` folder:

1. **Container** (React): The main application shell
2. **Marketing** (React): Handles marketing-related features
3. **Authentication** (React): Manages user authentication
4. **Dashboard** (Vue): Provides user dashboard functionality

## Key Concepts Explored

1. Zero coupling between child applications
2. Near-zero coupling between container and child applications
3. Scoped CSS to prevent style conflicts
4. Version control flexibility (works with monorepo or separate repos)
5. Flexible versioning of microfrontends in the container app

## Getting Started

1. Clone the repository
2. Navigate to each app in the `apps` folder and run `npm install`
3. Start the development servers for each app using `npm run start`

For detailed instructions, refer to the documentation in each microfrontend's directory.

## Deployment

As part of the learning experience, this project is set up for deployment to AWS:

1. Microfrontends are built and uploaded to Amazon S3
2. Amazon CloudFront is used for content distribution
3. GitHub Actions automate the build and deployment process

Refer to the `.github/workflows` directory for CI/CD configuration details.

## What I Learned

By working through this project, I gained practical experience in:

1. Building and integrating microfrontends using JavaScript frameworks
2. Configuring navigation for microfrontends both in isolation and integration
3. Implementing lazy loading of microfrontend apps
4. Setting up independent deployment of microfrontends to AWS
5. Creating an automated CI/CD pipeline with GitHub Actions

## Next Steps

After completing this learning project, I plan to:

1. Extend the project with additional microfrontends
2. Explore different styling solutions for microfrontends
3. Implement more advanced routing scenarios
4. Investigate state management across microfrontends
5. Optimize performance and load times

## Resources

- [Micro-Frontends](https://micro-frontends.org/)
- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [AWS Documentation](https://docs.aws.amazon.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
