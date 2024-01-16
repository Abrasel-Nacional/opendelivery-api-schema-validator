<!-- PROJECT SHIELDS -->
<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->
<!-- [![Issues][issues-shield]][issues-url] -->
<!-- [![MIT License][license-shield]][license-url] -->
<!-- [![LinkedIn][linkedin-shield]][linkedin-url] -->



<!-- PROJECT LOGO -->
<br />
<div align="center">

  <a href="https://www.opendelivery.com.br/">
    <img src="https://user-images.githubusercontent.com/129890133/231524311-e4b8070d-ba66-42f8-bf1c-5607b9df9850.png" alt="Logo">
  </a>
  <h3 align="center">Open Delivery Schema Validator</h3>

  <p align="center">
    A tool to help you be fully compliant with the <a href="https://abrasel-nacional.github.io/docs/">Open Delivery</a> standard.
    <br />
    <a href="https://abrasel-nacional.github.io/opendelivery-api-schema-validator/"><strong>Try it out!»</strong></a>
    <br />
    <br />
    <a href="https://github.com/Abrasel-Nacional/opendelivery-api-schema-validator/issues">Report Bug</a>
    ·
    <a href="https://github.com/Abrasel-Nacional/opendelivery-api-schema-validator/issues">Request Feature</a>
  </p>

_This is a fork of https://github.com/ProgrammersIT/opendelivery-api-schema-validator which is deprecated_.
</div>

---

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://abrasel-nacional.github.io/opendelivery-api-schema-validator/)

**Open Delivery Schema Validator** is a tool that was created to help developers who are creating or adapting their system's APIs to the Open Delivery standard. 

With this tool it is possible to validate that a JSON is following the Open Delivery schema routes according to the project's documentation.

Currently the tool can validate:

- Required fields
- Field types
- Field formats (such as date-time)
- Enumerators

Available routes:

- GET /v1/merchant/
- GET /vi/orders/{orderId}/

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Angular][Angular.io]][Angular-url]
* [![TypeScript][Typescriptlang.org]][Typescriptlang-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

[Click here](https://programmersit.github.io/opendelivery-api-schema-validator/) to access the tool.

1 - Select the route you wish to validate;

![image](https://user-images.githubusercontent.com/80956588/192373062-d2beb66e-dd47-47dd-871e-287a20e31d13.png)

2 - Select whether you want to validate the request or the response schema of the chosen route;

![image](https://user-images.githubusercontent.com/80956588/192373111-39732fc3-4562-41a5-8c29-96d50ad9f852.png)

3 - Paste the JSON you want to validate and click validate.

![image](https://user-images.githubusercontent.com/80956588/192373252-a1fd62bf-468a-4765-9cd6-c898edd7519d.png)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Add Changelog
- [ ] Add the remaining Merchant routes
- [ ] Add the remaining Order routes
- [ ] Add Logistics routes
- [ ] Add Financial Reconcilliation routes
- [ ] Add Contracts routes

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

TBD
<!-- Distributed under the MIT License. See `LICENSE.txt` for more information. -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: https://user-images.githubusercontent.com/80956588/192378320-c915b264-fc05-4f01-ab5d-4064b3dfa7b6.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Typescriptlang.org]: https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white
[Typescriptlang-url]: https://www.typescriptlang.org/

