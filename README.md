# 樂易捐 - 收據套印 Vue 元件

## 安裝

```bash
npm i @wayneyen/cheerfulgive-vue-receipt
```

## 參數
* Array receipts: 收據資料
* Number template: 模板版型
* Boolean print-header: 是否有列印工具列

## 使用範例

```vue
<template>
	<Receipt :receipts="receipts" :template="1" :print-header="true" />
</template>

<script>
import { Receipt } from '@wayneyen/cheerfulgive-vue-receipt';
...
export default {
  ...
  data() {
    return {
      receipts: [
        {
          id: 1,
          logoUrl: 'https://s3-alpha-sig.figma.com/img/1149/64a0/ff89d31f4998535154f9b3d90d524983?Expires=1639958400&Signature=J37Tqb6iBve7WvusP9szXkBt~IiSl3k3EYkOv0ZjqzYbM5yysHAnalog5Sei7r08EsJatiWKtPVRJRo8zuSqyEicBszbtMjDMtL5qnsP~ZSUGxSRnd45aDviQ4BvIrmZQZTyoP4bBhYTd0bipC5LoHcj3gBCqrELYr7IybBAAUDbdTQa9z1euRGNBLlHb20rYtPC6~TjgSo6jLVrEUCCp9C9UAyRXqqIVe~qLGADHmfDgInNUsYsbcrunrjEn0MAlLjyPCM6Y3tug73ZtURWK4L~yIjLzP~oexxSnuCTioOs4ZuM1jeyQSOxuO~KiqUSCred1iw7qIkEurGKos4Lvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          customText1: '自訂文字1',
          customText2: '自訂文字2',
          receiptInvoiceType: 'DEDUCTIBLE',
          receiptDisductableShowText: '不可扣抵收據顯示文字',
          payerFullName: '收款人全名',
          salutation: '先生',
          amount: 2000,
          gratitude: '感謝語',
          signatureType: 'TEXT',
          signatureName1: '簽章1',
          signatureValue1: '簽章1內容',
          signatureName2: '簽章2',
          signatureValue2: '簽章2內容',
          signatureName3: '簽章3',
          signatureValue3: '簽章3內容',
          signatureName4: '簽章4',
          signatureValue4: '簽章4內容',
          year: '1/2000 2/2000 3/2000 4/2000',
          receiptDate: '2020/01/01',
          issueUnitName: '發票開立單位名稱',
          mailingAddress: '郵寄地址',
          contactNumber: '聯絡電話',
          taxIdNumber: '統一編號',
          registrationNumber: '核准字號',
          corporateNumber: '法人證號',
          bigChapterUrl: 'https://s3-alpha-sig.figma.com/img/1149/64a0/ff89d31f4998535154f9b3d90d524983?Expires=1639958400&Signature=J37Tqb6iBve7WvusP9szXkBt~IiSl3k3EYkOv0ZjqzYbM5yysHAnalog5Sei7r08EsJatiWKtPVRJRo8zuSqyEicBszbtMjDMtL5qnsP~ZSUGxSRnd45aDviQ4BvIrmZQZTyoP4bBhYTd0bipC5LoHcj3gBCqrELYr7IybBAAUDbdTQa9z1euRGNBLlHb20rYtPC6~TjgSo6jLVrEUCCp9C9UAyRXqqIVe~qLGADHmfDgInNUsYsbcrunrjEn0MAlLjyPCM6Y3tug73ZtURWK4L~yIjLzP~oexxSnuCTioOs4ZuM1jeyQSOxuO~KiqUSCred1iw7qIkEurGKos4Lvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        },
        {
          id: 2,
          logoUrl: 'https://s3-alpha-sig.figma.com/img/1149/64a0/ff89d31f4998535154f9b3d90d524983?Expires=1639958400&Signature=J37Tqb6iBve7WvusP9szXkBt~IiSl3k3EYkOv0ZjqzYbM5yysHAnalog5Sei7r08EsJatiWKtPVRJRo8zuSqyEicBszbtMjDMtL5qnsP~ZSUGxSRnd45aDviQ4BvIrmZQZTyoP4bBhYTd0bipC5LoHcj3gBCqrELYr7IybBAAUDbdTQa9z1euRGNBLlHb20rYtPC6~TjgSo6jLVrEUCCp9C9UAyRXqqIVe~qLGADHmfDgInNUsYsbcrunrjEn0MAlLjyPCM6Y3tug73ZtURWK4L~yIjLzP~oexxSnuCTioOs4ZuM1jeyQSOxuO~KiqUSCred1iw7qIkEurGKos4Lvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          customText1: '自訂文字1',
          customText2: '自訂文字2',
          date: '2018-01-02',
          amount: 200,
          receiptInvoiceType: 'NONDEDUCTIBLE',
          signatureType: 'IMG',
          signatureName1: '簽章1',
          signatureValue1: 'https://s3-alpha-sig.figma.com/img/1149/64a0/ff89d31f4998535154f9b3d90d524983?Expires=1639958400&Signature=J37Tqb6iBve7WvusP9szXkBt~IiSl3k3EYkOv0ZjqzYbM5yysHAnalog5Sei7r08EsJatiWKtPVRJRo8zuSqyEicBszbtMjDMtL5qnsP~ZSUGxSRnd45aDviQ4BvIrmZQZTyoP4bBhYTd0bipC5LoHcj3gBCqrELYr7IybBAAUDbdTQa9z1euRGNBLlHb20rYtPC6~TjgSo6jLVrEUCCp9C9UAyRXqqIVe~qLGADHmfDgInNUsYsbcrunrjEn0MAlLjyPCM6Y3tug73ZtURWK4L~yIjLzP~oexxSnuCTioOs4ZuM1jeyQSOxuO~KiqUSCred1iw7qIkEurGKos4Lvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          signatureName2: '簽章2',
          signatureValue2: 'https://s3-alpha-sig.figma.com/img/1149/64a0/ff89d31f4998535154f9b3d90d524983?Expires=1639958400&Signature=J37Tqb6iBve7WvusP9szXkBt~IiSl3k3EYkOv0ZjqzYbM5yysHAnalog5Sei7r08EsJatiWKtPVRJRo8zuSqyEicBszbtMjDMtL5qnsP~ZSUGxSRnd45aDviQ4BvIrmZQZTyoP4bBhYTd0bipC5LoHcj3gBCqrELYr7IybBAAUDbdTQa9z1euRGNBLlHb20rYtPC6~TjgSo6jLVrEUCCp9C9UAyRXqqIVe~qLGADHmfDgInNUsYsbcrunrjEn0MAlLjyPCM6Y3tug73ZtURWK4L~yIjLzP~oexxSnuCTioOs4ZuM1jeyQSOxuO~KiqUSCred1iw7qIkEurGKos4Lvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          signatureName3: '簽章3',
          signatureValue3: 'https://s3-alpha-sig.figma.com/img/1149/64a0/ff89d31f4998535154f9b3d90d524983?Expires=1639958400&Signature=J37Tqb6iBve7WvusP9szXkBt~IiSl3k3EYkOv0ZjqzYbM5yysHAnalog5Sei7r08EsJatiWKtPVRJRo8zuSqyEicBszbtMjDMtL5qnsP~ZSUGxSRnd45aDviQ4BvIrmZQZTyoP4bBhYTd0bipC5LoHcj3gBCqrELYr7IybBAAUDbdTQa9z1euRGNBLlHb20rYtPC6~TjgSo6jLVrEUCCp9C9UAyRXqqIVe~qLGADHmfDgInNUsYsbcrunrjEn0MAlLjyPCM6Y3tug73ZtURWK4L~yIjLzP~oexxSnuCTioOs4ZuM1jeyQSOxuO~KiqUSCred1iw7qIkEurGKos4Lvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          signatureName4: '簽章4',
          signatureValue4: 'https://s3-alpha-sig.figma.com/img/1149/64a0/ff89d31f4998535154f9b3d90d524983?Expires=1639958400&Signature=J37Tqb6iBve7WvusP9szXkBt~IiSl3k3EYkOv0ZjqzYbM5yysHAnalog5Sei7r08EsJatiWKtPVRJRo8zuSqyEicBszbtMjDMtL5qnsP~ZSUGxSRnd45aDviQ4BvIrmZQZTyoP4bBhYTd0bipC5LoHcj3gBCqrELYr7IybBAAUDbdTQa9z1euRGNBLlHb20rYtPC6~TjgSo6jLVrEUCCp9C9UAyRXqqIVe~qLGADHmfDgInNUsYsbcrunrjEn0MAlLjyPCM6Y3tug73ZtURWK4L~yIjLzP~oexxSnuCTioOs4ZuM1jeyQSOxuO~KiqUSCred1iw7qIkEurGKos4Lvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        },
        {
          id: 3,
          logoUrl: 'https://s3-alpha-sig.figma.com/img/1149/64a0/ff89d31f4998535154f9b3d90d524983?Expires=1639958400&Signature=J37Tqb6iBve7WvusP9szXkBt~IiSl3k3EYkOv0ZjqzYbM5yysHAnalog5Sei7r08EsJatiWKtPVRJRo8zuSqyEicBszbtMjDMtL5qnsP~ZSUGxSRnd45aDviQ4BvIrmZQZTyoP4bBhYTd0bipC5LoHcj3gBCqrELYr7IybBAAUDbdTQa9z1euRGNBLlHb20rYtPC6~TjgSo6jLVrEUCCp9C9UAyRXqqIVe~qLGADHmfDgInNUsYsbcrunrjEn0MAlLjyPCM6Y3tug73ZtURWK4L~yIjLzP~oexxSnuCTioOs4ZuM1jeyQSOxuO~KiqUSCred1iw7qIkEurGKos4Lvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          date: '2018-01-03',
          amount: 300
        }
      ]
    }
  }
}
...
</script>
```
