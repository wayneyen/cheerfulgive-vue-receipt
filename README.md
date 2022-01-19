# 樂易捐 - 收據套印 Vue 元件

## 安裝

```bash
npm i cheerfulgive-vue-receipt
```

## 參數
* Object receipt-template: 收據模板資料
* Array receipts: 收據內容
* Number template: 模板版型
* String margin: 預覽時的邊距(預設為 15px auto)
* Boolean print-header: 是否有列印工具列
* Boolean is-reissued-print: 是否為補印
* Boolean show-salutation 是否顯示稱謂

## 使用範例

```vue
<template>
  <Receipt
    :receipt-template="receiptTemplate"
    :receipts="receipts"
    :template="1"
    :is-reissued-print="false"
    margin="0"
    :print-header="true" />
</template>

<script>
import { Receipt } from 'cheerfulgive-vue-receipt';
...
export default {
  ...
  data() {
    return {
      receiptTemplate: {
        "isActive": true,
        "receiptName": "A4全版面(可折疊郵寄)",
        "issueUnitName": "樂意捐基金會",
        "receiptBackgroundUrl": "https://storage.googleapis.com/dona2-dev/receiptTemplate/14cbd4ac5b89412ca188996842ba3a28.jpg",
        "logoUrl": "https://storage.googleapis.com/dona2-dev/receiptTemplate/46b9f8939cbf45fc9a818eeb7530d2da.png",
        "bigChapterUrl": "https://storage.googleapis.com/dona2-dev/receiptTemplate/a5988f2c61d14e5d9faef64d7ef312ff.png",
        "customText1": "佈施的人有福",
        "customText2": "行善的人快樂",
        "receiptDisductableShowText": "非扣抵收據",
        "mailingAddress": "台北市中山北路123號",
        "contactNumber": "0919246398",
        "taxIdNumber": "12345678",
        "registrationNumber": "123",
        "corporateNumber": "123",
        "salutation": "先生",
        "gratitude": "謹此銘謝",
        "signatureType": "IMG",
        "signatureName1": "董事長",
        "signatureValue1": "https://storage.googleapis.com/dona2-dev/receiptTemplate/8965babf2ca34ab3ad1ff7d92cbb754a.png",
        "id": "1",
        "template": "123test"
      },
      receipts: [
        {
          donorName: '捐款人全名', //捐款人姓名
          receiptAmountCovInWords: '叁千元', //捐款金額轉大寫
          byYearItemStr: '1/2000,1/1000,1/60', //年開資料
          receiptDateStr: "2021-12-13", //收據開立日期
          receiptNumber: "OPG21124466", //收據號碼
          ownerName: "寄件人名稱",
          ownerAddress: "寄件人地址",
          ownerPhone: "寄件人電話",
          receipient: "收件人全名",
          receipientAddressStr: "收件人郵遞區號+縣市+鄉鎮市區",
          receipientAddressStr1: "收件人地址1",
          receipientAddressStr2: "收件人地址2",
          receiptTypeCode: "BY_TIME"
        }
      ]
    }
  }
}
...
</script>
```
