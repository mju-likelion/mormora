const importSpoqaHanSans = `
  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 700;
    src: local('Spoqa Han Sans Bold'),
    url('/fonts/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
    url('/fonts/SpoqaHanSansNeo-Bold.woff') format('woff'),
    url('/fonts/SpoqaHanSansNeo-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    src: local('Spoqa Han Sans Medium'),
    url('/fonts/SpoqaHanSansNeo-Medium.woff2') format('woff2'),
    url('/fonts/SpoqaHanSansNeo-Medium.woff') format('woff'),
    url('/fonts/SpoqaHanSansNeo-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 400;
    src: local('Spoqa Han Sans Regular'),
    url('/fonts/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
    url('/fonts/SpoqaHanSansNeo-Regular.woff') format('woff'),
    url('/fonts/SpoqaHanSansNeo-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 300;
    src: local('Spoqa Han Sans Light'),
    url('/fonts/SpoqaHanSansNeo-Light.woff2') format('woff2'),
    url('/fonts/SpoqaHanSansNeo-Light.woff') format('woff'),
    url('/fonts/SpoqaHanSansNeo-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 100;
    src: local('Spoqa Han Sans Thin'),
    url('/fonts/SpoqaHanSansNeo-Thin.woff2') format('woff2'),
    url('/fonts/SpoqaHanSansNeo-Thin.woff') format('woff'),
    url('/fonts/SpoqaHanSansNeo-Thin.ttf') format('truetype');
  }
`;

const importFonts = `
  ${importSpoqaHanSans}

  html {
    font-family: 'Spoqa Han Sans Neo', "Apple SD Gothic Neo", "Nanum Gothic", "Malgun Gothic", sans-serif;
  }
`;

export default importFonts;
