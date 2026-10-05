# Rekod pengesahan

## Lulus dalam persekitaran pembangunan

Jalankan `node tests/integration.mjs` (Node.js 22 atau lebih baharu).

Harness menjalankan modul permainan sebenar dengan penyesuai DOM/Canvas minimum. Avatar digerakkan menggunakan pengendali kekunci sebenar sepanjang laluan yang mengelakkan collision. Ujian merangkumi:

- pergerakan pemain, kamera dan hentian ketika dialog/jeda;
- collision pada semua footprint objek termasuk bangunan, pokok, pagar dan air;
- laluan dari dataran ke kelima-lima lokasi misi;
- perbualan, pilihan tindakan dan maklum balas jawapan salah;
- emosi, pilihan berbilang kesan dan justifikasi;
- ganjaran yang tidak boleh dituntut berulang;
- 15/15 bintang, lima misi dan keharmonian 100/100;
- penamat, simpan/muat kemajuan, mula semula;
- pengendali pointer kayu bedik, gerakan dan berhenti selepas dilepaskan.

Semakan sintaks JavaScript turut lulus. Fail disajikan melalui pelayan HTTP statik tempatan. Komposisi Canvas diperiksa melalui rakaman arahan lukisan yang dirasterkan; ini bukan tangkapan skrin pelayar.

## Belum disahkan dalam pelayar/peranti sebenar

Pemasangan Chromium ujian gagal kerana muat turun arkib pelayar tidak sah. Oleh itu ujian di atas **bukan** ujian end-to-end pelayar. Tiada dakwaan bahawa konsol pelayar bebas ralat, CSS telah diuji pada Safari, prestasi iPad diukur atau GitHub Pages sudah diterbitkan.

Sebelum penggunaan kelas, buka melalui HTTP/GitHub Pages dan semak pada iPad sebenar:

1. Landscape dan portrait: HUD, dialog, scrollbar dan semua butang boleh dicapai.
2. Seretan kayu bedik serta tekan interaksi menggunakan dua jari.
3. Baca dialog dan audio selepas tindakan pengguna; semak suara Melayu peranti.
4. Lengkapkan misi, muat semula halaman, sambung dan mula semula.
5. Pastikan tiada ralat pada konsol pelayar atau permintaan aset gagal.

GitHub Pages menggunakan fail statik relatif dan tidak memerlukan proses build. Penerbitan sebenar memerlukan repositori sasaran.
