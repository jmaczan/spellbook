# Spellbook API

Currently it's not used in https://spellbook.maczan.pl instance, because scripts are loaded from static files hosted on a HTTP server. I leave it in code anyway, to indicate that you can still use it and replace static host links with calls to this API.

## Heroku deployment example

### install heroku

https://devcenter.heroku.com/articles/heroku-cli
On Ubuntu:

```
sudo snap install --classic heroku
```

### set git

```
heroku git:remote -a spellbookapi
```

### heroku deployment

```
git subtree push --prefix api heroku main
```

### heroku debugging

```
heroku logs --tail
```

## Common issues

### EADDRINUSE

```JSON
{
  code: 'EADDRINUSE',
  errno: -98,
  syscall: 'listen',
  address: '::',
  port: 8080
}
[nodemon] app crashed - waiting for file changes before starting...
```

solution:

```sh
netstat -ltnp | grep -w '8080'

kill -9 {process id}
```
