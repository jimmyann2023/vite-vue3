import { LAYOUT } from '@/router/constant';
// import OrderList from '@/views/purchasing/order/OrderList.vue';
import { purchasingRoute } from '@/router/module/supplyChain/purchase';
export const supplyChainRoute = [
  {
    path: '/supplyChain',
    name: 'SupplyChain',
    component: LAYOUT,
    redirect: '/supplyChain/PurchasingCenter',
    children: [...purchasingRoute],
    // children: [{ path: 'list', name: 'OrderList', component: OrderList }],
  },
];
