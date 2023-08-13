# spellbook

Bash (and in the future Powershell) scripts registry

## Web App

A React app stored in `web/`.

You need to specify one environment variable (for example using `.env` file) - `REACT_APP_REGISTRY_URL` - which points to registry and ends with a slash (`/`):

```
REACT_APP_REGISTRY_URL=https://link.url/
```

Two other env variables are optional:

```
REACT_APP_PAYMENT_URL_SUBSCRIPTION=
REACT_APP_PAYMENT_URL_OTP=
```

They are links to payment processor, completely optional.

### Install

`npm install`

### Build

`npm run build`

### Run

`npm run start`

## CLI

Python CLI standalone app, stored in `cli/` directory

### Build

`./build.sh`

### Install

`./install.sh`

### Commands

#### Learn (add) script

`spell learn <script name>`

#### Forget (delete) script

`spell forget <script name>`

#### Show list of learned scripts

`spell list`

## API

Deprecated API for retrieving scripts. You can still use it anyway

### Build

`npm run build`

### Start

`npm run start`

## Registry

Contains all scripts in a separate directories. See [README](registry/README.md) in `registry/` for more detailed info

## Registry-utils

Python scripts for Registry

## License

Free to use for non-commercial usage

For commercial, pay $10 per year per user - [BUY HERE](https://spellbook.maczan.pl/pricing)

## Author

Copyright 2022-2023 [Jędrzej Paweł Maczan](https://maczan.pl)
