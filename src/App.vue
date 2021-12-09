<template>
  <div id="app">
    <Receipt :receipts="receipts"/>
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
      receipts: [
        {
          id: 1,
          logoUrl: 'https://s3-alpha-sig.figma.com/img/1149/64a0/ff89d31f4998535154f9b3d90d524983?Expires=1639958400&Signature=J37Tqb6iBve7WvusP9szXkBt~IiSl3k3EYkOv0ZjqzYbM5yysHAnalog5Sei7r08EsJatiWKtPVRJRo8zuSqyEicBszbtMjDMtL5qnsP~ZSUGxSRnd45aDviQ4BvIrmZQZTyoP4bBhYTd0bipC5LoHcj3gBCqrELYr7IybBAAUDbdTQa9z1euRGNBLlHb20rYtPC6~TjgSo6jLVrEUCCp9C9UAyRXqqIVe~qLGADHmfDgInNUsYsbcrunrjEn0MAlLjyPCM6Y3tug73ZtURWK4L~yIjLzP~oexxSnuCTioOs4ZuM1jeyQSOxuO~KiqUSCred1iw7qIkEurGKos4Lvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          customText1: '自訂文字1',
          customText2: '自訂文字2',
        },
        {
          id: 2,
          logoUrl: 'https://s3-alpha-sig.figma.com/img/1149/64a0/ff89d31f4998535154f9b3d90d524983?Expires=1639958400&Signature=J37Tqb6iBve7WvusP9szXkBt~IiSl3k3EYkOv0ZjqzYbM5yysHAnalog5Sei7r08EsJatiWKtPVRJRo8zuSqyEicBszbtMjDMtL5qnsP~ZSUGxSRnd45aDviQ4BvIrmZQZTyoP4bBhYTd0bipC5LoHcj3gBCqrELYr7IybBAAUDbdTQa9z1euRGNBLlHb20rYtPC6~TjgSo6jLVrEUCCp9C9UAyRXqqIVe~qLGADHmfDgInNUsYsbcrunrjEn0MAlLjyPCM6Y3tug73ZtURWK4L~yIjLzP~oexxSnuCTioOs4ZuM1jeyQSOxuO~KiqUSCred1iw7qIkEurGKos4Lvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          date: '2018-01-02',
          amount: 200
        },
        {
          id: 3,
          logoUrl: 'https://s3-alpha-sig.figma.com/img/1149/64a0/ff89d31f4998535154f9b3d90d524983?Expires=1639958400&Signature=J37Tqb6iBve7WvusP9szXkBt~IiSl3k3EYkOv0ZjqzYbM5yysHAnalog5Sei7r08EsJatiWKtPVRJRo8zuSqyEicBszbtMjDMtL5qnsP~ZSUGxSRnd45aDviQ4BvIrmZQZTyoP4bBhYTd0bipC5LoHcj3gBCqrELYr7IybBAAUDbdTQa9z1euRGNBLlHb20rYtPC6~TjgSo6jLVrEUCCp9C9UAyRXqqIVe~qLGADHmfDgInNUsYsbcrunrjEn0MAlLjyPCM6Y3tug73ZtURWK4L~yIjLzP~oexxSnuCTioOs4ZuM1jeyQSOxuO~KiqUSCred1iw7qIkEurGKos4Lvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          date: '2018-01-03',
          amount: 300
        }
      ]
    }
  },
}
</script>

<style>

</style>
