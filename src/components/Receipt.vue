<template>
  <div class="receipt">

    <header v-if="printHeader" class="receipt-header no-print">
      <button onclick="history.back()">&LT; 返回</button>
      <button onclick="self.print()">列印</button>
    </header>

    <main>
      <div v-for="receipt, index in receipts"
        :key="index"
        class="receipt-page"
        :style="{ margin: margin, display: displayValue(receipt.receiptTypeCode) }">

        <!-- 浮水印 (固定位置) -->
        <img v-if="receiptTemplate.receiptBackgroundUrl"
          :src="receiptTemplate.receiptBackgroundUrl"
          :style="positions.receiptWatermark"
          class="receipt-watermark">

        <!-- 寄件人 -->
        <div class="absolute" :style="positions.sender">
          <div v-if="receipt.ownerAddress">{{ receipt.ownerAddress }}</div>
          <div v-if="receipt.ownerPhone">{{ receipt.ownerPhone }}</div>
          <div v-if="receipt.ownerName">{{ receipt.ownerName }}</div>
        </div>

        <!-- 收件人 -->
        <div class="absolute" :style="positions.receipient">
          <div v-if="receipt.receipientAddressStr">{{ receipt.receipientAddressStr }}</div>
          <div v-if="receipt.receipientAddressStr1">{{ receipt.receipientAddressStr1 }}</div>
          <div v-if="receipt.receipientAddressStr2">{{ receipt.receipientAddressStr2 }}</div>
          <div>{{ receipt.receipient }}</div>
        </div>

        <!-- 折線 -->
        <hr v-if="template === 1 || template === 2" class="hr-dashed" style="top: 33.33%" />
        <hr v-if="template === 1" class="hr-dashed" style="top: 66.66%" />

        <!-- Logo -->
        <img :src="receiptTemplate.logoUrl" class="absolute receipt-logo" :style="positions.logo">

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
        <div class="absolute" :style="positions.donorNameLabel">
          茲收到捐款人
        </div>

        <!-- 捐款人全名、稱謂 -->
        <div class="receipt-payer absolute" :style="positions.donorName">
          <span>{{ receipt.donorName }}</span>
          <span>{{ receiptTemplate.salutation }}</span>
        </div>

        <!-- 捐款金額 -->
        <div class="absolute" :style="positions.receiptAmountCovInWords">
          捐助&nbsp;&nbsp;新臺幣&nbsp;&nbsp;&nbsp;&nbsp;{{ receipt.receiptAmountCovInWords }}&nbsp;&nbsp;整
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

        <!-- 大章 -->
        <div v-if="receiptTemplate.bigChapterUrl" class="receipt-big-chapter absolute" :style="positions.bigChapter">
          <img :src="receiptTemplate.bigChapterUrl">
        </div>

        <!-- 開立單位 -->
        <div class="absolute" :style="positions.unitTitle" >{{ receiptTemplate.issueUnitName }}</div>
        <div class="absolute" :style="positions.unitContent">
          <div v-if="receiptTemplate.mailingAddress">
            通訊地址：{{ receiptTemplate.mailingAddress }}
          </div>
          <div v-if="receiptTemplate.contactNumber">
            電話：{{ receiptTemplate.contactNumber }}
          </div>
          <div v-if="receiptTemplate.taxIdNumber">
            統一編號：{{ receiptTemplate.taxIdNumber }}
          </div>
          <div v-if="receiptTemplate.registrationNumber">
            核准字號：{{ receiptTemplate.registrationNumber }}
          </div>
          <div v-if="receiptTemplate.corporateNumber">
            法人證號：{{ receiptTemplate.corporateNumber }}
          </div>
        </div>

        <!-- 收據號碼 -->
        <div class="absolute" :style="positions.receiptNumber">
          收據號碼 {{ receipt.receiptNumber }}
          <span v-if="isReissuedPrint">補發</span>
        </div>

        <!-- 年開 -->
        <div v-if="receipt.receiptTypeCode === 'BY_YEAR'" class="absolute" :style="positions.byYearItemStr">
          年開資料：{{ receipt.byYearItemStr }}
        </div>

        <!-- 收據日期 -->
        <div class="absolute" :style="positions.receiptDateStr">
          收據日期：{{ receipt.receiptDateStr }}
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
    },
    // 補發資料
    isReissuedPrint: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  computed: {
    // 元素座標由此設置 (style)
    positions () {
      switch (this.template) {
        // A4全版面(可折疊郵寄)
        case 1:
          return {
            receiptWatermark: { top: '33.33%'}, // 水印
            sender: { top: '30px', left: '40px', fontSize: '16px', fontWeight: '500' }, // 寄件人
            receipient: { top: '170px', left: '416px', fontSize: '16px', fontWeight: '500' }, // 收件人
            logo: { top: '404px', left: '60px', width: '60px', height: '60px' }, // 圖示
            customText: { top: '414px', left: '140px', fontSize: '18px', lineHeight: '26px' }, // 自訂文字
            receiptDisductableShowText: { top: '494px', left: '60px', fontSize: '12px' }, // 扣抵文字
            donorNameLabel: { top: '515px', left: '60px', fontSize: '14px', fontWeight: '600' }, // 捐款人標籤
            donorName: { top: '542px', left: '60px', fontSize: '16px' }, // 捐款人
            receiptAmountCovInWords: { top: '563px', left: '60px', fontSize: '16px' }, // 捐款金額
            gratitude: { top: '590px', left: '60px', fontSize: '14px', fontWeight: '600' }, // 感謝語
            signature: { top: '637px', left: '60px', fontSize: '14px' }, // 簽章
            byYearItemStr: { top: '778px', left: '60px', fontSize: '14px' }, // 年開資料
            receiptDateStr: {
              top: this.receipt && this.receipt.receiptTypeCode === 'BY_YEAR' ? '804px': '788px',
              left: '60px',
              fontSize: '14px'
            },
            unitTitle: { top: '403px', left: '397px', fontSize: '24px', fontWeight: '700' }, // 開立單位標題
            unitContent: { top: '441px', left: '397px', fontSize: '16px', lineHeight: '1.8', transform : 'scale(.5)', transformOrigin: 'top left' }, // 開立單位資料
            receiptNumber: { top: '526px', left: '397px', fontSize: '14px' }, // 收據號碼
            bigChapter: { top: '441px', left: '658px' }, // 大章
          }

        // 1/3版面
        case 2:
          return {
            receiptWatermark: { top: '0'}, // 水印
            sender: { top: '30px', left: '40px', fontSize: '16px', fontWeight: '500', display: 'none' }, // 寄件人
            receipient: { top: '189px', left: '397px', fontSize: '14px', fontWeight: '500' }, // 收件人
            logo: { top: '31px', left: '60px', width: '60px', height: '60px' }, // 圖示
            customText: { top: '41px', left: '140px', fontSize: '18px', lineHeight: '26px' }, // 自訂文字
            receiptDisductableShowText: { top: '121px', left: '60px', fontSize: '12px' }, // 扣抵文字
            donorNameLabel: { top: '142px', left: '60px', fontSize: '14px', fontWeight: '600' }, // 捐款人標籤
            donorName: { top: '169px', left: '60px', fontSize: '16px' }, // 捐款人
            receiptAmountCovInWords: { top: '190px', left: '60px', fontSize: '16px' }, // 捐款金額
            gratitude: { top: '217px', left: '60px', fontSize: '14px', fontWeight: '600' }, // 感謝語
            signature: { top: '264px', left: '60px', fontSize: '14px' }, // 簽章
            byYearItemStr: { top: '331px', left: '60px', fontSize: '14px' }, // 年開資料
            receiptDateStr: { top: '331px', left: '397px', fontSize: '14px' },
            unitTitle: { top: '30px', left: '397px', fontSize: '24px', fontWeight: '700' }, // 開立單位標題
            unitContent: { top: '68px', left: '397px', fontSize: '16px', lineHeight: '1.8', transform : 'scale(.5)', transformOrigin: 'top left' }, // 開立單位資料
            receiptNumber: { top: '153px', left: '397px', fontSize: '14px' }, // 收據號碼
            bigChapter: { top: '68px', left: '658px' }, // 大章
          }

        default:
          break;
      }
      return {}
    },
  },
  created() {
    document.body.classList.add('print-body')
  },
  destroyed() {
    document.body.classList.remove('print-body')
  },
  methods: {
    displayValue(value) {
      return (value === 'BY_TIME' || value === 'BY_YEAR') ? 'block' : 'none'
    }
  }

}
</script>

<style>
@media print {
  .print-body {
    max-width: initial !important;
    min-width: initial !important;
  }
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');

@media print {
  @page {
    size: A4 portrait !important;
    margin: 0 !important;
    background-color: #fff !important;
  }

  .no-print, .no-print *
  {
    display: none !important;
  }

  .receipt-page {
    margin: 0 !important;
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
  font-family: Roboto, 'Noto Sans TC';
}

/* 收據大小 A4 */
.receipt-page {
  position: relative;
  width: 21cm;
  height: 29.5cm;
  border: 1px solid #ddd;
  background-color: #fff !important;
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
  left: 0;
  width: 100%;
  height: 33.33%;
  object-fit: contain;
  z-index: 0;
}

.receipt-logo {
  object-fit: contain;
}
.receipt-payer span+span {
  margin-left: 20px;
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
  font-weight: 800;
  /* font-family: 'cwTeXFangSong', 'cwTeXKai', 'Noto Serif'; */
}
.receipt-big-chapter img {
  width: 76px;
  height: 76px;
  object-fit: contain;
}
</style>

