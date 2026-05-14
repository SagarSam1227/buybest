import type { eachCategory } from "../types/products";

export let categoryArray : eachCategory[]= [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 21q-2.077 0-3.538-1.461T11 16t1.462-3.538T16 11t3.539 1.462T21 16t-1.461 3.539T16 21m0-1q1.65 0 2.825-1.175T20 16t-1.175-2.825T16 12t-2.825 1.175T12 16t1.175 2.825T16 20M3 19v-8.896l2.458-5.488H3.962V3h7.077v1.616H9.542l2.497 5.646q-.206.115-.41.275t-.406.355L8.469 4.616H6.531L4 10.342V18h5.289q.067.275.173.528q.107.253.234.472zm13-9.385q-.646-.173-1.073-.696T14.5 7.692t.427-1.227T16 5.77zq.173-.646.696-1.073t1.227-.427t1.227.427t.696 1.073z"/></svg>`,
    name:"Grocery"
  },
   {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" stroke-width="3" viewBox="0 0 24 24"><path fill="currentColor" d="M7.616 22q-.672 0-1.144-.472T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.846q.67 0 1.143.472q.472.472.472 1.144V6.83q.373.04.648.31q.275.269.275.648v1.769q0 .379-.275.648t-.648.31v9.869q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h8.846q.269 0 .442-.173t.173-.442V3.615q0-.269-.173-.442T16.462 3H7.616q-.27 0-.443.173T7 3.616v16.769q0 .269.173.442t.443.173M7 21V3zm5.588-1.99q.22-.22.22-.549q0-.328-.22-.548t-.55-.22t-.548.22t-.22.549t.22.549t.549.22t.549-.22"/></svg>`,
    name:"Electronics"
  }, 
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"><path d="M42 44V22c0-9.941-8.059-18-18-18S6 12.059 6 22v22"/><path d="M24 43c5.523 0 10-8.954 10-20H14c0 11.046 4.477 20 10 20"/></g></svg>`,
    name:"Beauty"
  },
   {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 21q-2.077 0-3.538-1.461T11 16t1.462-3.538T16 11t3.539 1.462T21 16t-1.461 3.539T16 21m0-1q1.65 0 2.825-1.175T20 16t-1.175-2.825T16 12t-2.825 1.175T12 16t1.175 2.825T16 20M3 19v-8.896l2.458-5.488H3.962V3h7.077v1.616H9.542l2.497 5.646q-.206.115-.41.275t-.406.355L8.469 4.616H6.531L4 10.342V18h5.289q.067.275.173.528q.107.253.234.472zm13-9.385q-.646-.173-1.073-.696T14.5 7.692t.427-1.227T16 5.77zq.173-.646.696-1.073t1.227-.427t1.227.427t.696 1.073z"/></svg>`,
    name:"Grocery"
  },
   {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 21q-2.077 0-3.538-1.461T11 16t1.462-3.538T16 11t3.539 1.462T21 16t-1.461 3.539T16 21m0-1q1.65 0 2.825-1.175T20 16t-1.175-2.825T16 12t-2.825 1.175T12 16t1.175 2.825T16 20M3 19v-8.896l2.458-5.488H3.962V3h7.077v1.616H9.542l2.497 5.646q-.206.115-.41.275t-.406.355L8.469 4.616H6.531L4 10.342V18h5.289q.067.275.173.528q.107.253.234.472zm13-9.385q-.646-.173-1.073-.696T14.5 7.692t.427-1.227T16 5.77zq.173-.646.696-1.073t1.227-.427t1.227.427t.696 1.073z"/></svg>`,
    name:"Grocery"
  },
   {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 21q-2.077 0-3.538-1.461T11 16t1.462-3.538T16 11t3.539 1.462T21 16t-1.461 3.539T16 21m0-1q1.65 0 2.825-1.175T20 16t-1.175-2.825T16 12t-2.825 1.175T12 16t1.175 2.825T16 20M3 19v-8.896l2.458-5.488H3.962V3h7.077v1.616H9.542l2.497 5.646q-.206.115-.41.275t-.406.355L8.469 4.616H6.531L4 10.342V18h5.289q.067.275.173.528q.107.253.234.472zm13-9.385q-.646-.173-1.073-.696T14.5 7.692t.427-1.227T16 5.77zq.173-.646.696-1.073t1.227-.427t1.227.427t.696 1.073z"/></svg>`,
    name:"Grocery"
  },
   {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 21q-2.077 0-3.538-1.461T11 16t1.462-3.538T16 11t3.539 1.462T21 16t-1.461 3.539T16 21m0-1q1.65 0 2.825-1.175T20 16t-1.175-2.825T16 12t-2.825 1.175T12 16t1.175 2.825T16 20M3 19v-8.896l2.458-5.488H3.962V3h7.077v1.616H9.542l2.497 5.646q-.206.115-.41.275t-.406.355L8.469 4.616H6.531L4 10.342V18h5.289q.067.275.173.528q.107.253.234.472zm13-9.385q-.646-.173-1.073-.696T14.5 7.692t.427-1.227T16 5.77zq.173-.646.696-1.073t1.227-.427t1.227.427t.696 1.073z"/></svg>`,
    name:"Grocery"
  },
   {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 21q-2.077 0-3.538-1.461T11 16t1.462-3.538T16 11t3.539 1.462T21 16t-1.461 3.539T16 21m0-1q1.65 0 2.825-1.175T20 16t-1.175-2.825T16 12t-2.825 1.175T12 16t1.175 2.825T16 20M3 19v-8.896l2.458-5.488H3.962V3h7.077v1.616H9.542l2.497 5.646q-.206.115-.41.275t-.406.355L8.469 4.616H6.531L4 10.342V18h5.289q.067.275.173.528q.107.253.234.472zm13-9.385q-.646-.173-1.073-.696T14.5 7.692t.427-1.227T16 5.77zq.173-.646.696-1.073t1.227-.427t1.227.427t.696 1.073z"/></svg>`,
    name:"Grocery"
  },
];

