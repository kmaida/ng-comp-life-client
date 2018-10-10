# ng-comp-life (client)

This Angular project is intended to be run in conjunction with [ng-comp-life](https://github.com/kmaida/ng-comp-life).

## Setup

Clone the necessary repos (this repo, which contains the Angular application, and the main repo which contains the Node server):

```bash
git clone https://github.com/kmaida/ng-comp-life.git
cd ng-comp-life
npm install
git clone https://github.com/kmaida/ng-comp-life-client.git client
cd client
npm install
```

## Serve

```bash
# ng-comp-life (root folder containing both server and client folders)
npm run start
```

Server runs on `http://localhost:3005` and Angular app runs on `http://localhost:4200`.

## Changelog

**10/04/2018**: Updated Angular version to 7.0rc

## License

[MIT](LICENSE) © Kim Maida 2018
