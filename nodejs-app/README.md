# SonarQube for nodejs-app
- install package
```
npm i
```
- run test
```
npm run test
```
- run SonarScanner
```
docker run \
  --rm \
  -e SONAR_HOST_URL="http://host.docker.internal:9000" \
  -e SONAR_LOGIN="<TOKEN>" \
  -v "${PWD}:/usr/src" \
  sonarsource/sonar-scanner-cli
``` 