export const placeholders: string[] = [
  // Groceries
  "Rice",
  "Wheat Flour",
  "Sugar",
  "Salt",
  "Cooking Oil",
  "Milk",
  "Eggs",
  "Bread",
  "Tea Powder",
  "Coffee Powder",

  // Electronics
  "Smartphone",
  "Laptop",
  "Bluetooth Speaker",
  "Smart Watch",
  "Headphones",
  "Keyboard",
  "Mouse",
  "Monitor",
  "Power Bank",
  "USB Cable",
];

export const products = [
  {
    id: 1,
    name: "Rice",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c",
  },
  {
    id: 2,
    name: "Wheat Flour",
    price: 48,
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
  },
  {
    id: 5,
    name: "Cooking Oil",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
  },
  {
    id: 6,
    name: "Milk",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150",
  },
  {
    id: 7,
    name: "Eggs",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
  },
  {
    id: 8,
    name: "Bread",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff",
  },
  {
    id: 9,
    name: "Tea Powder",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2",
  },
  {
    id: 10,
    name: "Coffee Powder",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
  {
    id: 11,
    name: "Tomato",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337",
  },
  {
    id: 12,
    name: "Potato",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
  },
  {
    id: 13,
    name: "Onion",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1508747703725-719777637510",
  },
  {
    id: 14,
    name: "Apple",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
  },
  {
    id: 15,
    name: "Banana",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
  },
  {
    id: 16,
    name: "Orange",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e",
  },
  {
    id: 17,
    name: "Chicken",
    price: 240,
    image:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791",
  },
  {
    id: 18,
    name: "Fish",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1544943910-4c1dc44aab44",
  },
  {
    id: 19,
    name: "Biscuits",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
  },
  {
    id: 20,
    name: "Noodles",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d",
  },
];