# Carousel Componenti

Bu proje, bir Carousel componenti oluşturmayı öğretir. Carousel componenti, bir görüntü slayt gösterisi oluşturur. Bu component, `useState` React Hook'unu kullanır. `useState` Hook'u, componentin içindeki `slide` adlı state'i yönetmek için kullanılır.

## Veri Seti

Carousel componenti, `data` adlı bir prop alır. Bu prop, bir dizi şeklinde, görüntülerin URL'lerini ve isimlerini içerir. Aşağıda bir örnek veri seti bulunmaktadır:

```javascript
const imgData = [
  {
    id: 1,
    name: "Carl Cox",
    url: "https://cdn.bugece.co/35499a97-24df-4daa-9b64-c4f2cdcd0621"
  },
  {
    id: 2,
    name: "Charlotte DeWitte",
    url: "https://cdn.bugece.co/0b399b5e-b2d0-4d3c-abb8-15b05be860a5"
  },
  {
    id: 3,
    name: "I Hate Models",
    url: "https://cdn.bugece.co/ac9587eb-7b97-428f-b336-fa0462865b76"
  },
  {
    id: 4,
    name: "Sama' Abdulhadi",
    url: "https://cdn.bugece.co/6f50fb88-b14e-476b-8c73-86e19e3ac062"
  },
  {
    id: 5,
    name: "Stella Bossi",
    url: "https://cdn.bugece.co/345479b9-cebb-4c60-b5c7-0b27dd0ff393"
  }
];
```

## Carousel İşlevleri

Carousel componenti içinde, `nextSlide` ve `prevSlide` adlı iki fonksiyon bulunur. Bu fonksiyonlar, kullanıcının slaytlar arasında gezinmesini sağlar. `nextSlide` fonksiyonu, bir sonraki slayta geçerken `prevSlide` fonksiyonu bir önceki slayta geçer.

Ayrıca, her slayt için bir gösterge oluşturulur. Gösterge, kullanıcının hangi slaytta olduğunu gösterir ve kullanıcının belirli bir slayta doğrudan geçmesini sağlar.

## Kurulum

Projenin kurulumu için aşağıdaki adımları takip edebilirsiniz:

1. Projeyi klonlayın: `git clone <repo-url>`
2. Bağımlılıkları yükleyin: `npm install`
3. Uygulamayı başlatın: `npm start`

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.# Carousel Componenti

Bu proje, bir Carousel componenti oluşturmayı öğretir. Carousel componenti, bir görüntü slayt gösterisi oluşturur. Bu component, `useState` React Hook'unu kullanır. `useState` Hook'u, componentin içindeki `slide` adlı state'i yönetmek için kullanılır.

## Veri Seti

Carousel componenti, `data` adlı bir prop alır. Bu prop, bir dizi şeklinde, görüntülerin URL'lerini ve isimlerini içerir. Aşağıda bir örnek veri seti bulunmaktadır:

```javascript
const imgData = [
  {
    id: 1,
    name: "Carl Cox",
    url: "https://cdn.bugece.co/35499a97-24df-4daa-9b64-c4f2cdcd0621"
  },
  {
    id: 2,
    name: "Charlotte DeWitte",
    url: "https://cdn.bugece.co/0b399b5e-b2d0-4d3c-abb8-15b05be860a5"
  },
  {
    id: 3,
    name: "I Hate Models",
    url: "https://cdn.bugece.co/ac9587eb-7b97-428f-b336-fa0462865b76"
  },
  {
    id: 4,
    name: "Sama' Abdulhadi",
    url: "https://cdn.bugece.co/6f50fb88-b14e-476b-8c73-86e19e3ac062"
  },
  {
    id: 5,
    name: "Stella Bossi",
    url: "https://cdn.bugece.co/345479b9-cebb-4c60-b5c7-0b27dd0ff393"
  }
];
```

## Carousel İşlevleri

Carousel componenti içinde, `nextSlide` ve `prevSlide` adlı iki fonksiyon bulunur. Bu fonksiyonlar, kullanıcının slaytlar arasında gezinmesini sağlar. `nextSlide` fonksiyonu, bir sonraki slayta geçerken `prevSlide` fonksiyonu bir önceki slayta geçer.

Ayrıca, her slayt için bir gösterge oluşturulur. Gösterge, kullanıcının hangi slaytta olduğunu gösterir ve kullanıcının belirli bir slayta doğrudan geçmesini sağlar.
