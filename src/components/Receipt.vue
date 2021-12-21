<template>
  <div class="receipt">

    <header v-if="printHeader" class="receipt-header no-print">
      <button onclick="self.close()">&LT; 返回</button>
      <button onclick="self.print()">列印</button>
    </header>

    <main>
      <div v-for="receipt, index in receipts" :key="index" class="receipt-page" :style="{ margin: margin }">
        <!-- 寄件人 -->
        <div class="absolute" :style="positions.sender">
          <div>{{ receiptTemplate.mailingAddress }}</div>
          <div>{{ receiptTemplate.issueUnitName }}</div>
        </div>

        <!-- 收件人 -->
        <div class="absolute" :style="positions.receipient">
          <div>{{ receipt.receipientAddressStr }}</div>
          <div>{{ receipt.receipient }}</div>
        </div>

        <!-- 浮水印 (固定位置) -->
        <img v-if="receiptTemplate.receiptBackgroundUrl" :src="receiptTemplate.receiptBackgroundUrl" class="receipt-watermark">

        <!-- 折線 -->
        <hr v-if="template === 1" class="hr-dashed" style="top: 33.33%" />
        <hr v-if="template === 1" class="hr-dashed" style="top: 66.66%" />

        <!-- Logo -->
        <img :src="receiptTemplate.logoUrl" class="absolute" :style="positions.logo">

        <!-- 自訂標頭文字 -->
        <div class="absolute" :style="positions.customText">
          <div>{{ receiptTemplate.customText1 }}</div>
          <div>{{ receiptTemplate.customText2 }}</div>
        </div>

        <!-- 不可扣抵收據顯示文字  -->
        <div class="absolute" v-if="receiptTemplate.receiptDisductableShowText !== ''" :style="positions.receiptDisductableShowText">
          {{ receiptTemplate.receiptDisductableShowText }}
        </div>

        <!-- 捐款人標籤 -->
        <div class="absolute" :style="positions.donarNameLabel">
          茲收到捐款人
        </div>

        <!-- 捐款人全名、稱謂 -->
        <div class="receipt-payer absolute" :style="positions.donarName">
          <span>{{ receipt.donarName }}</span>
          <span>{{ receiptTemplate.salutation }}</span>
        </div>

        <!-- 捐款金額 -->
        <div class="absolute" :style="positions.receiptAmountCovInWords">
          捐助&nbsp;&nbsp;新臺幣 {{ receipt.receiptAmountCovInWords }} 元整
        </div>

        <!-- 感謝語 -->
        <div class="absolute" :style="positions.gratitude">
          {{ receiptTemplate.gratitude }}
        </div>

        <!-- 簽章 -->
        <div class="receipt-signature absolute" :style="positions.signature">
          <div v-for="index in [1, 2, 3, 4]" :key="index">
            <template v-if="receiptTemplate[`signatureName${index}`] && receiptTemplate[`signatureValue${index}`]">
              <span v-if="receiptTemplate.signatureType === 'TEXT'">
                {{ receiptTemplate[`signatureName${index}`] }}：{{ receiptTemplate[`signatureValue${index}`] }}
              </span>
              <span v-else-if="receiptTemplate.signatureType === 'IMG'">
                {{ receiptTemplate[`signatureName${index}`] }}
                <img :src="receiptTemplate[`signatureValue${index}`]">
              </span>
            </template>
          </div>
        </div>

        <!-- 開立單位 -->
        <div class="absolute" :style="positions.unit">
          <div class="receipt-issue-unit-name">{{ receiptTemplate.issueUnitName }}</div>
          <div>{{ receiptTemplate.mailingAddress }}</div>
          <div>{{ receiptTemplate.contactNumber }}</div>
          <div>{{ receiptTemplate.taxIdNumber }}</div>
          <div>{{ receiptTemplate.registrationNumber }}</div>
          <div>{{ receiptTemplate.corporateNumber }}</div>
        </div>

        <!-- 大章 -->
        <div v-if="receiptTemplate.bigChapterUrl" class="receipt-big-chapter absolute" :style="positions.bigChapter">
          <img :src="receiptTemplate.bigChapterUrl">
        </div>

        <!-- 收據號碼 -->
        <div class="absolute" :style="positions.receiptNumber">
          收據號碼 {{ receipt.receiptNumber }}
          <span v-if="receipt.reissueCount > 0">補發資料</span>
        </div>

        <!-- 年開 -->
        <div v-if="receipt.byYearItmeStr" class="absolute" :style="positions.byYearItmeStr">
          年開資料：{{ receipt.byYearItmeStr }}
        </div>

        <!-- 收據開立日期 -->
        <div class="absolute" :style="positions.receiptDateStr">
          收據開立日期：{{ receipt.receiptDateStr }}
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
    receiptTemplate: {
      type: Object,
      required: true
    },
    receipts: {
      type: Array,
      required: true
    },
    // 邊界
    margin: {
      type: String,
      default: '15px auto'
    }
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
            sender: { top: '43px', left: '55px', fontSize: '24px'},
            receipient: { top: '167px', left: '407px', fontSize: '24px'},
            logo: { top: '416px', left: '72px', width: '64px', height: '64px' },
            customText: { top: '420px', left: '143px', fontSize: '22px', lineHeight: '26px' },
            receiptDisductableShowText: { top: '504px', left: '72px', fontSize: '16px' },
            donarNameLabel: { top: '529px', left: '72px', fontSize: '16px' },
            donarName: { top: '554px', left: '72px', fontSize: '16px' },
            salutation: { top: '579px', left: '72px', fontSize: '16px' },
            receiptAmountCovInWords: { top: '583px', left: '72px', fontSize: '16px' },
            gratitude: { top: '612px', left: '72px', fontSize: '16px' },
            signature: { top: '638px', left: '72px', fontSize: '16px' },
            byYearItmeStr: { top: '689px', left: '72px', fontSize: '16px' },
            receiptDateStr: { top: '689px', left: '406px', fontSize: '16px' },
            unit: { top: '417px', left: '406px', fontSize: '14px' },
            receiptNumber: { top: '555px', left: '406px', fontSize: '16px' },
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

