Project link is (https://pt-1lur.vercel.app/)

**Proje Adı:** Ürün Katalog Projesi

**Proje Süresi:** 5 Gün

**Proje Konusu:** Verilen apiye göre sizden 3 sayfa istemekteyiz. Mail ekinde yer alan dosyada bulunan ekran tasarımlarına göre kodlanacaktır. Ekranlar şu şekilde olacaktır:

**Proje API:** https://assignment-api.piton.com.tr/docs/

**Sayfa 1:**
- [x] Hem giriş yapma hem de kayıt olma formları bu sayfada olacaktır. Bu sayfalarda;

**Giriş yap:**
- [x] E-mail ile giriş yapılmalıdır ve e-mail validasyonları yapılmalıdır.
- [x] Şifre 6-20 karakter arası ve alfanumerik olmalıdır. İlgili validasyonlar giriş yap butonuna tıklandığında aktif olmalıdır.
- [x] Giriş yaparken beni hatırla kısmı ekleyiniz. Bu kısım işaretlendiğinde giriş kısmında alınan token tutulacaktır ve sonraki girişlerde kullanılacaktır.

**Kayıt Olma:**
- [x] Kullanıcı; ad, soyad, telefon numarası, e-mail adresi ve şifre/şifre tekrar ile kayıt olmalıdır.
- [x] Telefon Numarası girilirken sadece rakam klavyesi açılmalıdır.
- [x] Telefon numarası maskeleme işlemi ile alınmalıdır. +90(505) 888-88-88 formatında olmalıdır.
- [x] Bu ekranda da üstteki validasyon kuralları geçerli olmalıdır.
- [x] Kayıt olduktan sonra kişi ana sayfaya yönlendirilecektir fakat kullanıcı uygulamaya tekrar giriş yaptığında giriş ekranı ile karşılaşmalıdır.

**Sayfa 2:**
- [x] Burada apiden çekeceğiniz ürünler listelenmelidir. (Ürünlerin nasıl listeleneceğinin tasarımı tamamen size bırakılmıştır.)
- [x] Kullanıcı burada ürünleri favorilerine ekleme ve çıkarma işlemlerini yapmalıdır. ▪ Ürün üzerine tıklandığında o ürün ile alakalı detayların göründüğü bir ekrana yönlendirilmelidir.

**Sayfa 3:**
- [x] Burada önceki sayfada seçilen ürün bilgileri görüntülenecektir. 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
