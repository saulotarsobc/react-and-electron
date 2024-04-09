# use

```sh
./create_cert.sh
export CSC_LINK="certificate.pfx"
export CSC_KEY_PASSWORD="senha_do_certificate"
npm run dist:w
```

# signtoll command

```sh
signtool sign /fd SHA256 /a /f certificate.pfx "dist\SC - Electron React-Setup-1.0.0.exe"
```

# road...

- [x] Electron
- [x] React
- [ ] React Router Dom
- [ ] Tailwind
- [ ] Mantine Design
- [ ] Prisma.io

# Help

[electron-builder - Documentation](https://www.electron.build/)
- [Create React App](https://create-react-app.dev/docs/adding-typescript)
- [Vitor Cunha Code - Como criar um aplicativo desktop com React e Electron](https://youtu.be/8sVVAkh0UeM)
- [Vitor Cunha Code - Como buildar sua aplicação com electron-builder e react](https://youtu.be/Z7F6Z4vfh-k)
- [Vitor Cunha Code - Como utilizar Notificações no electron com React](https://youtu.be/OLY_dXD_5uc?list=PL3rZmjd47DtC1DarShG8NZStw3EfJI2c7)
- [How To Sign An Application In Windows 11](https://youtu.be/P-N9Gyv_wyA)
- [Uauh - How To Add License Keys To Electron Apps (Lemon Squeezy)](https://youtu.be/TfOF2jStRsY)
- [Generation of a Self Signed Certificate](https://gist.github.com/taoyuan/39d9bc24bafc8cc45663683eae36eb1a)
