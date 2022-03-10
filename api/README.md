# Spellbook API

## heroku deployment
```
git subtree push --prefix api heroku main
```

## heroku debugging
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