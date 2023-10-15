import shortid from "shortid";

export const HeaderLinks = [
  { to: '/products', id: shortid.generate(), label: 'Оборудование' },
  { to: '/solutions', id: shortid.generate(), label: 'Решения' },
  { to: '/service', id: shortid.generate(), label: 'Услуги' },
  { to: '/about', id: shortid.generate(), label: 'О компании' },
  { to: '/contact-us', id: shortid.generate(), label: 'Контакты' },
];
