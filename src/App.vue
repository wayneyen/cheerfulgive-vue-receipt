<template>
  <div id="app">
    <Receipt
      :receipt-template="receiptTemplate"
      :receipts="receipts"
      :template="1"
      :print-header="true" />
  </div>
</template>

<script>
import Receipt from './components/Receipt.vue'

export default {
  name: 'App',
  components: {
    Receipt
  },
  data() {
    return {
      receiptTemplate: {
        "isActive": true,
        "receiptName": "A4全版面(可折疊郵寄)",
        "issueUnitName": "樂意捐基金會",
        "receiptBackgroundUrl": "https://storage.googleapis.com/dona2-dev/receiptTemplate/7c4a5025627c466cb570a08d2c04fa77.png",
        "logoUrl": "https://storage.googleapis.com/dona2-dev/receiptTemplate/7d5f7ce36f014de480d0fe607b3cf652.png",
        "bigChapterUrl": "https://storage.googleapis.com/dona2-dev/receiptTemplate/a5988f2c61d14e5d9faef64d7ef312ff.png",
        "customText1": "佈施的人有福",
        "customText2": "行善的人快樂",
        "receiptDisductableShowText": "非扣抵收據",
        "mailingAddress": "台北市中山北路123號",
        "contactNumber": "0919246398",
        "taxIdNumber": "52563493",
        "registrationNumber": "123",
        "corporateNumber": "123",
        "salutation": "先生",
        "gratitude": "謹此銘謝",
        "signatureType": "IMG",
        "signatureName1": "董事長",
        "signatureValue1": "https://storage.googleapis.com/dona2-dev/receiptTemplate/8965babf2ca34ab3ad1ff7d92cbb754a.png",
        "signatureName2": "董事長",
        "signatureValue2": "https://storage.googleapis.com/dona2-dev/receiptTemplate/8965babf2ca34ab3ad1ff7d92cbb754a.png",
        "signatureName3": "董事長",
        "signatureValue3": "https://storage.googleapis.com/dona2-dev/receiptTemplate/8965babf2ca34ab3ad1ff7d92cbb754a.png",
        "signatureName4": "董事長",
        "signatureValue4": "https://storage.googleapis.com/dona2-dev/receiptTemplate/8965babf2ca34ab3ad1ff7d92cbb754a.png",
        "id": "1",
        "template": "123test"
      },
      receipts: [
        {
          donorName: '捐款人全名', //捐款人姓名
          donorType: 'Personal', //捐款人類型
          receiptAmountCovInWords: '叁千元', //捐款金額轉大寫
          byYearItemStr: '1/2000,1/1000,1/60', //年開資料
          receiptDateStr: "2021-12-13", //收據開立日期
          receiptNumber: "OPG21124466", //收據編碼
          reissueCount: "0", //補發次數,
          ownerName: "寄件人名稱",
          ownerAddress: "寄件人地址",
          ownerPhone: "寄件人電話",
          receipient: "收件人全名",
          receipientAddressStr: "收件人地址",
          receipientAddressStr1: "收件人地址1",
          receipientAddressStr2: "收件人地址2",
          receiptTypeCode: "BY_TIME"
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
