# SaaS Microfrontend

### Aim:

This repo aims to build knowledge and skill on how to create microfrontends using JavaScript frameworks, and integrate them together.

### Learning Outcomes:

1. Learn how to build microfrontends using JS frameworks and integrate them together
2. Learn how to deploy microfrontends independently to a container in Amazon S3 (AWS) and host them on a domain in Amazon CloudFront
3. Learn how to use GitHub Actions to build and deploy the microfrontends

### Requirements:

The following listed requirements heavily influenced the techniques used in the architectural decisions of the application.

1. Zero coupling between child apps
2. Near-Zero coupling between container and child apps
3. Scoped CSS: CSS from one project should not affect CSS from another project
4. Version Control (Monorepo vs separate) shouldn't have any impact on the overall project.
5. Container app should be free to decide whether to use the most up-to-date or a specific version of each microfrontend.

### Technologies used:

1. Microfrontends
2. React
3. Vue
4. Webpack
5. Module Federation
6. Amazon S3
7. Amazon CloudFront
8. GitHub Actions (CI/CD)

### Microfrontend Structure

Each microfrontend is a self-contained application that is built and run independently. They are all located in the `apps` folder.

The microfrontends are:

1. Container: React Microfrontend
2. Marketing: React Microfrontend
3. Authentication: React Microfrontend
4. Dashboard: Vue Microfrontend
