interface Image {
  name: string;
  image: any;
}

export class BackgroundImage {
  private static images: Array<Image> = [
    {
      name: 'ПамятникПетру.jpeg',
      image: require('../../../../assets/attractions/ПамятникПетру.jpeg'),
    },
    {
      name: 'КаменнаяЛестница.jpeg',
      image: require('../../../../assets/attractions/КаменнаяЛестница.jpeg'),
    },
    {
      name: 'ДомикЧехова.jpeg',
      image: require('../../../../assets/attractions/ДомикЧехова.jpeg'),
    },
    {
      name: 'ЛавкаЧеховых.jpeg',
      image: require('../../../../assets/attractions/ЛавкаЧеховых.jpeg'),
    },
    {
      name: 'Алфераки.jpeg',
      image: require('../../../../assets/attractions/Алфераки.jpeg'),
    },
    {
      name: 'ДворецАлександра.jpeg',
      image: require('../../../../assets/attractions/ДворецАлександра.jpeg'),
    },
    {
      name: 'МузейГрад.jpeg',
      image: require('../../../../assets/attractions/МузейГрад.jpeg'),
    },
    {
      name: 'Вокзал.jpeg',
      image: require('../../../../assets/attractions/Вокзал.jpeg'),
    },
    {
      name: 'Гимназия.jpeg',
      image: require('../../../../assets/attractions/Гимназия.jpeg'),
    },
    {
      name: 'Худ.jpeg',
      image: require('../../../../assets/attractions/Худ.jpeg'),
    },
    {
      name: 'Театр.jpeg',
      image: require('../../../../assets/attractions/Театр.jpeg'),
    },
  ];
  static GetImage = (name: string) => {
    const found = BackgroundImage.images.find(
      (e) => e.name === name.split('/').pop(),
    );
    return found
      ? found.image
      : { parent: `Не найден ${name.split('/').pop()}` };
  };
}
