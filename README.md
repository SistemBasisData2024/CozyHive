# CozyHive
## Project Description
CozyHive is a web application designed to simplify the process of finding the perfect boarding house around Universitas Indonesia (UI). Tailored to the preferences of students, the website offers a user-friendly platform where users can explore various boarding house options, categorized by type: women-only, men-only, or mixed.

Upon logging in with their name, email, and phone number, users gain access to a range of features. They can browse through a diverse selection of registered boarding houses, presented randomly at first glance. However, advanced filtering options allow users to refine their search based on specific criteria such as name, area, and price.

Additionally, users can benefit from reviews and ratings contributed by fellow students, enabling them to make informed decisions when selecting a boarding house. To streamline the booking process, CozyHive enables users to book their chosen boarding house directly through the website, making finding an ideal home away from home just a few clicks away.

## Features
- User authentication: Allows users to register and log in using their name, email, and phone number.
- Boarding house search: Provides a search functionality with advanced filters for users to find boarding houses based on criteria like type, area, and price.
- Randomized display: Initially presents boarding house options in a random order, ensuring equal visibility for all listings.
- Reviews and ratings: Enables users to view and contribute reviews and ratings for boarding houses, helping others make informed decisions.
- Direct booking: Allows users to book their chosen boarding house directly through the website, simplifying the booking process.

## Tools Used
CozyHive leverages the following technologies:
- Front-end: React, Vind, Tailwind
- Back-end: PostgreSQL, NodeJS, Express
- Database: SQL (Structured Query Language)

The website utilizes a PostgreSQL database to manage user accounts, boarding house listings, reviews, and other relevant information.

## Setup Instructions
To set up CozyHive on your local machine, follow these steps:
1. Clone the project repository from GitHub: git clone <link>
2. Set up a local web server environment for Node.js.
3. Install the necessary dependencies by running npm install in the project's root directory.
4. Create a PostgreSQL database for the project.
5. Update the database connection settings in the configuration file (`config.js`) to match your local environment.
6. Run the database migration script to set up the required tables and data: `npm run migrate`.
7. Start the web server by running `npm start`.
8. Access the website in your browser by navigating to `http://localhost:9000`.

## References
GitHub Repository: [https://github.com/](https://github.com/)
