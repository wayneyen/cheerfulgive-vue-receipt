<template>
  <div class="receipt">

    <header v-if="printHeader" class="receipt-header no-print">
      <button onclick="self.close()">&LT; 返回</button>
      <button onclick="self.print()">列印</button>
    </header>

    <main>
      <div v-for="receipt, index in receipts" :key="index" class="receipt-page">

        <!-- 浮水印 (固定位置) -->
        <img src="../assets/watermark.png" class="receipt-watermark">

        <!-- 折線 -->
        <hr v-if="template === 1" class="hr-dashed" style="top: 33.33%" />
        <hr v-if="template === 1" class="hr-dashed" style="top: 66.66%" />

        <!-- Logo -->
        <img :src="receipt.logoUrl" class="absolute" :style="positions.logo">

        <!-- 自訂標頭文字 -->
        <div class="absolute" :style="positions.customText">
          <div>{{ receipt.customText1 }}</div>
          <div>{{ receipt.customText2 }}</div>
        </div>

        <!-- 不可扣抵收據顯示文字  -->
        <div class="absolute" v-if="receipt.receiptDisductableShowText !== ''" :style="positions.receiptDisductableShowText">
          {{ receipt.receiptDisductableShowText }}
        </div>

        <!-- 捐款人標籤 -->
        <div class="absolute" :style="positions.payerFullNameLabel">
          茲收到捐款人
        </div>

        <!-- 捐款人全名、稱謂 -->
        <div class="receipt-payer absolute" :style="positions.payerFullName">
          <span>{{ receipt.payerFullName }}</span>
          <span>{{ receipt.salutation }}</span>
        </div>

        <!-- 捐款金額 -->
        <div class="absolute" :style="positions.amount">
          捐助&nbsp;&nbsp;新臺幣 {{ receipt.amount }} 元整
        </div>

        <!-- 感謝語 -->
        <div class="absolute" :style="positions.gratitude">
          {{ receipt.gratitude }}
        </div>

        <!-- 簽章 -->
        <div class="receipt-signature absolute" :style="positions.signature">
          <div v-for="index in [1, 2, 3, 4]" :key="index">
            <span v-if="receipt.signatureType === 'TEXT'">
              {{ receipt[`signatureName${index}`] }}：{{ receipt[`signatureValue${index}`] }}
            </span>
            <span v-else-if="receipt.signatureType === 'IMG'">
              {{ receipt[`signatureName${index}`] }}
              <img :src="receipt[`signatureValue${index}`]">
            </span>
          </div>
        </div>

        <!-- 開立單位 -->
        <div class="absolute" :style="positions.unit">
          <div class="receipt-issue-unit-name">{{ receipt.issueUnitName }}</div>
          <div>{{ receipt.mailingAddress }}</div>
          <div>{{ receipt.contactNumber }}</div>
          <div>{{ receipt.taxIdNumber }}</div>
          <div>{{ receipt.registrationNumber }}</div>
          <div>{{ receipt.corporateNumber }}</div>
        </div>

        <!-- 大章 -->
        <div class="receipt-big-chapter absolute" :style="positions.bigChapter">
          <img :src="receipt.bigChapterUrl">
        </div>

        <!-- 年開 -->
        <div class="absolute" :style="positions.year">
          年開資料：{{ receipt.year }}
        </div>

        <!-- 收據開立日期 -->
        <div class="absolute" :style="positions.receiptDate">
          收據開立日期：{{ receipt.receiptDate }}
        </div>

      </div>
    </main>

  </div>
</template>

<script>
import '../index.css'

export default {
  props: {
    printHeader: {
      type: Boolean,
      default: false
    },
    template: {
      type: Number,
      default: 1
    },
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
  },
  data() {
    return {

    }
  },
  computed: {
    positions () {
      switch (this.template) {
        case 1:
          return {
            logo: { top: '416px', left: '72px', width: '64px', height: '64px' },
            customText: { top: '420px', left: '143px', fontSize: '22px', lineHeight: '26px' },
            receiptDisductableShowText: { top: '504px', left: '72px', fontSize: '16px' },
            payerFullNameLabel: { top: '529px', left: '72px', fontSize: '16px' },
            payerFullName: { top: '554px', left: '72px', fontSize: '16px' },
            salutation: { top: '579px', left: '72px', fontSize: '16px' },
            amount: { top: '583px', left: '72px', fontSize: '16px' },
            gratitude: { top: '612px', left: '72px', fontSize: '16px' },
            signature: { top: '638px', left: '72px', fontSize: '16px' },
            year: { top: '689px', left: '72px', fontSize: '16px' },
            receiptDate: { top: '689px', left: '406px', fontSize: '16px' },
            unit: { top: '417px', left: '406px', fontSize: '16px' },
            bigChapter: { top: '442px', left: '644px' },
          }

        default:
          break;
      }
      return {}
    },
  }

}
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/cwtexfangsong.css);
@import url(//fonts.googleapis.com/earlyaccess/cwtexkai.css);
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css);

@media print {
  @page {
    size: A4 portrait;
    margin: 0;
  }
  .no-print, .no-print *
  {
    display: none !important;
  }

  .receipt-page {
    margin: 0 auto;
    border: none !important;
    box-shadow: none !important;
  }
}

.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.flex-1 {
  flex: 1;
}
.hr-dashed {
  position: absolute;
  left: 0;
  width: 100%;
  margin: 0;
  border-top: 1px dashed #999;
}

/* 收據容器 */
.receipt {
  font-family: 'Noto Sans TC';
}

/* 收據大小 A4 */
.receipt-page {
  position: relative;
  width: 21cm;
  height: 29cm;
  margin: 15px auto;
  border: 1px solid #ddd;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  box-sizing: content-box;
  overflow: hidden;
  page-break-after: always;
}

/* 列印工具列 */
.receipt-header {
  height: 40px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid orange;
}
.receipt-header button {
  background-color: transparent;
  border: none;
  font-size: larger;
  font-weight: bold;
  color: orange;
  cursor: pointer;
}
.receipt-header button:hover {
  color: orangered;
}


/* 浮水印 */
.receipt-watermark {
  position: absolute;
  top: 33.33%;
  left: 0;
  width: 100%;
  height: 33.33%;
  object-fit: contain;
}
.receipt-payer span+span {
  margin-left: 40px;
}
.receipt-signature {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
}
.receipt-signature > div+div {
  margin-left: 36px;
}
.receipt-signature span {
  display: flex;
  align-items: center;
}
.receipt-signature img {
  margin-left: 10px;
  width: 46px;
  height: 46px;
  object-fit: contain;
}

.receipt-issue-unit-name {
  font-size: 24px;
  font-family: 'cwTeXFangSong', 'cwTeXKai', 'Noto Serif';
}
.receipt-big-chapter img {
  width: 76px;
  height: 76px;
  object-fit: contain;
}
</style>

