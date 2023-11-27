import JsxButton from '@/components/JsxButton';
import { LAYOUT } from '@/router/constant';
import About from '@/views/About.vue';
import Home from '@/views/Home.vue';
import SvgDemo from '@/views/SvgDemo.vue';
import VxeTable from '@/views/vxeTableBasic.vue';

export const basicRoute = [
  {
    path: '/',
    name: 'PageLayout',
    component: LAYOUT,
    redirect: '/index',
    meta: {},
    children: [
      { path: 'index', name: 'Index', component: Home },
      { path: 'about', name: 'About', component: About },
      { path: 'jsx', name: 'JSX', component: JsxButton },
      { path: 'svg', name: 'SvgIcon', component: SvgDemo },
      { path: 'vxe-table', name: 'VxeTable', component: VxeTable },
    ],
  },
];
