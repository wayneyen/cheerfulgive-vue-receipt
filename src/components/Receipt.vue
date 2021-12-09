<template>
  <div class="receipt">

    <header class="flex justify-between p-4 bg-gray-600 print:hidden">
      <button class="text-white">&LT; 返回</button>
      <button onclick="self.print()">列印</button>
    </header>

    <main>
      <div v-for="receipt, index in receipts" :key="index" class="receipt-page flex flex-col">
        <div class="flex-1"></div>

        <div class="flex-1 overflow-hidden relative p-4">
          <!-- 浮水印 -->
          <img src="../assets/watermark.png" class="absolute top-0 left-0 w-full h-full object-contain">

          <div class="flex">

            <!-- 左 -->
            <div class="flex-1">
              <!-- 左上 -->
              <div class="flex">
                <div>
                  <img :src="receipt.logoUrl" class="w-16">
                </div>
                <div class="flex flex-col justify-center pl-3">
                  <div class="text-xl">{{ receipt.customText1 }}</div>
                  <div class="text-xl">{{ receipt.customText2 }}</div>
                </div>
              </div>

              <!-- 左中 -->
              <div class="mt-8 leading-8">
                <div>不可扣抵收據顯示文字</div>
                <div>茲收到捐款人</div>
                <div>
                  <span>收據抬頭</span>
                  <span class="pl-5">捐款人稱謂</span>
                </div>

                <div>捐助  新臺幣 { 捐款金額轉大寫 } 元整</div>
                <div>感謝語</div>
              </div>

              <!-- 左下 -->
              <div class="mt-2 flex items-center">
                <div class="flex items-center">
                  <span>簽章1</span>
                  <img src="../assets/sign-s.png" class="h-12 ml-4">
                </div>
                <div class="ml-8">
                  <span>簽章2</span>
                  <span></span>
                </div>
              </div>
            </div>

            <!-- 右 -->
            <div class="flex-1 relative">
              <img src="../assets/sign-lg.png" class="absolute max-w-20 max-h-20 top-10 right-10">
              <div class="text-2xl unit">開立單位名稱</div>
              <div class="text-sm">通訊地址 通訊地址</div>
              <div class="text-sm">電話 電話</div>
              <div class="text-sm">統一編號 統一編號</div>
              <div class="text-sm">核准字號 核准字號</div>
              <div class="text-sm">法人證號 法人證號</div>

              <div class="mt-6">收據號碼 收據號碼 補發資料</div>
            </div>

          </div>

          <div class="flex mt-4">
            <div class="flex-1">收據開立日期</div>
            <div class="flex-1">年開資料</div>
          </div>

        </div>

        <div class="flex-1"></div>
      </div>
    </main>
  </div>
</template>

<script>
import '../index.css'

export default {
  props: {
    receipts: {
      type: Array,
      required: true
    },

    receiptBackgroundUrl: String, // 收據底圖url

    /* 左上 */
    logoUrl: String, // LOGO
    customText1: String, // 自訂文字1
    customText2: String, // 自訂文字2

    /* 左中 */
    receiptDisductableShowText: String, // 不可扣抵收據顯示文字
    title: String, // 收據抬頭
    salutation: String, // 稱謂([ (大德) / (先生/女士) ])
    receiptAmount: String, // 金額
    gratitude: String, // 感謝語

    /* 左下 */
    signatureType: String, // 簽章類別([ IMG(圖片) / TEXT(文字) ])
    signatureName1: String, // 簽章1欄位名
    signatureValue1: String, // 簽章1內容值/印章圖片url
    signatureName2: String, // 簽章2欄位名
    signatureValue2: String, // 簽章2內容值/印章圖片url
    signatureName3: String, // 簽章3欄位名
    signatureValue3: String, // 簽章3內容值/印章圖片url
    signatureName4: String, // 簽章4欄位名
    signatureValue4: String, // 簽章4內容值/印章圖片url

    /* 右上 */
    issueUnitName: String, // 開立單位名稱
    mailingAddress: String, // 開立單位地址
    contactNumber: String, // 開立單位電話
    taxIdNumber: String, // 開立單位統編
    registrationNumber: String, // 開立單位核准字號
    corporateNumber: String, // 開立單位法人證號
    bigChapterUrl: String, // 開立單位大章圖片url

    /* 右中 */
    receiptNumber: String, // 收據號碼
    reissue: String, // 補發資料

    /* 底部 */
    receiptDate: String, // 收據開立日期
    yearDetail: String, // 年開資料

    /* 封面 */
    fromAddress: String, // 寄件人地址
    fromName: String, // 寄件人
    toAddress: String, // 收件人地址
    toName: String, // 收件人
  }
}
</script>

<style scoped>
@media print {
  @page {
    size: A4 portrait;
    /* margin: 30mm 45mm 30mm 45mm; */
  }

  .no-print, .no-print *
  {
      display: none !important;
  }
}

.receipt-page {
  width: 21cm;
  height: 29.7cm;
}

.receipt {
  font-family: 'Noto Sans TC';
}
.unit {
  font-family: 'cwTeXFangSong', 'cwTeXKai', 'Noto Serif';
}
</style>

