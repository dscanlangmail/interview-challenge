# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email lyz@feedr.co.

Good luck!

# Quick Start

Fork the repository, clone it to your local system, then:

## Install dependencies

yarn (or npm install)

## Start development server

yarn dev (or npm run dev)

## Run tests

yarn test (or npm run test)

## Notes from Development

This application has been created with a simple application state to hold the list of menu items that have been selected. The reasoning for this is that there is shared data between the Summary and the Preview components.

The entire list of menu items is only needed by the Menu on the left hand sidebar. With this in mind I have kept the list of items in local state of that component, and made use of useEffect to make the request to the api. All of the components created are functional components and so local state is using useState and side effects are handled with useEffect.

A separate API has been created to perform the fetch and transformation of the data. The idea here is that I can then mock it easily for testing and also this keeps the Menu component cleaner.

I have attempted to reuse the MenuItem component between the Menu and the Preview as there is little difference in the two areas. This did add a small amount of complexity to show/hide the button which is handled by a single prop (removeable).

You will notice that I have not styled the components and kept the original html as I want to demonstrate react knowledge and with the time constraint did not feel coping the css into a styled-component was a great demonstration of skill.

I have also made use of useDispatch and useSeletor which removes the need for connect HOC and makes the code cleaner. As these can be used when they are required, I have had to use minimal component props.
