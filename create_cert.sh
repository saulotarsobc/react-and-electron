#! bash
openssl req -new -newkey rsa:4096 -days 3650 -nodes -x509 -keyout cert.key -out cert.crt

# STEP 4: Create certificate.pfx
openssl pkcs12 -export -out certificate.pfx -inkey cert.key -in cert.crt

